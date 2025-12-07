---
title: Slim Select Styles
---

[Slim Select](https://slimselectjs.com/) is a neat library that makes better single and multiple select inputs. It is a very powerful library, but it doesn't really fit Bootstrap out-of-the-box. To use Slim Select in your project, you will need to install the script yourself, but instead of using their provided styles, you can use styles from Bootstrap Extensions to help make sure they match your styles better.

This CSS is specifically based off of Slim Select v3.2.0. If something doesn't quite look right at first, double check that you are using the same version. If there is a newer version causing a break, submit a PR.

{% include "examples/slim-select.njk" %}

## TODO:::

- Disabled state acting weird on hover.
- Validation
- Multiple

## Check States

- Normal
- Disabled
- Focus
- Active

## Important Notes:

- `z-index` is set to `10000` which goes against Bootstrap's Z-index methodology. If you need it lower than others, then do so manually.