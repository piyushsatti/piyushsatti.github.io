---
title: "GameOps Suite (FastAPI + ETL + Discord)"
date: "2025-03-01"
summary: "End-to-end ops platform: Discord event ETL → MongoDB; FastAPI REST with authZ; containers on DigitalOcean; Redis; ~200 ms E2E typical actions; dashboard for player statistics."
tags: ["Python", "FastAPI", "ETL", "Discord", "MongoDB", "Docker", "Redis", "DigitalOcean", "AuthZ"]
repo: "https://github.com/piyushsatti/nonagon"
demo: ""
tldr:
  - "Event-driven ETL from Discord → MongoDB documents"
  - "FastAPI REST with role-based authorization"
  - "Containers on DigitalOcean; ~200 ms E2E for common flows"
---

## Overview
A production-leaning backend for **game sign-ups and telemetry**. Discord is the ops surface; the system ingests messages via events, normalizes them into MongoDB documents, and serves data through **FastAPI** endpoints.

## Pipeline
- **Ingest.** Discord event hooks → ETL workers → MongoDB collections.
- **Serve.** Role-based **FastAPI** endpoints for CRUD + analytics.
- **Deploy.** Containerized services on DigitalOcean droplets.

## Impact
- Real-time announcements and sign-ups
- Low-latency (~200 ms typical action path)
- Foundation for analytics dashboards and AI assistants

## Next steps
- Async stream processing for spikes
- Public read-only endpoints with cached projections
- Data contracts for dashboard widgets