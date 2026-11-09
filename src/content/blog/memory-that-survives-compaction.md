---
title: "Memory that survives compaction"
description: "This post is about two tries at keeping a coding agent on track after its context gets compacted: a plugin I built and closed, and a port of someone else's design that I use now."
pubDate: "2026-11-06"
author: "Piyush Satti"
tags: ["Agent tooling"]
image: "/blog-images/memory-that-survives-compaction/cover.png"
imageAlt: "Diagram: a long chat is compacted into a short summary, and three notes that cite their source lines come back after it"
draft: false
---

## What compaction and hooks are

A model can only read so much text at once, and that limit is its context window. When a long chat fills it, the harness compacts: it swaps the whole conversation for a summary the model writes and carries on from there. Anything that didn't make it into the summary is gone. Text is counted in tokens, which are about three quarters of a word each.

Hooks are small scripts the harness runs at fixed moments in a session. This post uses three: Stop fires when the agent finishes a turn, PreCompact fires just before a compaction, and SessionStart also fires right after one, where it can add text to the fresh context.

## My agents kept forgetting things after compaction

Right after a compaction my agents kept losing what was in progress, what they had already tried, which instruction was the latest and what they still owed me. I would re-explain, and the session would limp on.

## I built smartcompact as a checkpoint around the summary

[Smartcompact](https://github.com/piyushsatti/smartcompact) was a plugin for Claude Code, Codex and Pi, another coding-agent harness that I no longer run. Its hooks captured the active goal, the current state, open obligations and pointers to evidence, wrote them to an append-only ledger, and injected a small "continuation packet" into the first turn after compaction. I built it in seven gated phases over one day, and it passed 39 tests plus typecheck and smoke checks for all three harnesses. None of that said whether it helped.

## Measuring it never came out clean

I compared three setups: no compaction at all (the control), the harness's own compaction, and the harness's compaction plus smartcompact. The graders didn't know which setup produced which output, and the criteria were fixed before any run.

In one test I replayed a made-up session history and then checked 13 statements about the state of the work. The control got all 13 right, the harness's compaction got none, and smartcompact got 4. That was its only win over native compaction, and it still failed the check for whether the session was ready to continue.

The final experiment was one long task with two real compactions, each after more than 200,000 tokens. The control scored 9 of 14 and native compaction 7 of 14. The smartcompact run hit my account's rate limit after its first compaction, so it has no score.

## The packet copied the summary's mistake

In a live pilot, the native summary decided the task was "inert historical material", and smartcompact's packet copied that judgement into its own state section. Most failures I saw were about authority, meaning which instruction is current and what is actually done, and a better packet can't settle that.

## I closed it on September 24

I closed smartcompact instead of rerunning the missing arm. Measuring it properly needed many matched long-context runs, each slow and expensive, and every experiment turned up a new confound, and it stung to close something that passed every test I wrote for it.

## I ported someone else's design instead

I didn't want what my agent remembers to depend on what happens to survive inside its context. The design I use now comes from [pi-observational-memory](https://github.com/elpapi42/pi-observational-memory) by elpapi42, an extension for the Pi coding agent, and its model is the spec for my port, [observational-memory](https://github.com/piyushsatti/observational-memory). My part was moving it to plain hooks in other harnesses and listing every departure in [`SPEC.md`](https://github.com/piyushsatti/observational-memory/blob/main/SPEC.md).

<figure>
  <img src="/blog-images/memory-that-survives-compaction/c4.png" alt="Diagram of the parts of observational-memory and how they connect to the harness" />
  <figcaption>The parts of observational-memory and how they connect to the harness</figcaption>
</figure>

## The observer writes notes that cite their source lines

As a session runs, an observer model reads the new part of the transcript every 10,000 tokens or so (about 7,500 words) and writes short notes. Each note has a timestamp, a relevance rating from low to critical, and the ids of the transcript lines it came from, and the script checks every cited id against the chunk it showed the model and rejects any note without a valid source.

## The notes come back after a compaction

Every 20,000 observed tokens, a reflector distils durable reflections from the notes and a dropper retires notes that are safe to retire. When the harness compacts, a catch-up observer runs first, and then the notes go back into context within a budget of 8,000 tokens, about 6,000 words. A `recall` tool takes a note's id and returns the exact transcript lines behind it, so the agent can check it.

## The notes go after the summary instead of replacing it

Upstream, the notes are the compaction summary. OpenCode is the one harness where I could do the same, but I chose to feed the notes into its summary instead, so there they survive only if OpenCode's summary model copies them faithfully. In Claude Code, Codex and Cursor no hook can replace the harness's summary, so the notes are added after it.

<figure>
  <img src="/blog-images/memory-that-survives-compaction/sequence.png" alt="Sequence diagram of one compaction in Claude Code, step by step, showing which part gets each message" />
  <figcaption>One compaction in Claude Code, step by step: which part gets each message</figcaption>
</figure>

| Harness | Works | Missing |
| --- | --- | --- |
| Claude Code | observer, catch-up before compaction, notes after the summary, `recall` | replacing the summary itself |
| Codex | the same, once you trust its hooks | slash commands |
| Cursor | observer, catch-up, `recall` | a hook right after compaction, so the notes wait for the next tool call |
| OpenCode | observer, notes go into the summary, `recall` | a guarantee: the notes survive only if its summary copies them |

## A Claude Code mod first, then plain hooks

My first version was a 628-line TypeScript mod for Claude Code. On October 22 I decided to turn it into plain hooks for Claude Code, Codex and Cursor. The port moved into its own repo on October 25, and OpenCode 2 joined as a fourth harness the same day. It is one standard-library Python script plus small hook configs per harness and an OpenCode plugin.

## Three harnesses ran it end to end on October 25

I keep a verification ladder per harness, with steps from lint checks at the bottom to "in use day to day" at the top. On October 25 Claude Code, Codex and OpenCode each loaded it and ran it end to end. In the Claude Code run the observer recorded five notes, and after `/compact` they appeared after the summary and the model used `recall` on one and quoted it back. Cursor's CLI wasn't signed in, so I only ran its parser over 155 Cursor transcripts (9,511 lines) without errors.

## How it feels day to day

I've used it day to day since late October. Recall feels about the same as smartcompact, but it's faster: the notes get written as the chat goes on, so a compaction feels almost instant. Paired with regular compaction, it feels like one long ordinary chat.

## What hasn't been checked yet

The tool lockdown added to the observer commands on October 28 hasn't been re-run end to end. The dropper hasn't run inside any harness, and I haven't marked the top step, actual day-to-day use, for any harness on the ladder. Whether an agent with these notes makes better progress after a compaction than one without them is the question smartcompact never answered, and I haven't measured it this time either.
