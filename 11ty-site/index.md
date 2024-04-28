---
layout: bootstrap-5
title: Bootstrap Extensions
eleventyExcludeFromCollections: true
---

I am making this because there are some modifications I want to make to all or at least most of my Bootstrap projects. This is a repository that lets me pull in those changes as needed. This is for the most part general purpose, but if you don't like how it works you can just copy the source into your own project and modify it as needed.

This project supports [Bootstrap 5](/bootstrap-5).

<div class="alert alert-warning">This is a work in progress. You might find breaking changes during version `0.x.x`.</div>

## Getting Started

### CDN

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@ngblaylock/bootstrap-extensions@{{pkg.version}}/dist/bootstrap-5/css/bootstrap-extensions.min.css"
/>
```

### NPM

```bash
npm install -D @ngblaylock/bootstrap-extensions@{{pkg.version}}
```

You can also pick and choose which extension you want to include, so you don't have to include everything. See the extension pages for details.