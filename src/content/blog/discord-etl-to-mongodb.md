---
title: "Building a Discord → MongoDB ETL for Real-Time Ops"
date: "2025-09-01"
description: "Event-driven ingestion, schema design, and keeping E2E latency near 200 ms."
tags: ["Python", "FastAPI", "ETL", "MongoDB", "Discord", "Observability"]
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
