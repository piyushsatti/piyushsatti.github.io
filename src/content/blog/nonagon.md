---
title: "Building Nonagon — Lessons from a Discord-Native System"
description: "Reflecting on the technical and architectural lessons learned while building Nonagon — a Discord-native quest and summary management system built with FastAPI and MongoDB."
pubDate: "2025-10-09"
tags: [Python, FastAPI, Discord, LearningByBuilding, Backend, Portfolio]
---

## Overview

Nonagon started as a simple way to manage quests and adventure summaries inside Discord. Over time, it became an experiment in backend design, architecture discipline, and self-directed learning. I built it to serve a small community but treated it as a full production project—from API design to CI pipelines.

## Motivation

Manual quest tracking was error-prone and inconsistent. I wanted a tool that could log adventures, automate summaries, and later provide insights into community activity. Discord’s extensibility made it the ideal starting point.

## Technical Journey

Nonagon combines a **FastAPI** backend, **MongoDB Atlas** for persistence, and a **Discord bot** for interaction. The architecture follows a **hexagonal (ports-and-adapters)** pattern. This kept the domain logic isolated and made it easy to extend with new adapters—first Discord, next a minimal web dashboard.

### Architecture Decisions

I learned to think in use cases instead of endpoints. Each adapter (Discord, HTTP, persistence) implements interfaces defined in the core. This made testing simpler, debugging faster, and future extensions predictable.

### API Design

The API lives under `/v1/**` routes, uses Pydantic models for schema validation, and implements RFC7807-compliant error handling. Admin operations use a lightweight `X-Admin-Token` header—enough for internal control without adding heavy authentication.

### Reliability and Resilience

Discord bots face rate limits and intermittent timeouts. Deferring interactions, centralizing retries, and persisting failures instead of discarding them turned out to be critical lessons. I learned to design for partial failure and fast recovery.

### Testing and CI

The project uses layered tests: domain, adapter, and end-to-end. GitHub Actions runs them independently. This approach caught regressions early and gave confidence to refactor without a staging server. Speed mattered more than coverage.

## Product Thinking

The roadmap focused on reliability first, expansion later. Once quests and summaries stabilized, I planned incremental features: participation tracking, an admin dashboard, and later analytics. Each feature builds on the same API to avoid rewriting logic.

## Learning with ChatGPT

Throughout development, I used ChatGPT as a design partner—drafting architecture outlines, debugging FastAPI routes, shaping test strategies, and refining documentation. These sessions evolved into a structured reflection process: converting raw commits into concise LinkedIn posts and eventually into this portfolio piece.

## Key Takeaways

* Build narrow but deep: finish core loops before expanding.
* Keep the domain pure; adapters will change.
* Test behavior, not frameworks.
* Use automation for discipline, not complexity.
* Document as you go—reflection turns into portfolio content.

## What’s Next

Nonagon’s next iteration will add a read-only web view powered by the same API, plus small analytics hooks for engagement tracking. The architecture is ready; only execution remains.

---

**Repo:** [https://github.com/piyushsatti/Nonagon](https://github.com/piyushsatti/Nonagon)

**Tags:** #Python #FastAPI #Discord #LearningByBuilding #Backend #Portfolio
