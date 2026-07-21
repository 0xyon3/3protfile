---
dg-publish: true
dg-home: false
---

"3p_vault/modules/Background Effects.md"
># path: 3p_vault/modules/Background Effects.md

```text
- **fileName**: Background Effects
- **Created on**: 2026-07-09 03:45:00
```

# Background Effects

Purpose: Visual background layers behind content.

Related: [[Home]], [[Architecture]], [[modules/App Shell]]

## Files

- `components/effects/FallingLines.tsx` — JP text rain
- `components/effects/MatrixBackground.tsx` — old matrix
  (still exists but not imported anywhere)

## FallingLines (Active)

Canvas-based Japanese text rain on left and right
edges of the screen only. Center content area stays
clear.

### How It Works

1. Canvas fills viewport, fixed position, `z-[1]`
2. Only renders columns within 120px of each edge
3. Each column drops kanji/katakana characters downward
4. Lead character: white with purple glow
5. Trail: fades from purple to transparent (6-16 chars)
6. Frame rate: 90ms intervals (slow, deliberate)
7. Fade effect via semi-transparent background fill
   each frame (`rgba(9, 9, 11, 0.14)`)

### Characters Used

Mix of katakana (アイウエオ...) and meaningful kanji:
風雷火水木金土月日空星海山川雪花鳥魚龍夢光闇影幻

### Performance

- Font size: 20px
- Column gap: 36px
- ~3 columns per side (6 total)
- Pre-cached glyph arrays (no string allocation per frame)
- Canvas overall opacity: 45%
- Respects `prefers-reduced-motion` (no animation)

## Ambient Gradients (Active)

Two fixed `div` elements with radial gradients:
- Top: `rgba(196, 167, 231, 0.08)` (subtle purple)
- Bottom-right: `rgba(86, 148, 159, 0.05)` (subtle teal)

These are pure CSS, no JS cost.

## MatrixBackground (Legacy)

Full-screen matrix rain with rose pine colors. Still
in codebase but not imported or rendered. Could be
removed in cleanup.
