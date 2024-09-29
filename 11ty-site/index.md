---
layout: bootstrap-5
title: Bootstrap Extensions
eleventyExcludeFromCollections: true
---

This repository was created to implement modifications that apply to most, if not all, Bootstrap projects. It serves as a general-purpose tool, allowing users to pull in changes as needed. If the implementation doesn’t suit specific needs, the source code can be copied into individual projects and modified accordingly.

This project supports [Bootstrap 5](https://getbootstrap.com/).

<div class="alert alert-warning">This is a work in progress. You might find breaking changes during version <code>v0.x.x</code>.</div>

## Getting Started

### CDN

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@ngblaylock/bootstrap-extensions@{{pkg.version}}/dist/css/bootstrap-extensions.min.css"
/>
<script
  src="https://cdn.jsdelivr.net/npm/@ngblaylock/bootstrap-extensions@{{pkg.version}}/dist/js/bootstrap-extensions.min.js"
/>
```

### NPM

```bash
npm install @ngblaylock/bootstrap-extensions@{{pkg.version}} --save-dev --save-exact
```

You can also pick and choose which extension you want to include, so you don't have to include everything. See the extension pages for details.