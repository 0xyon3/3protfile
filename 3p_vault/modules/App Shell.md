---
dg-publish: true
dg-home: false
---

"3p_vault/modules/App Shell.md"
># path: 3p_vault/modules/App Shell.md

```text
- **fileName**: App Shell
- **Created on**: 2026-07-09 03:45:00
```

# App Shell

Purpose: The root component that orchestrates the
entire application layout.

Related: [[Home]], [[Architecture]], [[modules/Navigation]]

## File

`App.tsx`

## What It Does

- Renders the full page layout in a single shell
- Manages top-level state: menu open, scroll position
- Lazy-loads section components via `React.lazy()`
- Wires up audio controller, theme, and loading state
- Conditionally shows loading screen via `AnimatePresence`
- Renders background effects (ambient gradients +
  FallingLines canvas)

## Key State

| Hook | Purpose |
|------|---------|
| `useReducedMotion` | Detects prefers-reduced-motion |
| `useScrolledState` | Whether user scrolled from top |
| `useThemeTransition` | Locked to dark mode |
| `useLoadingSequence` | Controls boot splash visibility |
| `useAudioController` | Background music state |
| `useActiveSectionRail` | Current visible section |

## Layout Structure

```text
<div data-theme="dark">
  <LoadingScreen />       (AnimatePresence, exits on load)
  <audio /> x2            (music + SFX)
  <ambient gradients />   (fixed, z-0)
  <FallingLines />        (canvas, z-1)
  <div z-10>
    <Navigation />
    <MobileMenu />
    <Suspense>
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </Suspense>
  </div>
  <Footer />
</div>
```

## Important Notes

- HeroSection exists but is commented out
- No React Router used — scroll-based navigation only
