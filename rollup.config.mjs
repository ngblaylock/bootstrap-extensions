import terser from "@rollup/plugin-terser";

const filenames = ["bootstrap-extensions", "theme-switcher"];

const outputMap = filenames.map((filename) => {
  const fileSubPath =
    filename === "bootstrap-extensions" ? filename : `${filename}/${filename}`;
  const config = {
    input: `src/bootstrap-5/js/${filename}.js`,
    output: [
      {
        file: `dist/bootstrap-5/js/${fileSubPath}.cjs`,
        format: "cjs",
      },
      {
        file: `dist/bootstrap-5/js/${fileSubPath}.min.cjs`,
        format: "cjs",
        plugins: [terser()],
      },
      {
        file: `dist/bootstrap-5/js/${fileSubPath}.mjs`,
        format: "es",
      },
      {
        file: `dist/bootstrap-5/js/${fileSubPath}.min.mjs`,
        format: "es",
        plugins: [terser()],
      },
      {
        file: `dist/bootstrap-5/js/${fileSubPath}.js`,
        name: "bse",
        format: "umd",
      },
      {
        file: `dist/bootstrap-5/js/${fileSubPath}.min.js`,
        name: "bse",
        format: "umd",
        plugins: [terser()],
      },
    ],
  };
  if (filename === fileSubPath) {
    config.output.push({
      file: `docs/js/${fileSubPath}.min.js`,
      name: "bse",
      format: "umd",
      plugins: [terser()],
    });
  }

  return config;
});

export default outputMap;
