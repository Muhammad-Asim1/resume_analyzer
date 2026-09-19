# AI Resume Analyzer

## Overview
This application automates the resume screening process by matching candidate profiles to target job descriptions. Using a Flask backend and PyTorch sentence transformers, the system calculates the semantic similarity between the two texts to generate an objective alignment score, moving beyond simple keyword matching to understand actual context.

## Core Features
* **Semantic Matching:** Utilizes PyTorch and `sentence-transformers` to accurately measure how well a candidate's experience aligns with job requirements.
* **Resume Scoring:** Generates a direct compatibility score for quick candidate filtering.
* **Web Interface:** A streamlined frontend for uploading resumes, inputting job descriptions, and viewing the resulting match metrics.


