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

/*

Default Sass Variables:

$bse-prefix: "bse-" !default;
$dev: $red !default;
$dev-secondary: shade-color($dev, 50%) !default;
$dev-note-text: "Dev Note" !default;
$dev-toolbar-height: $spacer !default;

*/
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

Development notes are intended to only show up in development mode and it should be hidden in production. These are great for reminders, to-dos and anything else you don't want the end user to see but might be helpful to see while developing.

{% include "examples/dev-note.njk" %}

```html
{% include "examples/dev-note.njk" %}
```

### Dev Toolbar

The development toolbar serves two purposes. The first as a quick indicator that the site you are on is a development site, and not production. The second is a way to house links to other development processes.

Bootstrap Extensions ships with basic development toolbar as well as a collapse wrapper. When you hover over the collapse wrapper, or if an element is in focus it will expand to show the links. You can modify this to fit the needs of your dev site. Using utility classes can help with placement, such as keeping it sticky to the top of your window.

{% include "examples/dev-toolbar.njk" %}

```html
{% include "examples/dev-toolbar.njk" %}
```

### Media Query Helper

A media query helper is a small indicator located in the bottom-right corner of the webpage, showing the current screen size breakpoint. This is especially useful when working with responsive classes, such as columns, as it helps you quickly determine which breakpoint you're at. Depending on your project, you can either set it up to toggle on and off or keep it visible at all times while in development mode.

Try resizing the screen to see the media query helper update with the current breakpoint size in the bottom-right corner.

{% include "examples/dev-media-query-helper.njk" %}

```html
{% include "examples/dev-media-query-helper.njk" %}
```

### Development Favicon

Dev favicons are a practical concept, not a feature directly offered by Bootstrap Extensions. They serve as a visual cue in your browser tab, helping you quickly identify whether you're on your development or production site. This is especially useful if you have both the development and production versions open.

To implement this, you'll need to set up conditional logic to load different favicons. For example, you might use a
<span class="hide-on-custom">red</span>
<span class="show-on-custom">green</span>
favicon for your dev site and the standard favicon for production.

<div class="row">
  <div class="col-sm-6">
    <div class="card card-body align-items-center">
      <img src="/favicon.svg" style="max-width: 100px;" />
      Regular Favicon
    </div>
  </div>
  
  <div class="col-sm-6 hide-on-custom">
    <div class="card card-body align-items-center">
      <img src="/favicon-dev.svg" style="max-width: 100px;" />
      Development Favicon
    </div>
  </div>
  
  <div class="col-sm-6 show-on-custom">
    <div class="card card-body align-items-center">
      <img src="/favicon-dev-alt.svg" style="max-width: 100px;" />
      Development Favicon
    </div>
  </div>
</div>
<br />

## CSS Variables

- `--bse-dev` - Hex value of the dev color. The default is the Bootstrap red color
- `--bse-dev-rgb` - RGB values of the dev color
- `--bse-dev-secondary` - Hex value of the secondary dev color. The default is a darker variant of the Bootstrap red color
- `--bse-dev-secondary-rgb` - RGB values of the dev-secondary color.
