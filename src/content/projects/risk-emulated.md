---
title: "Risk-Emulated (Spring Boot + GraphQL)"
startDate: "2024-08-01"
endDate: "2024-11-01"
summary: "Playable RISK backend using Spring Boot + GraphQL with a typed schema (createGame, reinforce, attack, gameStatus), map validator, State/Strategy engine, audit MoveLog, and CI gates."
tags: ["Java", "Spring Boot", "GraphQL", "DDD", "Docker", "PostgreSQL", "Testing"]
image: ""
repo: "https://github.com/piyushsatti/risk-emulated"
---

## Overview
A backend-only, rules-accurate **RISK** implementation. It exposes a **typed GraphQL API** for map creation and turn phases while isolating game logic behind domain services. The focus: correctness, testability, and reproducibility.

## Problem → Solution → Impact
- **Problem.** Represent turn-based board-game mechanics (setup, reinforce, attack, fortify) as safe, testable server operations.
- **Solution.** **DDD** entities (`Game`, `Player`, `Territory`, `Continent`, `Card`, `MoveLog`), a phase/state engine (State pattern), and pluggable combat/reinforcement policies (Strategy). A graph-based validator enforces connected maps and continent bonuses.
- **Impact.** Deterministic turns (audit via `MoveLog`), fast iteration on rules, and clean boundaries for future UI.

## API (examples)
- Queries/Mutations: `createGame`, `reinforce`, `attack`, `fortify`, `gameStatus`.
- Strongly-typed I/O via GraphQL, ideal for future UI or bots.

## Testing & CI
Style gates (**Checkstyle/Spotless**), coverage checks, and GitHub Actions workflows. Observability via MoveLog enables step-by-step replay.

## Next steps
- Add rate-limited public sandbox
- Extend schema for map editors and variants
- More coverage on edge combat cases