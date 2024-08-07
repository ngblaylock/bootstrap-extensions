# Development

Source Sass files are written directly in the `dist` directory. The only files that you should be writing are the `.scss` files. To generate the CSS run `npm run sass:build` or you can run `npm run sass:watch` to watch for changes.

This project uses 11ty for the documentation is handled in the `pages` directory. Run this with `npm run dev` to start development. This will also run `npm run sass:watch` behind the scenes.

# Deploy Steps

1. Update package.json version
2. Merge into `main` branch (do a PR if necessary). 
  - This will run an action to build the site and host it on GitHub Pages.
3. Create a release in GitHub.
  - This will run an action to publish it to NPM.