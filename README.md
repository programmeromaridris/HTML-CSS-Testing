# Glue Song — Lyrics Page

A styled lyrics page for Glue Song by Beabadoobee. First project trying out HTML and CSS.

---

## Files

- `testing.html` — page structure and content
- `style.css` — all styling
- `thing.js` — falling petals animation and scroll-in effects
- `background.mp4` — looping video used as the background

---

## What the Page Does

Displays the song lyrics with a blurred video background, animated falling petals, and a soft pink/beige color palette. Lines fade in as you scroll down. Hovering over lyrics lines shifts them slightly.

---

## Things I Learned:  HTML

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

---

## Things I Learned: CSS

- CSS custom properties (`--variable-name`) defined in `:root` for reusable colors and fonts
- `box-sizing: border-box` and resetting `margin`/`padding` globally with `*`
- `position: fixed` for the video background and petal container so they stay in place while scrolling
- `z-index` layering to stack the video, overlay gradients, petals, and content correctly
- `backdrop-filter: blur()` for the frosted glass effect on the lyrics card
- `radial-gradient` for the soft color overlay on top of the video
- `clamp()` for fluid font sizing that scales between a min and max based on viewport width
- `@keyframes` for two animations: `fadeUp` (content entrance) and `fall` (petals dropping)
- `animation` shorthand: duration, easing, delay, and fill mode (`both`)
- `IntersectionObserver` scroll animations handled in JS, but the actual opacity and transform transitions are defined in CSS
- `transition` for smooth hover effects
- `::before` pseudo-element for the gradient overlay on `body`
- `@media` query for smaller screens to reduce padding
- Hiding the scrollbar across browsers with `-ms-overflow-style`, `scrollbar-width`, and `::-webkit-scrollbar`
- `scroll-behavior: smooth` on `html`

---

## JavaScript

To be honest i vibecoded this part because i don't really feel like learning JS logic atm.
CSS and HTML were self taught via tutorials, documentation, tiktok vids and so on and so forth.
---

## Notes

The footer text is an inside joke, dont pay it much attention
