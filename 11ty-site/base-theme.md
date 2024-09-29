---
title: Base Theme
---

This is a solution for handling dark theme with Bootstrap. There are not many options for dynamic color shifting. There are some CSS variables that you can use, but Bootstrap Extensions advanced usage creates options like `.bg-base-1` or `.border-base-1` that will gracefully swap to the negative instance when switching themes.

## Getting Started

### Sass

```scss
@import "node_modules/@ngblaylock/bootstrap-extensions/src/scss/_base-theme.scss";

/*

Default Sass Variables:

$bse-prefix: "bse-" !default;
$base-1-light: $body-bg !default;
$base-2-light: shade-color($base-1-light, 3%) !default;
$base-3-light: shade-color($base-2-light, 3%) !default;
$base-4-light: shade-color($base-3-light, 3%) !default;
$base-i1-light: $body-color !default;
$base-i2-light: tint-color($base-i1-light, 9%) !default;
$base-i3-light: tint-color($base-i2-light, 9%) !default;
$base-i4-light: tint-color($base-i3-light, 9%) !default;
$base-1-dark: $body-bg-dark !default;
$base-2-dark: tint-color($base-1-dark, 3%) !default;
$base-3-dark: tint-color($base-2-dark, 3%) !default;
$base-4-dark: tint-color($base-3-dark, 3%) !default;
$base-i1-dark: $body-color-dark !default;
$base-i2-dark: shade-color($base-i1-dark, 9%) !default;
$base-i3-dark: shade-color($base-i2-dark, 9%) !default;
$base-i4-dark: shade-color($base-i3-dark, 9%) !default;
$enable-btn-base: true !default;

*/
```

### CDN

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@ngblaylock/bootstrap-extensions@{{pkg.version}}/dist/css/base-theme.min.css"
/>
```

## Colors

- `base-1` uses the default background color, so light on light theme and dark on dark theme.
- `base-i1` uses the default body color, so dark on light theme and light on dark theme. The `i` stands for "Inverse".

| Name    | Light Theme | Dark Theme |                                    |
| ------- | ----------- | ---------- | ---------------------------------- |
| base-1  | #ffffff     | #212529    | <div class="p-2 bg-base-1"></div>  |
| base-2  | #f7f7f7     | #282c2f    | <div class="p-2 bg-base-2"></div>  |
| base-3  | #f0f0f0     | #2e3235    | <div class="p-2 bg-base-3"></div>  |
| base-4  | #e9e9e9     | #34383b    | <div class="p-2 bg-base-4"></div>  |
| base-i1 | #212529     | #dee2e6    | <div class="p-2 bg-base-i1"></div> |
| base-i2 | #282c2f     | #d7dbdf    | <div class="p-2 bg-base-i2"></div> |
| base-i3 | #2e3235     | #d1d4d8    | <div class="p-2 bg-base-i3"></div> |
| base-i4 | #34383b     | #cbced2    | <div class="p-2 bg-base-i4"></div> |

## Link Example

{% include "examples/base-links.njk" %}

```html
{% include "examples/base-links.njk" %}
```

## Background Example

You can either use `.bg-base-1` or `.text-bg-base-1`.

{% include "examples/base-backgrounds.njk" %}

```html
{% include "examples/base-backgrounds.njk" %}
```

## Buttons

One issue in general with Bootstrap is using buttons with themes. For example, in light mode you might have a `.btn-outline-dark` which looks and functions perfectly fine. If you switch to dark mode, it is invisible. Bootstrap Extensions provides additional buttons to respond to theme changes.

Toggle the theme to see how these buttons respond.

{% include "examples/base-buttons.njk" %}

```html
{% include "examples/base-buttons.njk" %}
```

## Available Classes

These are classes where `*` can be either `base-{1-4}` or `base-i{1-4}`. More may be added as needed.

- `bg-*`
- `border-*`
- `btn-*`
- `btn-outline-*`
- `link-*`
- `link-underline-*`
- `text-*`
- `text-bg-*`

## CSS Variables

- `--bse-base-1`
- `--bse-base-2`
- `--bse-base-3`
- `--bse-base-4`
- `--bse-base-i1`
- `--bse-base-i2`
- `--bse-base-i3`
- `--bse-base-i4`
- `--bse-base-1-rgb`
- `--bse-base-2-rgb`
- `--bse-base-3-rgb`
- `--bse-base-4-rgb`
- `--bse-base-i1-rgb`
- `--bse-base-i2-rgb`
- `--bse-base-i3-rgb`
- `--bse-base-i4-rgb`
- `--bse-base-1-hover`
- `--bse-base-2-hover`
- `--bse-base-3-hover`
- `--bse-base-4-hover`
- `--bse-base-i1-hover`
- `--bse-base-i2-hover`
- `--bse-base-i3-hover`
- `--bse-base-i4-hover`
- `--bse-base-1-active`
- `--bse-base-2-active`
- `--bse-base-3-active`
- `--bse-base-4-active`
- `--bse-base-i1-active`
- `--bse-base-i2-active`
- `--bse-base-i3-active`
- `--bse-base-i4-active`