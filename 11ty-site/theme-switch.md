---
title: Theme Switch
---

This is a handy switch for changing themes from light mode to dark mode. It comes with CSS and Javascript.

## Getting Started

### Sass

```scss
@import "node_modules/@ngblaylock/bootstrap-extensions/src/scss/_theme-switch.scss";

/*

Default Sass Variables:

$bse-prefix: "bse-" !default;
$theme-switch-size: $spacer * 2 !default;
$theme-switch-bg-opacity: 0.06 !default;
$theme-switch-bg-hover-opacity: 0.09 !default;
$theme-switch-bg-focus-opacity: 0.12 !default;
$icon-color-light: $body-bg !default;
$icon-color-dark: $body-color !default;

*/
```

### JS

#### Browser

```html
<script src="dist/js/bootstrap-extensions.min.js" />
```

#### ESM

```js
import { themeSwitcher } from "@ngblaylock/bootstrap-extensions";
```

#### CJS

```js
const { themeSwitcher } = require('@ngblaylock/bootstrap-extensions');
```

### CDN

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@ngblaylock/bootstrap-extensions@{{pkg.version}}/dist/css/theme-switch.min.css"
/>
<script src="https://cdn.jsdelivr.net/npm/@ngblaylock/bootstrap-extensions@{{pkg.version}}/dist/js/theme-switcher/theme-switcher.min.js" />
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

### Variants

If you need to place your button on a fixed light or dark color regardless of the set theme, you can use the `.theme-switch-light` or `.theme-switch-dark` variant to preserve the color on the switch.

{% include "examples/theme-switch-variants.njk" %}

```html
{% include "examples/theme-switch-variants.njk" %}
```

Although this doesn't work for this site, you can theoretically do `data-bse-theme-switch="red, green, blue"` to change between custom themes.

## JavaScript

You can also use JavaScript if you want to handle changing themes your own way.

### API

| Method                             | Description                                                                                                   |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `initTheme()`                      | Initializes the theme. This is done once loaded in the browser, but can be called on command, like during HMR |
| `getStoredTheme()`                 | Gets the currently stored theme (if any)                                                                      |
| `toggleTheme(undefined\|string[])` | Toggles the theme. Pass in an array of themes to toggle in specific orders.                                   |
| `setTheme(string)`                 | Sets the theme to the theme passed in                                                                         |

<div class="alert alert-info">Note that the "System" theme is treated as a falsy value. If no theme is set it defaults to the system theme.</div>

{% include "examples/theme-switch-js.njk" %}

```html
{% include "examples/theme-switch-js.njk" %}
```

## CSS Variables

- `--bse-theme-switch-size`
- `--bse-theme-switch-bg-rgb`
- `--bse-light-theme-icon`
- `--bse-dark-theme-icon`
- `--bse-system-theme-icon`
