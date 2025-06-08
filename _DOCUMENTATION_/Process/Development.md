# Development

## NPM Module

Source Sass files are written directly in the `src` directory. The only files that you should be writing are the `.scss` files. To generate the CSS run `npm run sass:build` or you can run `npm run sass:watch` to watch for changes.

## 11ty Documentation Site

This project uses 11ty for the documentation is handled in the `pages` directory. Run this with `npm run dev` to start development. This will also run `npm run sass:watch` behind the scenes.