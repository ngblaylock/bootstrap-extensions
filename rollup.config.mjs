import terser from "@rollup/plugin-terser";

export default [
  {
    input: `src/js/bootstrap-extensions.js`,
    output: [
      {
        file: `dist/js/bootstrap-extensions.cjs`,
        format: "cjs",
      },
      {
        file: `dist/js/bootstrap-extensions.min.cjs`,
        format: "cjs",
        plugins: [terser()],
      },
      {
        file: `dist/js/bootstrap-extensions.mjs`,
        format: "es",
      },
      {
        file: `dist/js/bootstrap-extensions.min.mjs`,
        format: "es",
        plugins: [terser()],
      },
      {
        file: `dist/js/bootstrap-extensions.js`,
        name: "bse",
        format: "umd",
      },
      {
        file: `dist/js/bootstrap-extensions.min.js`,
        name: "bse",
        format: "umd",
        plugins: [terser()],
      },
      {
        file: `docs/js/bootstrap-extensions.min.js`,
        name: "bse",
        format: "umd",
        plugins: [terser()],
      },
    ],
  },
  {
    input: `src/js/theme-switcher.js`,
    output: [
      {
        file: `dist/js/theme-switcher/theme-switcher.js`,
        name: "themeSwitcher",
        format: "umd",
      },
      {
        file: `dist/js/theme-switcher/theme-switcher.min.js`,
        name: "themeSwitcher",
        format: "umd",
        plugins: [terser()],
      },
    ],
  },
];
