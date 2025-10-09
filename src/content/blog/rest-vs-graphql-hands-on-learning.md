---
title: "REST vs GraphQL: Contrasting Two API Designs"
date: 2025-10-09
tags: [Python, Java, REST, GraphQL, Backend, LearningByBuilding]
summary: "A deep technical comparison of REST (in Nonagon) and GraphQL (in Risk-Emulated), exploring schema design, error handling, performance, and trade-offs."
---

## Introduction
In my two projects, I tried two approaches to API design:

- **Nonagon**: a Discord + REST backend using FastAPI + Pydantic + MongoDB
- **Risk-Emulated**: a turn-based strategy simulation with a GraphQL backend (Spring Boot + GraphQL + PostgreSQL)

This post dives into schema structure, client flexibility, error handling, performance, and when I’d choose one vs the other.

---

## Core Architecture Differences

### Nonagon (REST)
- All endpoints under `/v1/**`, versioned to preserve compatibility
- Pydantic models define request and response schemas, which drive OpenAPI docs
- Error contracts follow `application/problem+json` (RFC 7807) shapes
- HTTP status codes + structured payloads enable predictable handling
- Adapters map domain use cases to REST controllers
- Already mature tests around endpoint behaviors

### Risk-Emulated (GraphQL)
- GraphQL schema defines types like `Game`, `Player`, `Territory`, and queries/mutations
- Clients have freedom to request nested fields, fragments, and custom shapes
- Resolvers implement the underlying business logic, often aggregating domain services
- Must enforce visibility rules: which fields each player can see
- Caching and query cost limits become important to prevent abuse

---

## Schema Discipline & Typing

With REST, schema changes involve updating Pydantic models and route handlers. The contract is explicit and versioned. Mistakes are immediately visible.

In GraphQL, schema evolves via type definitions. But mistyped resolvers or mis-aligned domain types can lead to runtime errors. The discipline here is heavier: you cannot rely on rigid request shapes for fallback logic — you must guard each resolver carefully.

---

## Error Handling & Client Feedback

REST gives a clear pipeline: status code + payload with `type`, `title`, `detail`, etc. Clients can build logic around status or problem codes.

GraphQL bundles errors into a single `errors` field. Partial data + errors may co-exist. Clients must inspect both data and errors. This flexibility is powerful but forces careful client logic.

I used GraphQL’s error extensions to tag which field or resolver failed. That helped trace issues in the frontend.

---

## Performance, Over-Fetching, and Complexity

REST endpoints tend to be coarse-grained. The client may over-fetch (get more fields than needed). But the overhead is predictable.

GraphQL gives granular control, so clients fetch exactly what they need. The downside: nested resolver trees, N+1 queries, complex joins, or deep recursions. You need tooling (e.g. query cost limits, caching, batching) to avoid performance cliffs.

In Risk-Emulated, I used DataLoader or batched fetching to collapse N+1 issues, and limited query depth to reduce abuse.

---

## Trade-offs & Decision Criteria

| Concern | REST (Nonagon) | GraphQL (Risk-Emulated) |
|---|---|---|
| Predictability | Very high | Medium |
| Client flexibility | Low | High |
| Schema evolution risk | Easier to migrate | Requires careful versioning and deprecation |
| Error clarity | Clear pipeline | Mixed (errors + partial data) |
| Complexity | Simpler for CRUD | More tooling and monitoring needed |
| Use case fit | Admin tooling, dashboard APIs | Interactive UIs, game state queries |

I found REST more reliable for back-office and admin APIs. GraphQL shone when clients need to drive rich, interactive views with dynamic shapes.

---

## When I’d Choose Which

- If the client side is simple or controlled (internal tooling), REST is safer and easier.
- If you expect many UI clients needing different data slices (dashboards, graph views), GraphQL pays off.
- If you must enforce view-level permissions (e.g. game state hidden per user), GraphQL’s resolver layer can centralize that logic.
- Always plan for monitoring: GraphQL errs silently more often, so tracing and cost control are critical.

---

## Closing Thoughts & Learnings

Switching from REST to GraphQL expanded my mental model of APIs. I learned:

- Contracts matter even when clients are flexible
- Monitoring is your safety net in more powerful API designs
- Schema evolution is easier when you version cautiously and deprecate fields consciously
- Use the tool that matches the problem: expressive clients get GraphQL, internal tooling gets REST

If you’re building a real-time UI or dashboard vs. an admin panel, start with what gives you confidence—and layer flexibility only when it's needed.

---

**Links**
- Nonagon (REST backend): https://github.com/piyushsatti/Nonagon
- Risk-Emulated (GraphQL backend): https://github.com/piyushsatti/risk-emulated