---
title: Icon Buttons
---

Icon Buttons must all be the same height of other buttons without an icon. Icon only buttons should be a 1:1 ratio, and the icon inside should be designed at a 1:1 ratio just like <a href="https://pictogrammers.com/library/mdi/" target="_blank">Material Design Icons</a>.

## Getting Started

### Sass

```scss
@import "node_modules/@ngblaylock/bootstrap-extensions/src/scss/_icon-buttons.scss";
```

### CDN

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@ngblaylock/bootstrap-extensions@{{pkg.version}}/dist/css/icon-buttons.min.css"
/>
```

## Usage

This uses Material Design Icons, which work great for most projects. Notice how the buttons are all the same size, and the icons don't change the height. For the icon only button, just use the class `.btn-icon` and the icon within the regular button it will be `.btn-inner-icon`. This makes it so it doesn't matter if you have the icon before or after the text.

{% include "examples/icon-buttons.njk" %}

```html
{% include "examples/icon-buttons.njk" %}
```
