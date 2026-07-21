---
dg-publish: true
dg-home: false
---

"3p_vault/flows/Page Load.md"
># path: 3p_vault/flows/Page Load.md

```text
- **fileName**: Page Load
- **Created on**: 2026-07-09 03:45:00
```

# Page Load

Purpose: What happens from initial request to
interactive page.

Related: [[Home]], [[modules/App Shell]], [[Architecture]]

## Sequence

```text
1. Browser requests index.html
2. HTML loads: Tailwind CDN, Google Fonts, importmap
3. Vite bundles load (index chunk + react-vendor)
4. React mounts App component
5. useThemeTransition → sets dark class on <html>
6. useLoadingSequence → isLoading = true
7. LoadingScreen renders (black + "YS" + progress bar)
8. FallingLines canvas starts animating
9. Sections lazy-load in background
10. useLoadingSequence → isLoading = false
11. LoadingScreen exits via AnimatePresence (fade out)
12. Content visible, interactive
```

## Code Splitting

Lazy-loaded chunks:
- `AboutSection` (~1.7 KB gzipped)
- `ContactSection` (~0.9 KB gzipped)
- `ProjectsSection` (~14 KB gzipped, includes all
  project data and card rendering)
- `HeroSection` (loaded but not rendered)

## Service Worker

On repeat visits, `public/sw.js` serves cached assets:
- Cache-first for static assets (JS, CSS, images, fonts)
- Network-first for navigation requests
- Stale-while-revalidate for other requests

## Performance

- Total JS: ~65 KB gzipped (without framer-motion)
- Framer-motion: ~43 KB gzipped (used only for
  LoadingScreen exit animation now)
- First paint: fast (inline dark background in HTML)
- LCP: About section heading text
