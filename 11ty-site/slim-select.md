---
title: Slim Select Styles
---

[Slim Select](https://slimselectjs.com/) is a neat library that makes better single and multiple select inputs. It is a very powerful library, but it doesn't really fit Bootstrap out-of-the-box. To use Slim Select in your project, you will need to install the script yourself, but instead of using their provided styles, you can use styles from Bootstrap Extensions to help make sure they match your styles better.

This CSS is specifically based off of Slim Select v3.2.0. If something doesn't quite look right at first, double check that you are using the same version. If there is a newer version causing a break, submit a PR.

{% include "examples/slim-select.njk" %}

## TODO:::

- Validation
- Finish removing SS CSS variables

## Important Notes:

- `z-index` is set to `10000` which goes against Bootstrap's Z-index methodology. If you need it lower than others, then do so manually.
- Disabled inputs are typically not focusable via the keyboard. Adding the `disabled: true` setting will style the Slim Select style to match other disabled inputs, but it will still be focusable with no user interaction available. To match other disabled properties, you may need to manually select the `div.ss-main.ss-disabled` element and change the tabindex to `-1`. This cannot be achieved through CSS so this library will not handle that functionality.
- This is not optimal if there is a large amount of data in the select for options. Another option that might be better for large data options could be [Virtual Select](https://sa-si-dev.github.io/virtual-select/#/?id=get-started) which would need a similar workflow; install the JS but use a Bootstrap-specific CSS instead. This is not (yet) a part of Bootstrap Extensions.