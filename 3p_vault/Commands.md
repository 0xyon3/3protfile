---
dg-publish: true
dg-home: false
---

"3p_vault/Commands.md"
># path: 3p_vault/Commands.md

```text
- **fileName**: Commands
- **Created on**: 2026-07-09 03:45:00
```

# Commands

Purpose: All build, dev, test, and utility commands.

Related: [[Home]], [[Development Workflow]], [[Testing]]

## npm Scripts

| Command | Action |
|---------|--------|
| `npm run dev` | Start Vite dev server (port 3000) |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run test` | Run Vitest test suite |

## Vite Dev Server

- Port: 3000
- Host: 0.0.0.0 (accessible on LAN)
- HMR enabled for all source files

## Build Details

- Output: `dist/`
- Chunk splitting: `react-vendor`, `framer-motion`
- Assets hashed for cache busting
- Environment: `GEMINI_API_KEY` from `.env`

## Deployment

Netlify auto-deploys from `main` branch. The
`public/_redirects` file handles SPA routing:

```text
/*    /index.html   200
```

## TypeScript Check

```bash
npx tsc --noEmit
```

Note: Some pre-existing type errors in `HeroSection`
and `PetOverlay` (both unused in production).
