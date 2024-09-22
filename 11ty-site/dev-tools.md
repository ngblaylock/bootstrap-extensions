---
title: Development Tools
---

These items are not intended to be viewed by users and should only show up in development mode. Adding this should have a wrapper that checks an environment variable. Depending on what technology you are using will determine how you incorporate this. 

<div class="alert alert-warning">
Bootstrap Extensions only provides styling for these elements! It does not automatically determine if you are in development or production mode.
</div>

## Getting Started

### Sass

```scss
@import "node_modules/@ngblaylock/bootstrap-extensions/src/scss/_dev-tools.scss";
```

### CDN

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@ngblaylock/bootstrap-extensions@{{pkg.version}}/dist/css/dev-tools.min.css"
/>
```

## Usage

### Development Note

{% include "examples/dev-note.njk" %}

```html
{% include "examples/dev-note.njk" %}
```

### Dev Toolbar

### Media Query Helper

### Development Favicon

Dev favicons are a practical concept, not a feature directly offered by Bootstrap Extensions. They serve as a visual cue in your browser tab, helping you quickly identify whether you're on your development or production site. This is especially useful if you have both the development and production versions open.

To implement this, you'll need to set up conditional logic to load different favicons. For example, you might use a red favicon for your dev site and the standard favicon for production.

<div class="row">
  <div class="col-sm-6">
    <div class="card card-body align-items-center">
      <img src="/favicon.svg" style="max-width: 100px;" />
      Regular Favicon
    </div>
  </div>
  
  <div class="col-sm-6">
    <div class="card card-body align-items-center">
      <img src="/favicon-dev.svg" style="max-width: 100px;" />
      Development Favicon
    </div>
  </div>
</div>