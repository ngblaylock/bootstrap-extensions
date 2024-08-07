const sass = require("sass");
const fs = require("fs");
const chokidar = require("chokidar");
const path = require("path");

const filesToConvert = [
  {
    inputFilePath: "./src/scss/bootstrap-extensions.scss",
    outputDir: "./dist/css",
    styles: ["expanded", "compressed"],
    includePrefix: true,
  },
  {
    inputFilePath: "./src/scss/_base-theme.scss",
    outputDir: "./dist/css",
    styles: ["expanded", "compressed"],
    includePrefix: true,
  },
  {
    inputFilePath: "./src/scss/_btn-contrast.scss",
    outputDir: "./dist/css",
    styles: ["expanded", "compressed"],
    includePrefix: true,
  },
  {
    inputFilePath: "./src/scss/_icon-buttons.scss",
    outputDir: "./dist/css",
    styles: ["expanded", "compressed"],
    includePrefix: true,
  },
  {
    inputFilePath: "./src/scss/_theme-switch.scss",
    outputDir: "./dist/css",
    styles: ["expanded", "compressed"],
    includePrefix: true,
  },
  {
    inputFilePath: "./11ty-site/_scss/site.scss",
    outputDir: "./docs/css",
    styles: ["compressed"],
    includePrefix: false,
  },
];

const convertFile = ({ inputFilePath, outputDir, styles, includePrefix }) => {
  styles.forEach((style) => {
    // Prefix content with required imports
    const prefixContent = includePrefix ? `
@import "./node_modules/bootstrap/scss/functions";
@import "./node_modules/bootstrap/scss/variables";
@import "./node_modules/bootstrap/scss/variables-dark";
@import "./node_modules/bootstrap/scss/maps";
@import "./node_modules/bootstrap/scss/mixins";
@import "./node_modules/bootstrap/scss/utilities";
`: '';

    sass.render(
      {
        data: `${prefixContent}\n@import '${inputFilePath}';`, // Prefix with content and import main file
        outputStyle: style,
      },
      (err, result) => {
        if (err) {
          console.error(err);
        } else {
          let outputFileName = path.basename(inputFilePath);
          outputFileName = outputFileName.startsWith('_') ? outputFileName.slice(1) : outputFileName;
          outputFileName = style === 'compressed' ? outputFileName.replace('.scss', '.min.css') : outputFileName.replace('.scss', '.css');

          // Ensure the directory exists
          if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
          }
          
          // Write the CSS file
          const outputPath = path.join(outputDir, outputFileName);
          fs.writeFileSync(outputPath, result.css.toString());
          console.log(`Converted ${inputFilePath} to ${outputPath}`);
        }
      }
    );
  });
};

const buildSass = () => {
  filesToConvert.forEach((obj) => convertFile(obj));
};

const watchSass = () => {
  const watcher = chokidar.watch(["./src/scss", "./11ty-site/_scss"]);
  watcher.on("change", () => {
    console.log("Change detected in SCSS files. Rebuilding...");
    buildSass();
  });
};

// Check if the watch flag is provided
if (process.argv.includes("-w") || process.argv.includes("--watch")) {
  console.log("Watching Sass Changes...");
  buildSass();
  watchSass();
} else {
  buildSass();
}
