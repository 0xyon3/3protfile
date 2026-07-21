---
dg-publish: true
dg-home: false
---

"3p_vault/modules/Audio System.md"
># path: 3p_vault/modules/Audio System.md

```text
- **fileName**: Audio System
- **Created on**: 2026-07-09 03:45:00
```

# Audio System

Purpose: Background music player with track selection.

Related: [[Home]], [[modules/Navigation]], [[modules/App Shell]]

## Files

- `hooks/useAudioController.ts` — playback logic
- `components/ui/AudioMenuButton.tsx` — UI controls
- `data/audio.ts` — track loader

## How Tracks Load

`data/audio.ts` uses `import.meta.glob` to import all
MP3 files from `music/`. Each file becomes a track
with id, name (derived from filename), and URL.

## Tracks Included

- Christopher Larkin — Bilewater
- Christopher Larkin — Moss Grotto
- Christopher Larkin — Songclave
- Luke Pickman — Choral Chambers (Hollow Knight Silksong)
- Lies of P — Lisrim

Plus a short SFX file for theme transitions.

## useAudioController Hook

Returns:
- `isAudioPlaying` — boolean state
- `toggleAudio` — play/pause
- `activeTrackId` / `activeTrackUrl`
- `setSelectedTrackId` — switch tracks
- `tracks` — array of all available tracks
- `audioRef` / `sfxRef` — refs for `<audio>` elements
- `needsAudioUnlock` — browser autoplay policy flag
- `requestAudioStart` — user gesture to unlock audio

## AudioMenuButton

Two buttons side by side:
1. **Volume toggle** — mute/unmute (click)
2. **Track selector** — opens dropdown (click)

Dropdown shows all tracks, highlights active one.
Opens on hover (4s delay) or long-press on mobile.
Closes on outside click or Escape.

## Browser Autoplay

Browsers block autoplay without user interaction.
The "Enable Sound" button in App.tsx calls
`requestAudioStart` to unlock the audio context.
