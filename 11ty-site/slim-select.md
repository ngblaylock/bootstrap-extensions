---
title: Slim Select Styles
---

[Slim Select](https://slimselectjs.com/) is a neat library that makes better single and multiple select inputs. It is a very powerful library, but it doesn't really fit Bootstrap out-of-the-box. To use Slim Select in your project, you will need to install the script yourself, but instead of using their provided styles, you can use styles from Bootstrap Extensions to help make sure they match your styles better.

{% include "examples/slim-select.njk" %}

## TODO:::

- Change Icon
- Active Shadow
- Format search input
- Disabled state acting weird on hover.

## Check States

- Normal
- Disabled
- Focus
- Active

## Important Notes:

- `z-index` is set to `10000` which goes against Bootstrap's Z-index methodology. If you need it lower than others, then do so manually.