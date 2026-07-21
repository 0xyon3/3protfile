---
dg-publish: true
dg-home: false
---

"3p_vault/Project Map.md"
># path: 3p_vault/Project Map.md

```text
- **fileName**: Project Map
- **Created on**: 2026-07-09 03:45:00
```

# Project Map

Purpose: Directory-level map of the project structure.

Related: [[Home]], [[Architecture]]

## Root Files

| File | Role |
|------|------|
| `App.tsx` | Main app component, routing, layout |
| `index.tsx` | React entry point (createRoot) |
| `index.html` | HTML shell, fonts, importmap |
| `index.css` | Root stylesheet imports |
| `types.ts` | Shared TypeScript types |
| `vite.config.ts` | Vite build config |
| `vitest.config.ts` | Test config |
| `package.json` | Dependencies and scripts |

## Key Directories

```text
components/
  sections/       # Page sections (About, Projects, Contact)
  layout/         # Navigation, MobileMenu, Footer
  ui/             # LoadingScreen, AudioMenuButton, etc.
  effects/        # FallingLines (JP text rain background)
  diagrams/       # SurfaceCodeDiagram (project cards)
  scene/          # Three.js 3D scenes (currently unused)
  pets/           # Pet overlay system (legacy, unused)

hooks/            # Custom React hooks (audio, theme, scroll)
data/             # Audio tracks, pet definitions
styles/           # CSS variables, typography, motion, utilities
projects/         # JSON data files for each portfolio project
music/            # Background audio MP3 files
public/           # PWA manifest, service worker, CV page
tests/            # Vitest test files
```

## Data Flow

```text
projects/*.json  -->  projectData.ts  -->  SurfaceCodeDiagram
music/*.mp3      -->  data/audio.ts   -->  useAudioController
```

## Static Assets

- `public/manifest.webmanifest` — PWA manifest
- `public/sw.js` — service worker for offline support
- `public/pets/` — sprite GIFs (legacy)
