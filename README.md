# Embodied AI Reinforcement Learning Hub

This repository hosts a public static course platform for students learning embodied AI and reinforcement learning.

The site is organized as a student-facing hub for:

- learning roadmap;
- course resource index;
- teaching demo placeholders;
- download center;
- staged task workflow.

## Current Scope

The first platform version establishes the structure only. It does not publish private teaching files yet.

The course storyline currently follows four stages:

1. game simulation and reward shaping;
2. quadruped robot simulation control;
3. Sim2Real and deployment validation;
4. evidence-based reflection and communication.

## Privacy Boundary

The public repository intentionally excludes:

- personal names, affiliations, contact details, class identifiers, and student information;
- the original PPT file and exported PPT screenshots;
- private images, videos, logs, datasets, or internal links;
- unreviewed teaching evidence or unpublished project data.

Future materials should be added only after release and redaction review.

## Structure

```text
.
├── index.html
├── assets/
│   ├── main.js
│   └── styles.css
├── materials/
│   └── README.md
├── share/
│   ├── embodied-ai-rl-hub-qr-clean.png
│   ├── embodied-ai-rl-hub-qr-clean.svg
│   ├── embodied-ai-rl-hub-qr-share.png
│   └── embodied-ai-rl-hub-qr-share.svg
└── README.md
```

## Sharing

Use `share/embodied-ai-rl-hub-qr-share.png` for slides, posters, or printed material.
Use `share/embodied-ai-rl-hub-qr-clean.png` as the plain fallback QR code.

## Local Preview

Open `index.html` directly in a browser, or serve the folder with any static file server.

```bash
python3 -m http.server 8000
```

## Publishing

The site is designed for GitHub Pages from the default branch root directory.

No license has been selected for this scaffold version.
