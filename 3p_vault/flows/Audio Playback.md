---
dg-publish: true
dg-home: false
---

"3p_vault/flows/Audio Playback.md"
># path: 3p_vault/flows/Audio Playback.md

```text
- **fileName**: Audio Playback
- **Created on**: 2026-07-09 03:45:00
```

# Audio Playback

Purpose: How background music plays, pauses, and
switches tracks.

Related: [[Home]], [[modules/Audio System]], [[modules/Navigation]]

## Flow: First Visit

```text
1. Page loads → useAudioController initializes
2. Browser blocks autoplay → needsAudioUnlock = true
3. "Enable Sound" button renders (bottom-right)
4. User clicks → requestAudioStart()
5. audioRef.current.play() succeeds
6. needsAudioUnlock = false, button disappears
7. Music plays from default track
```

## Flow: Toggle Audio

```text
User clicks volume icon in nav
  → onToggleAudio()
  → isAudioPlaying toggles
  → audio element plays or pauses
```

## Flow: Switch Track

```text
User clicks music icon → track menu opens
User selects a track → handleSelectTrack(trackId)
  → setSelectedTrackId(trackId)
  → activeTrackUrl changes
  → <audio src={...}> updates
  → audio auto-plays new track
  → menu closes
```

## Audio Elements

Two `<audio>` elements in App.tsx:
1. Main music: `ref={audio.audioRef}`, autoPlay
2. SFX: `ref={audio.sfxRef}`, for one-shot sounds

## Track Menu UX

- Desktop: opens on click of music icon (also opens
  after 4s hover on volume button)
- Mobile: opens on click (also on 5s long-press)
- Closes: outside click, Escape key, track selection
