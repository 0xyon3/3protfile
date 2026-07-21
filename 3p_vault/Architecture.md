---
dg-publish: true
dg-home: false
---

"3p_vault/Architecture.md"
># path: 3p_vault/Architecture.md

```text
- **fileName**: Architecture
- **Created on**: 2026-07-09 03:45:00
```

# Architecture

Purpose: High-level system design and component
relationships.

Related: [[Home]], [[Project Map]], [[modules/App Shell]]

## Overview

Single-page React application with no router. Sections
are scroll-based. Content is lazy-loaded via
`React.lazy()` for code splitting.

## Component Hierarchy

```text
App (App.tsx)
├── LoadingScreen (splash on mount)
├── FallingLines (JP text rain canvas background)
├── Navigation (fixed top nav)
├── MobileMenu (fullscreen overlay)
├── <Suspense>
│   ├── AboutSection
│   ├── ProjectsSection
│   │   └── SurfaceCodeDiagram (renders all project cards)
│   └── ContactSection
└── Footer
```

## Design Principles

1. **Dark-only** — theme locked to dark, no toggle
2. **No border-radius** — sharp edges everywhere
3. **No entrance animations** — content renders instant
4. **Data-driven** — projects defined in JSON, images
   glob-imported by Vite
5. **Performance-adaptive** — `useDeviceProfile` detects
   low-power devices and reduces visual complexity
6. **PWA** — service worker caches assets, works offline

## State Management

No global state library. State lives in:
- `useState` for UI toggles (menu, loading)
- Custom hooks for domain logic:
  - `useAudioController` — music playback
  - `useThemeTransition` — locked to dark
  - `useScrolledState` — navbar appearance
  - `useActiveSectionRail` — current section tracking
  - `useLoadingSequence` — boot sequence

## Build Architecture

- **Vite 6** handles dev server, HMR, and production build
- Manual chunk splitting: `react-vendor`, `framer-motion`
- Path alias `@/` points to project root
- Environment variable: `GEMINI_API_KEY` injected at build

## Rendering Strategy

- Sections are `React.lazy()` with a single `<Suspense>`
- Background canvas (`FallingLines`) runs independently
  on `requestAnimationFrame`
- No SSR — client-only SPA
- Service worker handles caching for repeat visits
