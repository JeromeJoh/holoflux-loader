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
