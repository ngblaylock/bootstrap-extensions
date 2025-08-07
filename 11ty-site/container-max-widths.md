---
title: Container Max Widths
---

Bootstrap provides a `.container-<breakpoint>` class, which makes the container fluid until the specified breakpoint. At that point, it adopts a fixed max-width based on the breakpoint.

While this is useful, there's another scenario that may often arise: maintaining standard container sizing but preventing it from growing beyond a certain breakpoint. This is where the idea of container max widths comes in. For example, a class like `.container-max-md` would allow the container to behave normally up to the medium (`md`) breakpoint, but retain the medium container’s max-width even on larger breakpoints (`lg`, `xl`, `xxl`).

This approach can be especially helpful on text-heavy pages, where overly wide containers (e.g., on ultra-wide monitors) may hurt readability.

## Getting Started

### Sass

```scss
@import "node_modules/@ngblaylock/bootstrap-extensions/src/scss/_container-max-widths.scss";
```

### CDN

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@ngblaylock/bootstrap-extensions@0.2.0/dist/css/container-max-widths.min.css"
/>
```

## Usage

Using max widths requires either a `.container`, `.container-fluid`, or `.container-<breakpoint>` class.

<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Preview Max Widths in Full Screen
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Container Max Widths Example</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body p-0 text-bg-secondary">
      <div class="vstack gap-3 text-center">
        <div>
          <p class="p-3 mb-0">Resize the window to see the container size change.</p>
          <div class="p-3"><strong>Current Breakpoint:</strong>
            <div class="lead">
              <mark class="d-sm-none">XS</mark>
              <mark class="d-none d-sm-inline d-md-none">SM</mark>
              <mark class="d-none d-md-inline d-lg-none">MD</mark>
              <mark class="d-none d-lg-inline d-xl-none">LG</mark>
              <mark class="d-none d-xl-inline d-xxl-none">XL</mark>
              <mark class="d-none d-xxl-inline">XXL</mark>
            </div>
          </div>
        </div>
        {% include "examples/max-container-widths.njk" %}
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

```html
{% include "examples/max-container-widths.njk" %}
```

## Existing Workarounds

One common workaround is to use rows and columns to simulate a narrower layout:

<!-- prettier-ignore-->
```html
<div class="container">
  <div class="row">
    <div class="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 col-xxl-6 offset-xxl-3">
      ...
    </div>
  </div>
</div>
```

The issue with this method is that the layout shifts significantly across the `md`, `lg`, `xl`, and `xxl` breakpoints, potentially disrupting the user experience.

Another workaround is to apply an inline style to force a specific max-width. However, this requires hardcoding values and managing breakpoints manually, which can be difficult to maintain.
