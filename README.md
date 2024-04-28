# @ngblaylock/bootstrap-extensions

This repo contains commonly used code to extend or modify Bootstrap 5. Anybody can use this, but I wrote it for myself.

Visit https://ngblaylock.github.io/bootstrap-extensions/ for documentation.

## Development

Source Sass files are written directly in the `dist` directory. The only files that you should be writing are the `.scss` files. To generate the CSS run `npm run sass:build` or you can run `npm run sass:watch` to watch for changes.

This project uses 11ty for the documentation is handled in the `pages` directory. Run this with `npm run dev` to start development. This will also run `npm run sass:watch` behind the scenes. You shouldn't need to run `npm run build` since that is handled in the deployment section.

## Deploy Steps

1. Update package.json version
2. Merge into `main` branch (do a PR if necessary). This will create the documentation.
3. Publish to NPM
4. Create a release in GitHub