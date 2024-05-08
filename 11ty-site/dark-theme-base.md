---
title: Dark Theme Base
---

This is my solution for implementing dark theme with Bootstrap. From what I gather on the Bootstrap 5 documentation, there isn't a whole lot of options for switching between darker colors to lighter depending on your dark/light theme. There are some CSS variables that you can use, but I wanted to use things like `.bg-base-1` or `.border-base-1` that will gracefully swap to the negative instance.

These are the default base colors.

| Name   | Light Theme | Dark Theme |                                              |
| ------ | ----------- | ---------- | -------------------------------------------- |
| base-1 | #ffffff     | #212529    | <div class="p-2 bg-base-1"></div> |
| base-2 | #f8f9fa     | #282c30    | <div class="p-2 bg-base-2"></div> |
| base-3 | #eff0f1     | #2e3236    | <div class="p-2 bg-base-3"></div> |
| base-4 | #e7e8e9     | #35393d    | <div class="p-2 bg-base-4"></div> |
| base-5 | #35393d     | #e7e8e9    | <div class="p-2 bg-base-5"></div> |
| base-6 | #2e3236     | #eff0f1    | <div class="p-2 bg-base-6"></div> |
| base-7 | #282c30     | #f8f9fa    | <div class="p-2 bg-base-7"></div> |
| base-8 | #212529     | #ffffff    | <div class="p-2 bg-base-8"></div> |



## Link Example

{% include "examples/base-links.njk" %}
```html
{% include "examples/base-links.njk" %}

```