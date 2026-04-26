# HTML / CSS Projects

---

## Projects

### 1. Glue Song — Lyrics Page

A styled lyrics page for Glue Song by Beabadoobee.

**Files:**
- `testing.html` — page structure and content
- `style.css` — all styling
- `thing.js` — falling petals animation and scroll-in effects
- `background.mp4` — looping video used as the background

Displays the song lyrics with a blurred video background, animated falling petals, and a soft pink/beige color palette. Lines fade in as you scroll down. Hovering over lyrics lines shifts them slightly.

---

### 2. Beneath the Mask — Persona 5 Homepage (WIP)

A Persona 5 styled homepage. Heavily unfinished.

**Files:**
- `index.html` — page structure
- `btmstyle.css` — all styling
- `btm.js` — Sojiro dialogue intro, typewriter effect, music toggle
- `calender/sketch.js` — Persona 5 styled calendar (credit: [FutroRing])
- `beneaththemaskbackground.mp4` — looping background video
- `sojiro.png`, `dialogue box.png`, `border-frame.png` — UI assets
- `ahyou'reback.mp3` — intro audio clip
- `bgmusic.mp3` — background music (Beneath the Mask)

When you load the page, Sojiro slides in from the left with a dialogue box and says "Ah, you're back.." with a typewriter effect, then fades out. The background is a blurred looping video. A Persona 5 styled calendar sits in the top right corner. Spacebar toggles the background music.

---

## Things I Learned: HTML

First time structuring a page properly with semantic tags.

- Using `<!DOCTYPE html>`, `lang` attribute, `charset`, and `viewport` meta tag
- How `<head>` works and what goes in it vs `<body>`
- Linking external stylesheets with `<link rel="stylesheet">`
- Loading Google Fonts via `<link>` with `preconnect` hints for performance
- Semantic structure: `<header>`, `<main>`, `<section>`, `<footer>`
- Using `id` and `class` attributes to target elements
- `<video>` with `autoplay`, `muted`, `loop`, and `playsinline` attributes
- HTML entities for emoji/symbols (e.g. `&#127900;`)
- Wrapping anchor tags around buttons for navigation: `<a href="..."><button>`
- Linking a JS file at the bottom of `<body>` with `<script src="...">`
- Loading external scripts via CDN (p5.js)
- `<audio>` tag with `autoplay` and `loop` attributes

---

## Things I Learned: CSS

- CSS custom properties (`--variable-name`) defined in `:root` for reusable colors and fonts
- `box-sizing: border-box` and resetting `margin`/`padding` globally with `*`
- `position: fixed` and `position: absolute` for precise element placement
- `z-index` layering to stack the video, overlays, and content correctly
- `backdrop-filter: blur()` for the frosted glass effect on the lyrics card
- `radial-gradient` for soft color overlays
- `clamp()` for fluid font sizing that scales between a min and max based on viewport width
- `@keyframes` for animations
- `animation` shorthand: duration, easing, delay, and fill mode (`both`)
- `transition` for smooth hover and slide effects
- `::before` pseudo-element for gradient overlays on `body`
- `@media` query for smaller screens
- Hiding the scrollbar across browsers with `-ms-overflow-style`, `scrollbar-width`, and `::-webkit-scrollbar`
- `scroll-behavior: smooth` on `html`
- `overflow: hidden` to clip elements sliding in from off-screen
- `-webkit-text-stroke` for outlined text
- `transform: rotate()` for the Persona 5 tilted text aesthetic

---

## JavaScript

Vibecoded. CSS and HTML were self-taught via tutorials, documentation, TikTok, and so on. JS logic is not something I wanted to dig into yet.

---
