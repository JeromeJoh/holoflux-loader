# HolofluxLoader

HolofluxLoader is a fully framework-agnostic Web Component loader designed for creative front-end applications.

It provides:

- A full-screen animated loading overlay
- Customizable theme colors
- Corner slots for injecting logos, text, or progress displays
- A spotlight slot for infinite loader animations
- Optional edge-progress bars
- Exit animations
- Global CustomEvent control
- Zero dependencies / Shadow DOM isolation
- Works in Vue / React / Svelte / Vanilla JS

---

## Features

- Framework-independent Web Component
- Configurable background and foreground colors
- Five named slots for UI customization
- Optional screen-edge progress bars
- Configurable exit animations
- Global CustomEvent API
- Vite-powered demo environment
- ES module + IIFE distributions

---

## Installation

Install via npm or yarn:

```bash
npm install holoflux-loader
# or
yarn add holoflux-loader
```

---

## Usage

Importing the component

**ES Module (recommended for frameworks)**

```bash
import 'holoflux-loader/dist/holoflux-loader.es.js';
```

**Script tag (vanilla HTML)**

```bash
<script src="dist/holoflux-loader.iife.js"></script>
```

This registers:

```bash
<holoflux-loader></holoflux-loader>
```

---

## Basic Example

```html
<holoflux-loader
  bg-color="rgba(0,0,0,0.6)"
  fg-color="#4ea1ff"
  edge-progress="top"
  exit-animation="fade-out"
  inner-offset="1rem"
>
  <div slot="top-left">My Logo</div>

  <div slot="spotlight">
    <!-- custom spinner -->
    <div class="hf-loader">
      <style>
        .hf-loader {
          width: 48px;
          height: 48px;
          border: 4px solid rgba(255, 255, 255, 0.2);
          border-top-color: var(--loader-fg);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      </style>
    </div>
  </div> </holoflux-loader
>Basic Example
<holoflux-loader
  background-color="rgba(0,0,0,0.6)"
  foreground-color="#4ea1ff"
  show-edge-progress="true"
  exit-animation="fade-out"
  inner-offset="1rem"
>
  <div slot="top-left">My Logo</div>

  <div slot="spotlight">
    <!-- custom spinner -->
    <div class="hf-loader">
      <style>
        .hf-loader {
          width: 48px;
          height: 48px;
          border: 4px solid rgba(255, 255, 255, 0.2);
          border-top-color: var(--loader-fg);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      </style>
    </div>
  </div>
</holoflux-loader>
```

---

## Options (Attributes)

These options are parsed in parseOptions() and applied via CSS Custom Properties.

| Attribute          | Type                                | Default         | Description                               |
| ------------------ | ----------------------------------- | --------------- | ----------------------------------------- |
| `background-color` | string                              | rgba(0,0,0,0.6) | Overlay background color                  |
| foreground-color   | string                              | #fff            | Accent color used for progress indicators |
| show-edge-progress | boolean                             | false           | Enables screen-edge progress bars         |
| exit-animation     | "fade-out" \| "scale-out" \| string | "fade-out"      | Loader exit transition                    |
| inner-offset       | string                              | 1rem            | Offset of corner-slot elements            |

---

## Slots

HolofluxLoader provides five flexible slots for inserting UI components.

| Slot Name    | Position     | Usage                      |
| ------------ | ------------ | -------------------------- |
| top-left     | Top-left     | Logo, text, counters       |
| top-right    | Top-right    | Status badges, menus       |
| bottom-left  | Bottom-left  | Notes, captions            |
| bottom-right | Bottom-right | Action buttons, indicators |
| spotlight    | Center       | Custom loader animation    |

---

## Slot Loaders (example module) 🎛️

You can place lightweight CSS-only loaders into the `spotlight` slot. Below are two copy-paste-ready examples (small, accessible, and themeable via `--loader-fg`). They are adapted from popular sources for inspiration:

- Bars loader (inspired by https://css-loaders.com/bars/)
- Dots / pulse loader (inspired by examples on https://uiverse.io/loaders)

### How to use

Insert the HTML + CSS into the `spotlight` slot of your `holoflux-loader` instance. You can inline them directly or keep them in a small module file and import/insert programmatically.

Example (inline):

```html
<holoflux-loader>
  <div slot="spotlight" class="hf-bars-loader" aria-hidden="true">
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  </div>

  <style>
    .hf-bars-loader{display:flex;gap:8px;align-items:center;justify-content:center}
    .hf-bars-loader .bar{width:6px;height:24px;background:var(--loader-fg,#4ea1ff);animation:hf-bar 0.8s ease-in-out infinite}
    .hf-bars-loader .bar:nth-child(2){animation-delay:0.1s}
    .hf-bars-loader .bar:nth-child(3){animation-delay:0.2s}
    @keyframes hf-bar{0%,100%{transform:scaleY(0.4);opacity:0.6}50%{transform:scaleY(1);opacity:1}}
  </style>
</holoflux-loader>
```

Example (dots/pulse):

```html
<holoflux-loader>
  <div slot="spotlight" class="hf-dots-loader" aria-hidden="true">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
  </div>

  <style>
    .hf-dots-loader{display:flex;gap:8px;align-items:center;justify-content:center}
    .hf-dots-loader .dot{width:12px;height:12px;border-radius:50%;background:var(--loader-fg,#4ea1ff);animation:hf-dot 0.8s infinite ease-in-out}
    .hf-dots-loader .dot:nth-child(2){animation-delay:0.12s}
    .hf-dots-loader .dot:nth-child(3){animation-delay:0.24s}
    @keyframes hf-dot{0%,80%,100%{transform:translateY(0);opacity:0.6}40%{transform:translateY(-10px);opacity:1}}
  </style>
</holoflux-loader>
```

### As a small module

Create `src/loaders/spotlight-loaders.ts` and export template strings, then insert into the DOM when needed.

```ts
export const BarsLoader = `
<div slot="spotlight" class="hf-bars-loader" aria-hidden="true">
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
</div>
<style>/* copy CSS from above */</style>
`

// usage
document.querySelector('holoflux-loader')?.insertAdjacentHTML('beforeend', BarsLoader)
```

> Notes:
> - Both snippets use `--loader-fg` (falls back to `#4ea1ff`) so you can theme them via the component: `holoflux-loader{ --loader-fg: #00eaff }`.
> - These are simple, permissive examples intended for copying and customization. See the original inspiration and more variants here:
>   - https://css-loaders.com/bars/
>   - https://uiverse.io/loaders

---

## Custom Events (API)

HolofluxLoader is controlled fully via `window`-dispatched CustomEvents.

### Show the loader

```js
window.dispatchEvent(new CustomEvent('hololoader:show'))
```

### Update progress

```js
window.dispatchEvent(
  new CustomEvent('hololoader:progress', {
    detail: { value: 0.42 },
  })
)
```

value should be between 0 and 1.

### Hide the loader

```js
window.dispatchEvent(new CustomEvent('hololoader:hide'))
```

---

## Demo Development

The demo is powered by Vite.

### Start the demo

```bash
yarn dev
```

Vite will serve demo/index.html as the entry page.

### Demo script example

```js
window.load = () => {
  window.dispatchEvent(new CustomEvent('hololoader:show'))

  let p = 0
  const timer = setInterval(() => {
    p += 0.2

    window.dispatchEvent(
      new CustomEvent('hololoader:progress', {
        detail: { value: p },
      })
    )

    if (p >= 1) {
      clearInterval(timer)
      window.dispatchEvent(new CustomEvent('hololoader:hide'))
    }
  }, 120)
}
```

Trigger with:

```html
<button onclick="load()">Trigger Loader</button>
```

---

## Build

Build the library:

```bash
yarn build
```

Generates:

```cpp
dist/
  holoflux-loader.es.js      (ES module)
  holoflux-loader.iife.js    (script tag build)
  style.css
```

---

## Importing Into Frameworks

HolofluxLoader works with all modern frameworks.

Vue / React / Svelte / Solid

```js
import 'holoflux-loader/dist/holoflux-loader.es.js'
```

Usage:

```html
<holoflux-loader></holoflux-loader>
```

No manual registration needed.

---

## Theming (CSS Custom Properties)

HolofluxLoader exposes theme variables:

| CSS Variable   | Description                    |
| -------------- | ------------------------------ |
| --loader-bg    | Overlay background color       |
| --loader-fg    | Loader accent / progress color |
| --inner-offset | Offset for corner slot content |

Example:

```css
holoflux-loader {
  --loader-bg: rgba(0, 0, 0, 0.75);
  --loader-fg: #00eaff;
  --inner-offset: 2rem;
}
```
