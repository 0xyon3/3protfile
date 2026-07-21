---
dg-publish: true
dg-home: false
---

"3p_vault/modules/Project Cards.md"
># path: 3p_vault/modules/Project Cards.md

```text
- **fileName**: Project Cards
- **Created on**: 2026-07-09 03:45:00
```

# Project Cards

Purpose: How portfolio projects are loaded, structured,
and rendered.

Related: [[Home]], [[modules/Sections]], [[Architecture]]

## Files

- `components/diagrams/SurfaceCodeDiagram.tsx` — card grid
- `components/diagrams/projectData.ts` — data loader
- `projects/*.json` — individual project definitions

## Data Pipeline

```text
projects/*.json
    ↓ Vite import.meta.glob (eager)
projectData.ts
    ↓ sorts by order, resolves image URLs
PROJECTS array
    ↓ consumed by
SurfaceCodeDiagram component
```

## Project JSON Schema

```json
{
  "title": "Project Name",
  "slug": "project-slug",
  "tagline": "Short one-liner",
  "description": "Longer description",
  "status": "Complete | In Progress | Archived",
  "year": "2024",
  "category": "AI/ML | Android | Systems",
  "role": "Developer role",
  "stack": ["Tech1", "Tech2"],
  "highlights": ["Feature 1", "Feature 2"],
  "links": [{ "label": "GitHub", "href": "..." }],
  "typing": ["optional telemetry lines"],
  "order": 1
}
```

## Image Resolution

`projectData.ts` uses Vite glob to import all files
matching `../projects/*_images/*`. Images are matched
to projects by folder name convention:
`<slug>_images/` → project with matching slug.

## Card Layout

Each card (`<article>`) contains:
1. **Cover area** — image(s) or gradient placeholder
   - Android apps: 3-column hero row
   - Others: single cover image
   - Mobile: 3-image strip
2. **Badge overlay** — status, year, category
3. **Content** — title, role, tagline, description
4. **Telemetry box** (optional) — typing animation lines
5. **Highlights** — bullet list
6. **Tech stack** — tag chips
7. **Gallery** (optional) — additional images
8. **Links** — external link buttons

## Styling

- No border-radius anywhere
- Cards: border `white/[0.06]`, hover brightens
- Tags: tiny bordered chips
- Status badges: color-coded via `STATUS_STYLES` map
