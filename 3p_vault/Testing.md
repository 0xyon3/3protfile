---
dg-publish: true
dg-home: false
---

"3p_vault/Testing.md"
># path: 3p_vault/Testing.md

```text
- **fileName**: Testing
- **Created on**: 2026-07-09 03:45:00
```

# Testing

Purpose: Test framework, layout, and how to run tests.

Related: [[Home]], [[Commands]]

## Framework

- **Vitest 3.2** — test runner
- **Testing Library React 16.3** — DOM assertions
- **jsdom 26** — browser environment simulation

## Configuration

`vitest.config.ts`:
- Environment: `jsdom`
- Globals: enabled (no need to import `describe`, `it`)
- Setup: `./tests/setup.ts`

## Running Tests

```bash
npm run test
```

## Test Files

Located in `tests/` directory. 15 test files covering:

| Area | Files |
|------|-------|
| Navigation | `navigation.test.tsx` |
| Mobile menu | `mobile-menu.test.tsx` |
| Hero section | `hero-section.test.tsx` |
| Theme system | `theme-shell.test.tsx` |
| Audio prefs | `audio-preferences.test.tsx` |
| Pets (legacy) | `pets.test.tsx`, `pet-toggle.test.tsx` |
| Section rails | `section-pet-rails.test.tsx` |
| Device profile | `device-profile.test.tsx` |

## Test Approach

- Component rendering with Testing Library
- DOM assertions (`getByText`, `getByTestId`)
- No E2E or integration tests currently
- Tests may pass extra props not in current types
  (pre-existing test/type drift from refactors)
