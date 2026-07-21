---
dg-publish: true
dg-home: false
---

"3p_vault/modules/Sections.md"
># path: 3p_vault/modules/Sections.md

```text
- **fileName**: Sections
- **Created on**: 2026-07-09 03:45:00
```

# Sections

Purpose: The main content sections of the portfolio.

Related: [[Home]], [[modules/App Shell]], [[modules/Project Cards]]

## Files

- `components/sections/AboutSection.tsx`
- `components/sections/ProjectsSection.tsx`
- `components/sections/ContactSection.tsx`
- `components/sections/HeroSection.tsx` (unused)

## AboutSection

Two-column grid layout:
- **Left**: "About" label, heading ("Building systems
  that don't just work"), accent line
- **Right**: Bio paragraphs, "SAY HELLO" card with email

No animations — renders immediately.

## ProjectsSection

- "Projects" label + "Selected Work" heading
- Delegates all rendering to `<SurfaceCodeDiagram />`
  which builds the full project card grid
- See [[modules/Project Cards]] for card details

## ContactSection

- "Contact" label + "Let's connect" heading
- 3-column grid of link cards:
  - GitHub, Email, Blog
- Each card: title, detail text, ArrowUpRight icon
- Hover: border brightens, icon shifts

## Common Patterns

All sections share:
- `id` attribute for scroll targeting
- `sectionRef` for intersection observer tracking
- `reducedMotion` prop (currently unused since
  animations were removed)
- Subtle top divider line (gradient border)
- `container mx-auto` with max-width constraint
