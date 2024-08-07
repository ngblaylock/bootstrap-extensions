---
title: Theme Switch
---

This is a handy switch for changing themes from light mode to dark mode. It comes with CSS and Javascript.

## Getting Started

### Sass

```scss
@import "node_modules/@ngblaylock/bootstrap-extensions/src/scss/_theme-switch.scss";
```

### JS

```html
<script src="dist/js/bootstrap-extensions.min.js" />
```

### CDN

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@ngblaylock/bootstrap-extensions@{{pkg.version}}/dist/css/theme-switch.min.css"
/>
<script
  src="https://cdn.jsdelivr.net/npm/@ngblaylock/bootstrap-extensions@{{pkg.version}}/dist/js/theme-switcher/theme-switcher.min.js"
/>
```

## Usage

The basic usage for this toggles the theme in order from: 

`light -> dark -> system -> (repeat)`

{% include "examples/theme-switch.njk" %}

```html
{% include "examples/theme-switch.njk" %}
```

### Switch Order and Value

You can also give `data-bse-theme-switch` a value to change the order, and/or only show dark and light modes. 

{% include "examples/theme-switch-advanced.njk" %}

```html
{% include "examples/theme-switch-advanced.njk" %}
```

Although this doesn't work for this site, you can theoretically do `data-bse-theme-switch="red, green, blue"` to change between custom themes.

## JavaScript

You can also use JavaScript if you want to handle changing themes your own way.

<div class="alert alert-info">Note that the "System" theme is treated as a falsy value. If no theme is set it defaults to the system theme.</div>

{% include "examples/theme-switch-js.njk" %}

```html
{% include "examples/theme-switch-js.njk" %}
```