---
dg-publish: true
dg-home: true
---

"3p_vault/Home.md"
># path: 3p_vault/Home.md

```text
- **fileName**: Home
- **Created on**: 2026-07-09 03:45:00
```

# Home

Purpose: Entry point for understanding the 3protfile
portfolio project.

## Start Here

- [[Project Map]]
- [[Architecture]]
- [[Development Workflow]]
- [[Commands]]
- [[Testing]]
- [[Glossary]]

## Main Modules

- [[modules/App Shell]]
- [[modules/Navigation]]
- [[modules/Sections]]
- [[modules/Project Cards]]
- [[modules/Audio System]]
- [[modules/Background Effects]]

## Runtime Flows

- [[flows/Page Load]]
- [[flows/Scroll and Navigation]]
- [[flows/Audio Playback]]

## What Is This Project

3protfile (branded "yon3") is Yone's personal
developer portfolio website. It showcases AI/ML,
systems engineering, and full-stack projects through
a dark, minimal, industrial-styled single-page app.

**Stack**: React 19 + TypeScript + Vite 6 + Framer
Motion + Tailwind CSS + Three.js

**Hosted on**: Netlify

**Key design decisions**:
- Dark-only theme, no border-radius anywhere
- Sharp, industrial aesthetic
- Lazy-loaded sections with code splitting
- Data-driven project cards from JSON files
- Japanese text rain background effect on edges
- Background music player (ambient game OSTs)
- PWA with offline service worker
