import terser from "@rollup/plugin-terser";

export default [
  {
    input: "src/bootstrap-5/js/bootstrap-extensions.js",
    output: [
      {
        file: "dist/bootstrap-5/js/bootstrap-extensions.cjs",
        format: "cjs",
      },
      {
        file: "dist/bootstrap-5/js/bootstrap-extensions.min.cjs",
        format: "cjs",
        plugins: [terser()],
      },
      {
        file: "dist/bootstrap-5/js/bootstrap-extensions.mjs",
        format: "es",
      },
      {
        file: "dist/bootstrap-5/js/bootstrap-extensions.min.mjs",
        format: "es",
        plugins: [terser()],
      },
      {
        file: "dist/bootstrap-5/js/bootstrap-extensions.js",
        name: "bse",
        format: "umd",
      },
      {
        file: "dist/bootstrap-5/js/bootstrap-extensions.min.js",
        name: "bse",
        format: "umd",
        plugins: [terser()],
      },
      {
        file: "docs/js/bootstrap-extensions.min.js",
        name: "bse",
        format: "umd",
        plugins: [terser()],
      },
    ],
  },
];
