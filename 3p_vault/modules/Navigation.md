---
dg-publish: true
dg-home: false
---

"3p_vault/modules/Navigation.md"
># path: 3p_vault/modules/Navigation.md

```text
- **fileName**: Navigation
- **Created on**: 2026-07-09 03:45:00
```

# Navigation

Purpose: Fixed top navigation bar with desktop/mobile
variants.

Related: [[Home]], [[modules/App Shell]], [[modules/Audio System]]

## Files

- `components/layout/Navigation.tsx` — desktop nav
- `components/layout/MobileMenu.tsx` — fullscreen mobile
- `components/layout/Footer.tsx` — bottom footer

## Navigation Component

Fixed top bar that becomes translucent with blur on
scroll. Contains:

- **Logo** ("yon3") — scrolls to top on click, uses
  `font-variant-numeric: lining-nums` to fix "3" baseline
- **Section links** — About, Projects, Contact (smooth
  scroll via `scrollToSection`)
- **Audio controls** — volume toggle + track selector
- **GitHub button** — external link

## MobileMenu

Fullscreen overlay triggered by hamburger. Same links
plus CV and GitHub buttons. Close button (X icon).
Uses Framer Motion `AnimatePresence` for enter/exit.

## Footer

Simple footer with name, role subtitle, and external
links (GitHub, Email, Blog).

## Scroll Behavior

`scrollToSection` callback in App.tsx:
1. Prevents default anchor behavior
2. Closes mobile menu
3. Calculates element position with 80px offset
4. Uses `window.scrollTo` with smooth behavior

## Styling

- No border-radius on any element
- Backdrop blur on scroll (`backdrop-blur-xl`)
- Border bottom appears on scroll (`border-white/[0.06]`)
