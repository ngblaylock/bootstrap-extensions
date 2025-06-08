# Deploy Steps

1. Update `version` in `package.json`
2. Run `npm run build`. This will:
   1. Remove the `dist`, `docs`, and `bootstrap-extensions` directory for a fresh start
   2. Build Sass files for both NPM package and 11ty site
   3. Convert JS files using Rollup to `cjs`, `es`, and `umd`
   4. Create types from src JS files
   5. Build the 11ty site in production mode into the `docs` directory. This is probably unnecessary since the hosted site is built using GitHub Actions.
3. Merge into `main` branch (do a PR if necessary). This will:
   1. Build the site and host on GitHub Pages using a GitHub workflow
4. Create a release in GitHub. This will:
   1. Publish the new release to NPM via a GitHub Action.