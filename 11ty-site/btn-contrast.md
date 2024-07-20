---
title: Contrast Button
---

Dark and light outline buttons with Bootstrap 5 can have issues when switching between light and dark mode. Using `.btn.btn-outline-dark` looks great on a light theme, but turns invisible on dark theme. Using `.btn.btn-outline-light` looks great on dark theme, but is barely visible in light theme. This extension provides a contrast button to resolve this issue. Using `.btn.btn-outline-contrast` uses the body color for each theme which will preserve visibility on the default background color of each page.

Although it is less of an issue, this also provides `.btn.btn-contrast` for a regular filled button that reacts to the theme.

If you are using the Base Theme extension, you might not need this.

## Getting Started

### Sass

```scss
@import "node_modules/@ngblaylock/bootstrap-extensions/dist/bootstrap-5/scss/_btn-contrast.scss";
```

### CDN

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@ngblaylock/bootstrap-extensions@{{pkg.version}}/dist/bootstrap-5/css/btn-contrast.min.css"
/>
```

## Usage

Toggle the theme to see these buttons adapt to the theme.

{% include "examples/btn-contrast.njk" %}

```html
{% include "examples/btn-contrast.njk" %}
```