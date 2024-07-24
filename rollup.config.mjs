export default [
  { // Test
    input: "src/bootstrap-5/js/theme-switcher.js",
    output: [
      {
        file: "dist/bootstrap-5/js/theme-switcher.cjs.js",
        format: "cjs",
      },
      {
        file: "dist/bootstrap-5/js/theme-switcher.mjs.js",
        format: "es",
      },
      {
        file: "dist/bootstrap-5/js/theme-switcher.js",
        name: "bseThemeSwitcher",
        format: "umd",
      },
    ],
  },
];
