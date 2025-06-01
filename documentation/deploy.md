# Deploy Steps

1. Update `version` in `package.json`
2. Run `npm run build`. This does not build the 11ty site, but it will build out the necessary CSS and JS files with TS types.
3. Merge into `main` branch (do a PR if necessary). 
  - This will run an action to build the site and host it on GitHub Pages.
4. Create a release in GitHub.
  - This will run an action to publish it to NPM.