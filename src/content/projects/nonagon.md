---
title: "Community Event Signup & Approval Platform"
startDate: "2025-11-01"
summary: "GraphQL-first full-stack platform for posting community events and running request-to-join workflows. FastAPI + Strawberry GraphQL backend; React dashboard with analytics and an interactive relationship graph (zoom, pan, scroll)."
tags:
  [
    "Python",
    "FastAPI",
    "GraphQL",
    "Strawberry",
    "PostgreSQL",
    "Supabase",
    "SQLAlchemy",
    "React",
    "JWT",
    "RBAC",
    "Analytics",
    "Data Visualization",
  ]
image: ""
repo: "https://github.com/piyushsatti/nonagon"
---

## Overview

A full-stack application for managing **community event postings and controlled sign-ups**. Organizers create events, participants submit sign-up requests, and organizers review and approve or reject requests under role-based rules. :contentReference[oaicite:0]{index=0}

For HR: this project demonstrates end-to-end ownership across **API design, authentication/authorization, relational data modeling, and UI delivery**, with an emphasis on secure workflow gating and scalable list navigation. :contentReference[oaicite:1]{index=1}

## Pipeline

- **Define the schema.** GraphQL-first workflow using Strawberry on FastAPI, implementing schema-driven queries and mutations. :contentReference[oaicite:2]{index=2}
- **Secure the workflow.** Username/password authentication with secure password hashing and JWT-based sessions; resolver-level RBAC enforces who can approve, edit, and view sensitive data. :contentReference[oaicite:3]{index=3}
- **Model the system.** PostgreSQL (Supabase) schema implemented with SQLAlchemy, using referential integrity and pagination patterns to support infinite-scroll views for events, requests, approvals, and notifications. :contentReference[oaicite:4]{index=4}
- **Deliver insights.** React dashboard providing analytics plus an interactive relationship graph (zoom, pan, scroll) to visualize linked entities and surface engagement signals. :contentReference[oaicite:5]{index=5}

## Impact

- Reduced manual coordination by turning event sign-ups into a **structured request and approval workflow** (organizer-controlled onboarding). :contentReference[oaicite:6]{index=6}
- Improved safety and correctness via **role-based authorization at the resolver level**, preventing unauthorized approvals or edits. :contentReference[oaicite:7]{index=7}
- Supported growth-ready UI patterns using **pagination and infinite-scroll**, avoiding slow, unbounded list loads as datasets expand. :contentReference[oaicite:8]{index=8}
- Enabled faster decision-making with **analytics and relationship visualization** for organizers (linked entities and engagement signals). :contentReference[oaicite:9]{index=9}

## Next steps

- Add audit logs for approvals and edits (who, what, when) to strengthen governance and traceability.
- Expand notifications to cover reminders, waitlists, and status changes with user-configurable preferences.
- Add rate-limiting and abuse controls around sign-up requests and mutations, plus basic observability (request tracing and error dashboards).
- Formalize API contracts for dashboard widgets (versioned GraphQL types and stable analytics queries).

## Learnings

- How to design and implement a GraphQL-first full-stack application with FastAPI and Strawberry.
- Best practices for JWT-based authentication and resolver-level RBAC in GraphQL APIs.
- Techniques for modeling relational data with SQLAlchemy and PostgreSQL to support scalable pagination.
- Approaches to building interactive data visualizations in React for relationship graphs and analytics dashboards.
- Strategies for end-to-end ownership of API design, security, data modeling, and UI delivery in a full-stack project.
