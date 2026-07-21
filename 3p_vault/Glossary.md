---
dg-publish: true
dg-home: false
---

"3p_vault/Glossary.md"
># path: 3p_vault/Glossary.md

```text
- **fileName**: Glossary
- **Created on**: 2026-07-09 03:45:00
```

# Glossary

Purpose: Project-specific terms and naming conventions.

Related: [[Home]]

## Terms

| Term | Meaning |
|------|---------|
| yon3 | Brand name / logo for the portfolio |
| 3protfile | Project repository name (portfolio) |
| SurfaceCodeDiagram | Component that renders project cards grid |
| FallingLines | Japanese text rain background effect |
| MatrixBackground | Old matrix-style background (replaced) |
| Pets | Legacy animated sprites (removed from UI) |
| MusicTrack | Audio track object from `data/audio.ts` |
| LoadingSequence | Boot splash before content shows |
| ActiveSectionRail | Tracks which section is in viewport |
| DeviceProfile | Detects phone/low-power for perf scaling |

## Naming Conventions

- Components: PascalCase (`AboutSection`, `Navigation`)
- Hooks: camelCase with `use` prefix (`useAudioController`)
- Data files: camelCase (`projectData.ts`, `audio.ts`)
- Project JSONs: snake_case slugs (`face_expression_recognition.json`)
- CSS: BEM-ish utilities via Tailwind, custom vars in `styles/`

## Colors

- Primary accent: `#c4a7e7` (lavender purple)
- Background: `#09090b` (near-black)
- Text: `#fafafa` (near-white)
- Muted text: `white/50` to `white/60`
- Borders: `white/[0.06]` to `white/10`

## Fonts

- Display: **Syne** (headings, logo)
- Body: **Outfit** (paragraphs, UI text)
