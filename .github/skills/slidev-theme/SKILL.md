---
name: slidev-theme
description: Scaffold, develop, and publish a Slidev presentation theme or addon. Use when creating or modifying layouts, styles, components, or configuration for a Slidev theme (slidev-theme-*) or addon (slidev-addon-*) package.
---

# Slidev Theme Development

A Slidev **theme** is an npm package that provides global styles, layouts, components, and tool configuration for Slidev presentations. It must **not** include addons (code runners, new snippets) — those belong in separate addon packages.

## Core References

| Topic | Description | Reference |
|-------|-------------|-----------|
| Markdown Syntax | Slide separators, frontmatter, notes, code blocks | [core-syntax](references/core-syntax.md) |
| Animations | v-click, v-clicks, motion, transitions | [core-animations](references/core-animations.md) |
| Headmatter | Deck-wide configuration options | [core-headmatter](references/core-headmatter.md) |
| Frontmatter | Per-slide configuration options | [core-frontmatter](references/core-frontmatter.md) |
| CLI Commands | Dev, build, export, theme commands | [core-cli](references/core-cli.md) |
| Components | Built-in Vue components | [core-components](references/core-components.md) |
| Layouts | Built-in slide layouts | [core-layouts](references/core-layouts.md) |
| Exporting | PDF, PPTX, PNG export options | [core-exporting](references/core-exporting.md) |
| Hosting | Build and deploy to various platforms | [core-hosting](references/core-hosting.md) |
| Global Context | $nav, $slidev, composables API | [core-global-context](references/core-global-context.md) |

## Feature References

### Code & Editor

| Feature | Reference |
|---------|-----------|
| Line highlighting | [code-line-highlighting](references/code-line-highlighting.md) |
| Line numbers | [code-line-numbers](references/code-line-numbers.md) |
| Scrollable code | [code-max-height](references/code-max-height.md) |
| Code tabs | [code-groups](references/code-groups.md) |
| Monaco editor | [editor-monaco](references/editor-monaco.md) |
| Run code | [editor-monaco-run](references/editor-monaco-run.md) |
| Edit files | [editor-monaco-write](references/editor-monaco-write.md) |
| Code animations | [code-magic-move](references/code-magic-move.md) |
| TypeScript types | [code-twoslash](references/code-twoslash.md) |
| Import code | [code-import-snippet](references/code-import-snippet.md) |

### Diagrams & Math

| Feature | Reference |
|---------|-----------|
| Mermaid | [diagram-mermaid](references/diagram-mermaid.md) |
| PlantUML | [diagram-plantuml](references/diagram-plantuml.md) |
| LaTeX math | [diagram-latex](references/diagram-latex.md) |

### Layout & Styling

| Feature | Reference |
|---------|-----------|
| Canvas size | [layout-canvas-size](references/layout-canvas-size.md) |
| Zoom | [layout-zoom](references/layout-zoom.md) |
| Transform | [layout-transform](references/layout-transform.md) |
| Layout slots | [layout-slots](references/layout-slots.md) |
| Scoped CSS | [style-scoped](references/style-scoped.md) |
| Global layers | [layout-global-layers](references/layout-global-layers.md) |
| Draggable elements | [layout-draggable](references/layout-draggable.md) |
| Icons | [style-icons](references/style-icons.md) |

### Animation & Interaction

| Feature | Reference |
|---------|-----------|
| Click animations | [core-animations](references/core-animations.md) |
| Rough markers | [animation-rough-marker](references/animation-rough-marker.md) |
| Drawing mode | [animation-drawing](references/animation-drawing.md) |
| Direction styles | [style-direction](references/style-direction.md) |
| Note highlighting | [animation-click-marker](references/animation-click-marker.md) |

### Syntax Extensions

| Feature | Reference |
|---------|-----------|
| Comark syntax | [syntax-comark](references/syntax-comark.md) |
| Block frontmatter | [syntax-block-frontmatter](references/syntax-block-frontmatter.md) |
| Import slides | [syntax-importing-slides](references/syntax-importing-slides.md) |
| Merge frontmatter | [syntax-frontmatter-merging](references/syntax-frontmatter-merging.md) |

### Presenter & Recording

| Feature | Reference |
|---------|-----------|
| Recording | [presenter-recording](references/presenter-recording.md) |
| Timer | [presenter-timer](references/presenter-timer.md) |
| Remote | [presenter-remote](references/presenter-remote.md) |
| Notes ruby | [presenter-notes-ruby](references/presenter-notes-ruby.md) |

### Export & Build

| Feature | Reference |
|---------|-----------|
| Export | [core-exporting](references/core-exporting.md) |
| Build & deploy | [core-hosting](references/core-hosting.md) |
| Build with PDF | [build-pdf](references/build-pdf.md) |
| Remote assets | [build-remote-assets](references/build-remote-assets.md) |
| OG image | [build-og-image](references/build-og-image.md) |
| SEO tags | [build-seo-meta](references/build-seo-meta.md) |

### Tools

| Feature | Reference |
|---------|-----------|
| Eject theme | [tool-eject-theme](references/tool-eject-theme.md) |
| Side editor | [editor-side](references/editor-side.md) |
| VS Code extension | [editor-vscode](references/editor-vscode.md) |
| Prettier | [editor-prettier](references/editor-prettier.md) |

### API

| Feature | Reference |
|---------|-----------|
| Slide hooks | [api-slide-hooks](references/api-slide-hooks.md) |
| Navigation API | [core-global-context](references/core-global-context.md) |

## Scaffolding

```bash
pnpm create slidev-theme   # interactive generator
```

Or bootstrap manually with the structure below.

## Package Structure

```
slidev-theme-<name>/
├── package.json
├── README.md
├── slides.md              # demo/preview deck (theme: ./)
├── layouts/
│   ├── cover.vue          # override or add layouts
│   └── my-layout.vue
├── components/
│   └── MyComponent.vue    # Vue components exposed to slides
├── styles/
│   └── index.css          # global CSS (imported automatically)
├── setup/
│   └── unocss.ts          # UnoCSS shortcuts/safelist/theme extensions
└── uno.config.ts          # (optional) full UnoCSS config override
```

## package.json Requirements

```json
{
  "name": "slidev-theme-<name>",
  "keywords": ["slidev-theme", "slidev"],
  "slidev": {
    "colorSchema": "both",
    "defaults": {
      "transition": "slide-left",
      "aspectRatio": "16/9"
    }
  },
  "engines": {
    "slidev": ">=0.50.0"
  }
}
```

- `name` **must** start with `slidev-theme-`
- `keywords` **must** include `"slidev-theme"` and `"slidev"`
- `slidev.colorSchema`: `"light"`, `"dark"`, or `"both"`
- `slidev.defaults`: merged with user's headmatter config

## Global Styles (`styles/index.css`)

Automatically loaded when the theme is active. Use CSS variables for theming:

```css
:root {
  --slidev-theme-primary: #1e40af;
  --slidev-theme-background: #ffffff;
  --slidev-theme-font-sans: 'Inter', sans-serif;
}

.dark {
  --slidev-theme-primary: #60a5fa;
  --slidev-theme-background: #1e1e2e;
}

.slidev-layout {
  font-family: var(--slidev-theme-font-sans);
}
```

## Writing Layouts (`layouts/*.vue`)

Layouts override or extend Slidev's built-in layouts. The component **must** have `class="slidev-layout <layout-name>"` on the root element.

```vue
<!-- layouts/cover.vue -->
<template>
  <div class="slidev-layout cover">
    <div class="title-area">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.cover {
  background: var(--slidev-theme-background);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
</style>
```

### Built-in Layouts to Override

| Layout | Purpose |
|--------|---------|
| `cover` | Title slide |
| `default` | Standard slide |
| `center` | Centered content |
| `section` | Section divider |
| `two-cols` | Two columns (uses `::right::` slot) |
| `two-cols-header` | Header + two columns |
| `intro` | Introduction slide |
| `quote` | Quotation |
| `statement` | Statement/fact |
| `end` | Final slide |
| `image-left` / `image-right` | Image + content |

### Layout with Named Slots

```vue
<template>
  <div class="slidev-layout two-cols-header">
    <div class="header"><slot name="default" /></div>
    <div class="cols">
      <div class="left"><slot name="left" /></div>
      <div class="right"><slot name="right" /></div>
    </div>
  </div>
</template>
```

## Components (`components/*.vue`)

Components are auto-imported into all slides using this theme:

```vue
<!-- components/LogoBadge.vue -->
<template>
  <div class="logo-badge">
    <img :src="src" :alt="alt" />
  </div>
</template>

<script setup lang="ts">
defineProps<{ src: string; alt?: string }>()
</script>
```

Usage in slides:
```md
<LogoBadge src="/logo.png" alt="ARTM" />
```

## UnoCSS Configuration (`setup/unocss.ts`)

Extend UnoCSS with theme-specific shortcuts and colors:

```ts
import { defineUnoSetup } from '@slidev/types'

export default defineUnoSetup(() => ({
  shortcuts: {
    'theme-primary': 'text-[var(--slidev-theme-primary)]',
    'theme-card': 'rounded-lg shadow-md p-4 bg-white dark:bg-gray-800',
  },
  theme: {
    colors: {
      brand: {
        DEFAULT: '#1e40af',
        dark: '#60a5fa',
      },
    },
  },
  safelist: ['text-brand', 'bg-brand'],
}))
```

## Preview (`slides.md`)

Always include a demo deck that exercises all layouts:

```md
---
theme: ./
title: Theme Preview
---

# Cover Slide
subtitle: Preview deck

---
layout: section
---

# Section Title

---

# Default Slide

Regular content with **bold** and `code`.

- Item one
- Item two

---
layout: two-cols
---

# Left Column

Left content

::right::

# Right Column

Right content
```

Run preview:
```bash
pnpm run dev   # opens http://localhost:3030
```

## Publishing Checklist

1. `name` starts with `slidev-theme-`
2. `keywords` includes `"slidev-theme"` and `"slidev"`
3. `README.md` includes screenshots and usage instructions
4. All `.vue` and `.ts` files can be published **without** pre-compiling — Slidev compiles them at install time
5. Add `"slidev-theme"` topic to the GitHub repository for discoverability
6. `pnpm publish --access public`

## Conventions

- Prefix all CSS custom properties with `--slidev-theme-`
- Support both `light` and `dark` modes unless the theme is intentionally single-mode
- Keep layout root class matching the layout name (e.g., `.slidev-layout.cover`)
- Test with real slides before publishing

---

## Writing an Addon (`slidev-addon-*`)

An addon is a companion package for reusable components and **new** (non-built-in) layouts.
A project can use **one theme + multiple addons** simultaneously.

### When to use an addon vs a theme

| Concern | Theme | Addon |
|---------|-------|-------|
| Global styles (colors, fonts) | ✅ | ⚠️ avoid |
| Override built-in layouts (`cover`, `default`…) | ✅ | ⚠️ avoid |
| **New custom layouts** | ✅ | ✅ preferred |
| **Reusable Vue components** | ✅ | ✅ preferred |
| Code runners / snippets | ❌ | ✅ |

### Addon package.json

```json
{
  "name": "slidev-addon-<name>",
  "keywords": ["slidev-addon", "slidev"]
}
```

- `name` **must** start with `slidev-addon-`
- `keywords` **must** include `"slidev-addon"` and `"slidev"`
- No `slidev.colorSchema` or `slidev.defaults` — those belong in the theme

### Addon structure

```
slidev-addon-<name>/
├── package.json
├── README.md
├── slides.md              # preview: addons: [./] + theme reference
├── layouts/
│   └── my-new-layout.vue  # NEW layouts only — do NOT override built-ins
├── components/
│   └── MyComponent.vue    # auto-imported in slides using this addon
└── assets/
    └── logo.png
```

### Preview `slides.md` for an addon

```md
---
theme: ../slidev-theme-artm
addons:
  - ./
---
```

### Using theme + addon together

```yaml
---
theme: slidev-theme-artm
addons:
  - slidev-addon-artm
---
```

### ARTM packages

| Package | Path | Purpose |
|---------|------|---------|
| `slidev-theme-artm` | `../slidev-theme-artm` | Colors, fonts, built-in layout overrides |
| `slidev-addon-artm` | `../slidev-addon-artm` | Custom layouts (`artm-agenda`, `artm-fact`, `artm-image-text`) + components (`ArtmLogo`, `ArtmCard`, `ArtmBadge`, `ArtmFooter`) |
