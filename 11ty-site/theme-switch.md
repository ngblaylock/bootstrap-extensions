---
title: Theme Switch
---

This is a handy switch for changing themes from light mode to dark mode. It comes with CSS and Javascript.

## Getting Started

### Sass

```scss
@import "node_modules/@ngblaylock/bootstrap-extensions/src/bootstrap-5/scss/_theme-switch.scss";
```

### CDN

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@ngblaylock/bootstrap-extensions@{{pkg.version}}/dist/bootstrap-5/css/theme-switch.min.css"
/>
<!-- If the script isn't already included-->
<script
  src="https://cdn.jsdelivr.net/npm/@ngblaylock/bootstrap-extensions@{{pkg.version}}/dist/bootstrap-5/js/bootstrap-extensions.min.js"
/>
```

## Usage

{% include "examples/theme-switch.njk" %}

```html
{% include "examples/theme-switch.njk" %}
```