---
title: "Lessons in Domain Modelling by Building Nonagon"
description: "How a ETL pipeline for Discord messages shaped my approach to schema design."
pubDate: "2024-09-20"
tags: ["Python", "FastAPI", "ETL", "MongoDB", "Discord", "Observability"]
image: ""
---

**Goal:** turn noisy chat into structured, actionable data with minimal lag.

## Ingest design
- Listen to message events → parse → normalize → upsert.
- Reserve IDs for cross-message joins and edits.

## API surface
- Read endpoints for dashboards; write endpoints with role-based auth.
- Idempotent writes keep ops stable.

## Performance notes
- Batching and connection reuse kept p95 low.
- Log spans across ETL and API clarified hotspots.

**Next:** cached projections for public analytics.
