---
title: Dark Theme Base
---

This is my solution for implementing a better dark theme with Bootstrap. From what I gather on the Bootstrap 5 documentation, there isn't a whole lot of options for switching between darker colors to lighter depending on your dark/light theme. There are some CSS variables that you can use, but I wanted to use things like `.bg-base-1` or `.border-base-1` that will gracefully swap to the negative instance when switching themes.

## Getting Started

### Sass

```scss
@import "node_modules/@ngblaylock/bootstrap-extensions/dist/bootstrap-5/scss/_base-color.scss";
```

### CDN

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@ngblaylock/bootstrap-extensions@{{pkg.version}}/dist/bootstrap-5/css/base-color.min.css"
/>
```

## Colors

- `base-1` uses the default background color, so light on light theme and dark on dark theme.
- `base-8` uses the default body color, so dark on light theme and light on dark theme.

| Name   | Light Theme | Dark Theme |                                   |
| ------ | ----------- | ---------- | --------------------------------- |
| base-1 | #ffffff     | #212529    | <div class="p-2 bg-base-1"></div> |
| base-2 | #f7f7f7     | #282c2f    | <div class="p-2 bg-base-2"></div> |
| base-3 | #f0f0f0     | #2e3235    | <div class="p-2 bg-base-3"></div> |
| base-4 | #e9e9e9     | #34383b    | <div class="p-2 bg-base-4"></div> |
| base-5 | #34383b     | #cbced2    | <div class="p-2 bg-base-5"></div> |
| base-6 | #2e3235     | #d1d4d8    | <div class="p-2 bg-base-6"></div> |
| base-7 | #282c2f     | #d7dbdf    | <div class="p-2 bg-base-7"></div> |
| base-8 | #212529     | #dee2e6    | <div class="p-2 bg-base-8"></div> |

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

## Using Sass

- In light mode, `base-1` and `base-8` use the `$body-bg` and `$body-color` variables respectively by default, so by changing those variables it will change `$base-{1-8}-light`.
- In dark mode, just set `$body-bg-dark` and `$body-color-dark` to achieve a similar affect explained above.
- When changing `$base-1-{light|dark}` and `$base-8-{light|dark}`, `$base-{2-7}-{light|dark}` will automatically add a tint or shade depending on what was set.
- You can also just declare `$base-{1-8}-{light|dark}` for full customization.

## Available Classes

These are classes `*` being a `base-` with the number value. More may be added as needed.

- `bg-*`
- `border-*`
- `link-*`
- `link-underline-*`
- `text-*`
- `text-bg-*`