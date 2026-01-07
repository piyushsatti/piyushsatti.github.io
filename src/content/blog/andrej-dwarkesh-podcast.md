---
title: "Andrej Karpathy: The Decade of Agents and the Missing Pieces in Today’s Stack"
description: "A technical deep dive into Karpathy’s thesis: agents are promising but immature. The bottlenecks are memory, multimodality, reliable computer use, better learning signals, and better self-improvement loops."
pubDate: "2026-01-07"
updatedDate: "2026-01-07"
tags:
  [
    "Agents",
    "LLM",
    "Continual-Learning",
    "Reinforcement-Learning",
    "Tool-Use",
    "Systems-Design",
  ]
sourceLink: "https://youtu.be/lXUZvyajciY?si=JJmUMgXmiQmgPHnn"
tldr:
  - "“Decade of agents” is a correction to hype: current agents are impressive but not dependable employees yet."
  - "Earlier RL-first agents (Atari, web control) were premature because reward was too sparse without strong representations."
  - "LLM pretraining bootstraps powerful representations, but models still lack durable memory and offline consolidation."
  - "In-context learning behaves like working memory; weights are a compressed, hazy recollection of training data."
  - "Outcome-based RL has poor credit assignment (“sucking supervision through a straw”); process supervision is hard because judges are gameable."
  - "Synthetic self-training risks distribution collapse; entropy and novelty matter for stable improvement."
---

Andrej Karpathy’s argument is not “agents are impossible.” It is “agents are early, and the hard parts are in the stack, not in the demos.” He frames an agent as something closer to a hireable intern than a chatbot. By that standard, today’s systems are useful, but not reliable. :contentReference[oaicite:0]{index=0}

This post breaks down his main claims and the technical problems they imply.

## Why “the decade of agents” (not the year)

Karpathy pushes back on short timelines. His reasoning is practical: agents fail in predictable ways that feel like missing infrastructure, not just missing scale. The gaps he highlights repeatedly include:

- multimodality that is robust in real settings
- computer use that does not go off rails
- memory that persists across sessions
- continual learning that updates behavior over time :contentReference[oaicite:1]{index=1}

He frames this as tractable engineering plus research, but across many bottlenecks, which is why he expects a decade of iteration rather than a single breakthrough.

## A short history: three waves he lived through

Karpathy describes AI progress as a sequence of shifts:

1. **Per-task deep learning** (vision, translation, narrow supervised wins).
2. **Early agent push via RL on games** (Atari as a proxy for agency).
3. **LLM-era representation learning** (foundation models as the substrate). :contentReference[oaicite:2]{index=2}

He calls the RL-on-games wave a partial misstep for “agents” aimed at knowledge work. His concrete critique is reward sparsity: if an agent is randomly clicking around a browser or environment, the reward is too sparse to train meaningful behavior without already having strong internal representations.

## “We are not building animals” and why that matters

Karpathy is cautious about direct animal analogies. His point is that animals arrive with a massive amount of capability “baked in” by evolution. In practice, AI training is not evolution, and today’s models are closer to “digital ghosts” trained by imitation of internet text than organisms trained by an evolutionary outer loop. :contentReference[oaicite:3]{index=3}

This motivates his stance that LLM pretraining is an engineering shortcut to something evolution-like: a practical way to bootstrap a competent cognitive base before adding agent loops.

## Pretraining does two things: knowledge plus “cognitive core”

Karpathy separates two effects of pretraining:

- **Knowledge acquisition**: absorbing facts and patterns from the internet.
- **Cognitive algorithm emergence**: circuits for in-context learning, problem-solving heuristics, strategies that look like “intelligence.” :contentReference[oaicite:4]{index=4}

He argues these are not the same, and that excessive memorized knowledge can become a liability for agents, especially when they need to operate off-manifold (outside typical internet patterns). He suggests the next stage is isolating and preserving the “cognitive core” while reducing dependence on memorized content.

## In-context learning vs weights: working memory vs compressed memory

He uses a clean analogy:

- **Context window + KV cache** behaves like working memory.
- **Model weights** are a heavily compressed, hazy recollection of training. :contentReference[oaicite:5]{index=5}

This connects to why RAG and “put the doc in the prompt” often works: the relevant information becomes directly accessible. It also motivates his skepticism that longer context alone solves continual learning, because it still does not produce persistent updates.

## Continual learning: “sleep” as offline consolidation

Karpathy highlights that humans appear to have an offline distillation process, often discussed via sleep: the day’s experience does not stay as a context window forever, but something consolidates into long-term memory.

He claims LLMs lack a robust analogue of:

- distilling important experiences back into parameters
- maintaining stable “personalized” models across time (possibly sparse adaptations like LoRA-style updates)
- running an internal review loop that improves future behavior :contentReference[oaicite:6]{index=6}

He mentions sparse attention as one mechanism for longer context, but treats it as only part of the solution.

## Nanochat: why “build it from scratch” is the learning path

Karpathy describes nanochat as an end-to-end minimal repository that covers the whole “ChatGPT clone” pipeline. His recommended learning method is:

- rebuild it from scratch
- reference, but do not copy-paste
- force yourself to resolve unknowns through implementation :contentReference[oaicite:7]{index=7}

He emphasizes a distinction between surface knowledge and implementation knowledge: you can think you understand a system until you must assemble every piece yourself.

## Coding models: where they help and where they fail

He segments usage into three buckets:

1. no LLMs (write everything manually)
2. autocomplete assistance (high bandwidth, developer-led)
3. “vibe coding” agents (delegate tasks end-to-end) :contentReference[oaicite:8]{index=8}

His claim is that today’s agents are best on boilerplate and common patterns, and weakest at novel, tightly coupled, custom-designed systems. He gives concrete failure modes:

- forcing standard frameworks when you are intentionally deviating
- adding defensive code and complexity that does not match the goal
- misunderstanding local architectural decisions
- using deprecated APIs
- producing “net negative” changes that require cleanup :contentReference[oaicite:9]{index=9}

His preferred mode is still autocomplete with the developer as the architect, with agents used selectively (for non-critical code, or when translating into languages the developer is weaker at).

## Reinforcement learning critique: credit assignment and “sucking supervision through a straw”

Karpathy is unusually harsh on outcome-based RL as commonly applied to LLMs. His core critique is credit assignment:

- you roll out a long trajectory
- you get a single scalar reward at the end
- you broadcast that scalar backward across all steps, including wrong turns :contentReference[oaicite:10]{index=10}

He argues humans do something closer to review and selective reinforcement: identifying which parts were good and which were mistakes, rather than blindly upweighting an entire successful trajectory.

## Why process supervision is hard: judges are gameable

Process supervision attempts to provide intermediate feedback (partial credit per step). Karpathy says the problem is not the idea, but automating it reliably.

If you use an LLM as a judge (reward model), it becomes a target. Reinforcement learning will find adversarial examples and “cracks” in the judge. He gives an example pattern where nonsense text can achieve high reward because it exploits a judge weakness. :contentReference[oaicite:11]{index=11}

This is a technical bottleneck: scalable step-level supervision requires evaluators that are robust under optimization pressure.

## Synthetic data and “collapse”: entropy as a requirement

Karpathy warns that naive self-training on model-generated reflections can degrade the system. The issue is distribution collapse:

- individual samples look plausible
- the distribution lacks diversity
- training too much on it can narrow the model further :contentReference[oaicite:12]{index=12}

He ties this to entropy: systems need novelty and diversity to avoid collapsing into repetitive patterns. He connects this to human cognition: people also become repetitive over time, and mechanisms like dreaming may inject novelty to prevent overfitting.

## Implementation translation: what Karpathy’s view implies for agent builders

If you translate his perspective into an engineering roadmap, the missing components look like:

1. **Reliable tool use**: controllable computer actions with guardrails and recovery loops.
2. **Durable memory**: store, retrieve, and summarize relevant state across sessions.
3. **Consolidation**: offline distillation of experience into long-term updates.
4. **Better learning signals**: beyond sparse outcome rewards; step-level feedback that is robust to gaming.
5. **Anti-collapse data loops**: synthetic generation that maintains diversity and does not degrade. :contentReference[oaicite:13]{index=13}

## Further links

- Andrej Karpathy interview transcript source: https://www.youtube.com/watch/lXUZvyajciY
