---
title: "pi-orm: A lightweight class-to-SQLite ORM"
startDate: "2022-04-01"
endDate: "2022-04-05"
summary: "Python class metadata → SQLite table creation → CRUD helpers, providing a small helper for mapping dict-based schema definitions into tables and parameterized data operations."
tags: ["Python", "SQLite", "orm", "Database", "CRUD"]
image: ""
repo: "https://github.com/piyushsatti/pi-orm"
---

## Overview

class-to-sql is a small Python helper library that maps class-like metadata dictionaries into SQLite tables and provides CRUD helpers for those tables. The core architecture is a single Base class that lazily opens a sqlite3 connection, builds DDL from metadata, and executes parameterized DML for inserts, updates, reads, and deletes. It targets lightweight use cases, with examples demonstrating direct usage from Python scripts.

## Pipeline

**Ingest.** Accepts Python dictionaries describing table schemas (including primary keys and defaults) and row payloads for create/read/update/delete operations.

**Serve.** Provides a Base helper API for table creation, reading, and CRUD operations, including JSON serialization for dict-typed fields and primary-key lookup helpers.

**Deploy.** Distributed as a Python package intended to be imported directly; no container, CI, or deployment artifacts are present in the repo.

## Impact

- Enables quick table creation from Python metadata without writing manual DDL.
- Supports parameterized SQL for inserts, updates, and deletes to reduce SQL injection risk in DML.
- Allows dict-typed fields to be stored via JSON serialization.
- Lets users redirect SQLite storage with a CLASS_TO_SQL_DB environment variable.
- Includes pytest-based coverage for basic CRUD behavior.

## Learnings

- How a simple ORM works.
- How python metadata can be used in ORM.
- Best practices for parameterized SQL in Python to reduce injection risks.
- Techniques for JSON serialization of complex field types in SQLite.
