---
title: "What Clicked: Spring Boot + GraphQL While Rebuilding RISK"
date: "2025-09-01"
description: "Notes from building a typed GraphQL backend: schema design, phases as State, and testability wins."
tags: ["Java", "Spring Boot", "GraphQL", "DDD", "Testing"]
---

> A backend-first walkthrough of choices that made the project maintainable.

## Why GraphQL here
- **Typed** I/O helped surface mistakes at compile time.
- Slices of `gameStatus` avoided over-fetching.

## Modeling phases with State
Reinforce → Attack → Fortify become explicit phase objects. This made unit tests targeted and readable.

## Map validation as a graph
A validator ensures connectivity and continent bonuses. Fail early, reduce runtime surprises.

## Takeaways
- Use a typed schema even if UI is TBD.
- Treat phases as composable state — simpler tests.
- Validation logic belongs in its own layer.
