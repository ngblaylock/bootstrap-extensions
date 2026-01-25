# Development

TLDR; Just run `npm run dev` and it does everything.

---

## NPM Module

### Sass

Source Sass files are written directly in the `src` directory. The only files that you should be writing are the `.scss` files. To generate the CSS run `npm run sass:build` or you can run `npm run sass:watch` to watch for changes.

### JavaScript & Types

This project is built in JavaScript, not TypeScript. Do this in the `src/js` directory. The `bootstrap-extensions.js` file should have all the extensions imported into it, so nothing should be directly written within that file.

TypeScript is not fully ignored. When you run `npm run build` it does create the types for each file automatically, so you don't need to write them yourself.

---

## 11ty Documentation Site

This project uses 11ty for the documentation is handled in the `pages` directory. Run this with `npm run dev` to start development. This will also run `npm run sass:watch` behind the scenes.