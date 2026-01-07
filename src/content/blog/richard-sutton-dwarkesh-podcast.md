---
title: "Richard Sutton: Why Agents Need Goals, Ground Truth, and Continual Learning"
description: "A technical deep dive into Sutton’s core argument: next-token prediction is not enough. Intelligence needs goals, interaction, and learning from consequences."
pubDate: "2026-01-07"
updatedDate: "2026-01-07"
tags:
  ["Agents", "Reinforcement-Learning", "Continual-Learning", "LLM", "AI-Theory"]
sourceLink: "https://www.youtube.com/watch?v=21EYKqUsPfg"
tldr:
  - "Sutton defines intelligence as the computational ability to achieve goals, not to imitate text."
  - "RL supplies ground truth via reward and interaction; LLM pretraining largely does not."
  - "A world model, in Sutton’s sense, predicts consequences of actions and updates when surprised."
  - "Most learning signal should come from rich experience streams, not sparse end rewards."
  - "The 'Bitter Lesson' prediction: scalable methods that learn from experience outlast hand-designed knowledge."
---

If you follow modern “agent” discourse long enough, you start to see two different definitions of progress talking past each other.

One definition says progress is a better predictor, better reasoning traces, better tools, longer context. The other definition says progress is a better _agent_, meaning something that takes actions in an environment and gets better over time at achieving goals.

Richard Sutton is firmly in the second camp. His view is not a minor preference for reinforcement learning. It is a claim about what intelligence _is_.

This post unpacks the key ideas he returns to in the conversation and why they lead him to be skeptical that next-token prediction alone can produce the kind of continually improving agents people want.

## The core claim: intelligence is goal achievement, not imitation

Sutton leans on a classic, agent-centric definition: intelligence is the computational ability to achieve goals. Under that definition, the primary question is not “does the model sound correct?” It is “does the system reliably reach outcomes it is trying to reach?”

That framing matters because it forces a binary decision:

- If there is a goal, we can define success and failure.
- If we can define success and failure, we can define ground truth.
- If we have ground truth, learning can be anchored in what actually happened, not in what humans typically say.

This is why Sutton is not impressed by “LLMs are learning a world model” unless that “world model” is tied to action and consequences.

## What Sutton means by “ground truth”

A repeated theme is that agents need a training loop that produces ground truth signals from the environment.

In reinforcement learning, the environment provides feedback via reward and state transitions. You act, something happens, you observe it, and you update.

In LLM pretraining, the primary signal is: “what token comes next in this dataset?” Sutton treats this as imitation, not interaction. The model is rewarded for matching a human text distribution, not for changing the world to achieve something.

He is not saying next-token prediction is useless. He is saying it does not supply the specific ingredient that makes an agent an agent: a grounded notion of right and wrong defined by goals in an environment.

## World models: predicting consequences of actions

Sutton’s definition of a world model is operational:

A world model predicts what will happen next given what you do, and improves when those predictions are wrong.

This is important because it sets a bar that is easy to test:

- Does the system have an action channel that influences outcomes?
- Does it learn from surprises, meaning prediction errors that occur during deployment?
- Does it update its internal beliefs from those surprises?

Sutton’s skepticism is that many “world model” claims about LLMs are really claims about pattern completion over text. That can look like understanding, but it is not the same as a model that learns dynamics from experience and updates as the world changes.

## Continual learning is not a feature, it is the default

From Sutton’s view, continual learning is not a nice-to-have feature you bolt on. It is the natural consequence of being embedded in the agent-environment loop.

If the system is always acting and observing, it can always test hypotheses:

- “If I do X in situation S, will Y happen?”
- If it does, the belief is reinforced.
- If it does not, the belief must change.

This continuous correction is what makes “knowledge” in an agent meaningful. Knowledge is not a memorized statement. It is a predictive commitment that the world can refute.

This is also where Sutton’s critique of many agent demos lands: if the system cannot incorporate new information into its policy and value estimates over time, it is not learning in the sense he cares about.

## Reward is necessary but not sufficient

Sutton does not claim that reward alone builds intelligence. In fact, he emphasizes that most learning signal for a capable agent should come from the rich stream of experience, not from sparse rewards.

A useful mental model:

- Reward tells you what you want.
- Experience tells you how the world works.

A strong agent needs both. Reward without dynamics is blind. Dynamics without reward is aimless.

This is also why Sutton talks about intrinsic motivation and curiosity-like objectives. If you want a system to learn broadly, it needs incentives to explore and improve predictions, not just to chase sparse terminal rewards.

## Generalization: gradient descent does not guarantee transfer

Another technical point Sutton raises is that standard optimization does not inherently prefer solutions that generalize well. Gradient descent finds parameters that reduce training loss. If multiple parameterizations fit the data, nothing in the algorithm guarantees it will choose the one that transfers.

This is one reason he argues that human knowledge and hand-designed scaffolding often dominate current progress. Humans keep editing the setup until generalization appears. Sutton’s long-term bet is that scalable, general-purpose learning from experience will eventually beat hand-engineered tricks.

## The Bitter Lesson applied to agents

Sutton’s “Bitter Lesson” is a historical claim about what wins over time:

Methods that scale with compute and data eventually dominate methods that encode lots of human knowledge.

He sees modern LLM systems as mixed. They scale on compute, but also contain enormous amounts of human knowledge via curated datasets, human preferences, and task-shaped pipelines.

His prediction is that the long-run winners will be systems that shift away from human knowledge and toward experience, meaning agents that learn by acting, observing, and updating continuously.

## A practical translation: what Sutton would ask you to build

If you turn Sutton’s perspective into engineering requirements for an “agentic” system, the checklist becomes concrete:

1. **Explicit objective**: define what success means in measurable terms.
2. **Action channel**: the agent must do things that change outcomes, not only produce text.
3. **Environment feedback**: the system must observe consequences and not just offline labels.
4. **Online updates**: it must incorporate new evidence over time, not only within a context window.
5. **World modeling**: it should predict transitions and improve when wrong.
6. **Evaluation by outcomes**: measure goal achievement under distribution shift, not only benchmark accuracy.

If you are early in agents, this is a useful lens: it forces you to specify where the ground truth comes from and how the system gets better after deployment.

## Closing: why Sutton’s critique matters even if you work with LLM agents

Even if you are building LLM tool-use agents today, Sutton’s argument is a stress test:

- Is your “agent” improving over time, or is it replaying competence frozen at training time?
- When the environment changes, does the system adapt, or do you need a new training run?
- Are you measuring success by outcomes in an environment, or by plausibility of responses?

Sutton’s view is not that LLMs are worthless. It is that without goals, grounded feedback, and continual learning, you should not confuse a powerful imitator with an intelligent agent.

## Further reading and watchlist

- Sutton, “The Bitter Lesson” (essay)
- Reinforcement learning basics: policy, value function, temporal-difference learning
- Intrinsic motivation and curiosity in RL
- Lifelong and continual RL (non-stationary environments, streaming updates)
