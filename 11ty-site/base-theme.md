---
title: Base Theme
---

This is my solution for handling dark theme with Bootstrap. From what I gather on the Bootstrap 5 documentation, there aren't many options for dynamic color shifting. There are some CSS variables that you can use, but I wanted to use things like `.bg-base-1` or `.border-base-1` that will gracefully swap to the negative instance when switching themes.

The names of these may change throughout `v0.x.x` since I'm not fully convinced my naming convention is the best it can be. I wanted to name `base-{1-4}` as `background` and `base-i{1-4}` as `foreground`, but a utility class `bg-foreground-1` looks a little contradictory, and `bg-background-3` seemed a little redundant.

This heavily relies on CSS Variables. Base colors, rgb, hover, and active variables are also available for each base step.

## Getting Started

### Sass

```scss
@import "node_modules/@ngblaylock/bootstrap-extensions/src/bootstrap-5/scss/_base-theme.scss";
```

### CDN

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@ngblaylock/bootstrap-extensions@{{pkg.version}}/dist/bootstrap-5/css/base-theme.min.css"
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

One issue with dark mode is using buttons. For example, in light mode you might have a `.btn-outline-dark` which looks and functions perfectly fine. If you switch to dark mode, it is invisible. That isn't what you want. You can use this base theme to handle that as well.

Just use `.btn.btn-base-1` or whatever variant needed.

{% include "examples/base-buttons.njk" %}

```html
{% include "examples/base-buttons.njk" %}
```

## Using Sass

- In light mode, `base-1` and `base-i1` use the `$body-bg` and `$body-color` variables respectively by default, so by changing those variables it will change `$base-{1-4}-light` and `$base-i{1-4}-light`.
- In dark mode, just set `$body-bg-dark` and `$body-color-dark` to achieve a similar affect explained above.
- When changing `$base-1-{light|dark}` and `$base-i1-{light|dark}`, `$base-{2-4}-{light|dark}` and `$base-i{2-4}-{light|dark}` will automatically add a tint or shade depending on what was set.
- You can also just declare `$base-{1-4}-{light|dark}` and `$base-i{1-4}-{light|dark}` for full customization.
- Using the buttons adds in about an extra 10kb to the CSS. If you don't plan on using them, you can set `$enable-btn-base: false;` which will omit the buttons from your Sass build.

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