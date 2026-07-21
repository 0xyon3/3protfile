---
dg-publish: true
dg-home: false
---

"3p_vault/flows/Scroll and Navigation.md"
># path: 3p_vault/flows/Scroll and Navigation.md

```text
- **fileName**: Scroll and Navigation
- **Created on**: 2026-07-09 03:45:00
```

# Scroll and Navigation

Purpose: How section navigation and scroll tracking
works.

Related: [[Home]], [[modules/Navigation]], [[modules/App Shell]]

## Scroll-to-Section

```text
User clicks nav link
  → scrollToSection(id) callback
  → preventDefault()
  → close mobile menu
  → find element by ID
  → calculate position with 80px offset
  → window.scrollTo({ behavior: 'smooth' })
```

## Scroll State Detection

`useScrolledState` hook:
- Listens to window scroll event
- Returns `true` when `scrollY > 0`
- Navigation uses this to add backdrop blur and border

## Active Section Tracking

`useActiveSectionRail` hook:
- Takes refs to all section elements
- Uses IntersectionObserver to detect which section
  is currently in viewport
- Returns `activeSectionId` (used for potential
  nav highlighting, section-aware features)

## Section IDs

| Section | ID |
|---------|-----|
| About | `#about` |
| Projects | `#projects` |
| Contact | `#contact` |

## Mobile Navigation

MobileMenu renders same links. On link click:
1. Calls `onScrollTo(id)` which triggers `scrollToSection`
2. `scrollToSection` internally calls `setMenuOpen(false)`
3. Menu closes, page scrolls smoothly
