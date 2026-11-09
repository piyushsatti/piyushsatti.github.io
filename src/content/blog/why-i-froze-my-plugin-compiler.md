---
title: "Why I froze my own plugin compiler"
description: "When the part that differs between targets has to be written by hand anyway, a compiler only adds a step."
pubDate: "2026-11-07"
author: "Piyush Satti"
tags: ["Agent tooling"]
image: "/blog-images/why-i-froze-my-plugin-compiler/cover.png"
imageAlt: "Diagram: before, one source goes through a compiler into six folders; now, one plugin folder with a manifest per harness serves Claude Code, Codex and Cursor with no build step"
draft: false
---

This post is about [weave](https://github.com/piyushsatti/weave), a plugin compiler I built over the summer, and why I froze it on October 22. A plugin is a bundle that adds abilities to a coding agent: skills (instructions the agent loads when it needs them), commands, hooks (scripts the harness runs at fixed moments) and MCP servers, which plug outside tools into the agent through the Model Context Protocol. Every coding-agent harness wants plugins in its own shape, with its own rules for where each of those goes. weave let me write a plugin once and get a finished folder for each target: Claude Code, Codex, OpenCode, Pi, a portable package that Cursor and Copilot both read, and a set of repository instruction files.

It started with crucible, a review plugin of mine, which I wanted in Claude Code and Codex without keeping two copies.

## How weave works

You write one plugin source: a manifest that lists the plugin's skills, MCP servers and hooks, and the harnesses you want it in. When you tag a release, weave runs in the plugin's own CI. A front end checks the manifest and builds one tree of everything the plugin contains. Then one back end per target writes that harness's folder from the tree. Nothing gets built on the user's machine: they download the folder for their harness and use it.

It got there in steps. It started on July 6 as a repository that held my plugins plus some shared build scripts. On August 9 the plugins moved out, so the repository held only the tool, and on August 10 I wrote down the decision to treat it as a compiler, with the front end and back ends described above. Before writing the back ends I spent two days surveying nine environments to document what each one could carry, and three of them changed format while I was surveying.

## The build stopped when a target couldn't hold something

<figure>
  <img src="/blog-images/why-i-froze-my-plugin-compiler/c4.png" alt="Diagram of the parts of weave and how they connect" />
  <figcaption>The parts of weave and how they connect</figcaption>
</figure>

Pi has no MCP surface, and the portable package format defines no hooks or commands. When a plugin declared something a target couldn't hold, the build stopped with a message that started `CANNOT SHIP THIS TO PI.` and named the item, the manifest line that declared it, and the reason.

The two ways forward were to drop that harness or write the loss down under a `degrade` key. A declared loss was printed during the build and recorded in a lock file inside each folder and again in the release manifest. This is the part I'm still proud of.

<figure>
  <img src="/blog-images/why-i-froze-my-plugin-compiler/sequence.png" alt="Sequence diagram of a release that weave refuses, then ships once the loss is written down" />
  <figcaption>A release weave refuses, then ships once the loss is written down</figcaption>
</figure>

## It stalled on two decisions that contradicted each other

weave kept a decision record in its wiki, one page per design decision. The last commit was on August 16. On August 9 I had recorded a rule that weave stays one repository and is never split, not even into a separate template repository. But a template repository had been created and pushed a few hours earlier, and I never settled which one was right.

That template repository was also marked as a GitHub template. When you use a template, GitHub copies the repository's top folder, but the plugin manifest sat one folder down. So "Use this template" produced a repository that couldn't build. Stencil, the templating language meant for version 0.2.0, was decided the same week and never built. Hooks had a neutral vocabulary of six moments, but Claude Code was the only harness weave actually emitted hooks for.

## In October I built it again without noticing

In October I was consolidating my machine setup and shared agent config into one repository, which had its own plugin compiler. On the morning of October 22 I added a Cursor target to it. Typecheck was clean and 94 of 95 tests passed, and since no plugin had opted into Cursor yet, the new target produced nothing.

A review that same day compared this compiler with weave and found I was rebuilding the compiler that had already stalled. The new repo kept a decision ledger, one file per decision, and the review also found three places where it had drifted from its own rules, one of them an entry still marked as needing reconciliation. So I now had two compilers for the same job.

## I froze both compilers the same day

Once I saw I'd built the same compiler twice, I froze both: neither gets new targets or features, existing installs keep working from their last release, and nothing was deleted.

The harnesses already share most of a plugin: a skill is a folder with a `SKILL.md` file in every one of them, and MCP config is close to identical. The part that really differs is hooks, and the research I had just done on hooks for observational memory across Claude Code, Codex and Cursor showed that each harness has its own events and its own input shapes. Those have to be written by hand per harness anyway, and a compiler would only have generated the parts that were already the same, so freezing it felt better than I expected: the refusal idea survived, and that was the part I cared about.

## Now each plugin is one folder every harness reads

There's no build step now. Each plugin is one folder that all three harnesses read directly, with a manifest per harness side by side, shared skills, two identical MCP files and a hooks folder with one script and one config per harness. A lint script checks that the manifests agree on name and version and that the two MCP files match.

A plugin counts as moved only when it is installed and runs in each harness it claims. I keep a verification ladder per plugin, with steps from lint checks at the bottom to day-to-day use at the top, and the date and the exact command for every step that actually ran.

## The refusal and the ledger rule stayed

Each native plugin's README now has a table per harness of what works and what is reduced or missing, which is the same idea as `CANNOT SHIP THIS TO PI` written as prose.

The decision ledger got a new rule. An entry is never edited to say something different; a later entry supersedes it, and the old one gets marked. The ledger's README says the rule exists because weave stalled on two contradicting decisions.

The weave repository is still public, and its README still describes a compiler.
