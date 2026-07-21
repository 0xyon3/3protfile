---
dg-publish: true
dg-home: false
---

"3p_vault/Development Workflow.md"
># path: 3p_vault/Development Workflow.md

```text
- **fileName**: Development Workflow
- **Created on**: 2026-07-09 03:45:00
```

# Development Workflow

Purpose: How to set up, run, and modify the project.

Related: [[Home]], [[Commands]], [[Testing]]

## Prerequisites

- Node.js (LTS recommended)
- npm

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

Opens on `http://localhost:3000` (host: `0.0.0.0`).
Vite provides instant HMR for all `.tsx`, `.css`, and
asset changes.

## Adding a New Project

1. Create `projects/<slug>.json` with fields:
   - `title`, `slug`, `tagline`, `description`
   - `status`, `year`, `category`, `role`
   - `stack` (array), `highlights` (array)
   - `links` (array of `{label, href}`)
   - `order` (number for sort position)
2. Create `projects/<slug>_images/` folder with images
3. Project auto-appears via Vite glob import in
   `components/diagrams/projectData.ts`

## Adding Background Music

1. Drop an MP3 into `music/`
2. It auto-loads via glob import in `data/audio.ts`
3. Shows up in the audio track selector

## Key Files to Edit

| Task | File |
|------|------|
| Change nav links | `components/layout/Navigation.tsx` |
| Edit bio/about | `components/sections/AboutSection.tsx` |
| Modify project cards | `components/diagrams/SurfaceCodeDiagram.tsx` |
| Change contact links | `components/sections/ContactSection.tsx` |
| Adjust background | `components/effects/FallingLines.tsx` |

## Build for Production

```bash
npm run build
```

Output goes to `dist/`. Deploy to Netlify via git push
(auto-deploys from main branch).
