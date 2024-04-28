---
title: Icon Buttons
---

Icon Buttons must all be the same height of other buttons without an icon. Icon only buttons should be a 1:1 ratio, and the icon inside should be designed at a 1:1 ratio just like Material Design Icons. They should look uniform whether the base font size is `48px` or if the font is a crummy cursive variant.

## Getting Started

### Sass

```scss
@import "node_modules/@ngblaylock/bootstrap-extensions/_icon-buttons.scss";
```

### CDN

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@ngblaylock/bootstrap-extensions@{{pkg.version}}/dist/bootstrap-5/css/bootstrap-extensions.min.css"
/>
```

## Usage

This uses Material Design Icons, which work great for most projects. Notice how the buttons are all the same size, and the icons don't change the height. For the icon only button, just use the class `.btn-icon` and the icon within the regular button it will be `.btn-inner-icon`. This makes it so it doesn't matter if you have the icon before or after the text.

{% include "examples/icon-buttons.njk" %}

```html
{% include "examples/icon-buttons.njk" %}
```

## Visual Testing Examples

{% include "examples/icon-buttons-tests.njk" %}
