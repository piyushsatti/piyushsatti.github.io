---
title: "Parkinson's Speech Classification"
startDate: "2025-01-15"
endDate: "2025-04-10"
summary: "Audio WAVs → manifest generation → SpeechBrain training/prediction to classify Parkinson’s vs control recordings for the Italian dataset using reproducible recipes and results reporting."
tags:
  [
    "Python",
    "SpeechBrain",
    "PyTorch",
    "Torchaudio",
    "scikit-learn",
    "Poetry",
    "Pcan we rewriteandas",
    "Hugging Face Hub",
  ]
image: ""
repo: "https://github.com/piyushsatti/parkinson-detector"
---

## Overview

This repository provides a SpeechBrain-based pipeline for binary Parkinson’s detection from short speech recordings, centered on the Italian Parkinson Voice & Speech dataset. It standardizes data preparation into JSON manifests and exposes multiple model recipes (xvector, ECAPA-TDNN, wav2vec2, WavLM, HuBERT) under a shared workflow. The architecture separates data prep utilities, SpeechBrain recipe folders, and CLI scripts to run training, prediction, and result reporting.

### Pipeline

- Ingest. WAV files are organized under data/raw/italian_parkinson, scanned by scripts/prepare_manifests.py, labeled by folder structure, and split into train/valid/test JSON manifests with {data_root} placeholders.
- Serve. Training and prediction are executed via Make targets and Python scripts; recipe-specific train.py files consume manifests, and scripts/predict.py loads checkpoints to score individual WAV files.
- Deploy. The project runs locally via Poetry-managed dependencies and Makefile automation; there are no Docker or CI/CD workflows specified.

### Impact

- Provides reproducible SpeechBrain recipe layouts for multiple speech encoders, enabling consistent experiments across model families.
- Automates manifest generation with speaker-level or file-level splits to avoid leakage and simplify dataset setup.
- Offers a one-command sweep to train all recipes and append results to reports/results.md.
- Includes a prediction helper to validate checkpoints on single audio files without additional tooling.
