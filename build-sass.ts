const sass = require("sass");
const fs = require("fs");
const chokidar = require("chokidar");
const path = require("path");

const filesToConvert = [
  {
    inputFilename: "bootstrap-extensions.scss",
    outputFilename: "bootstrap-extensions",
  },
  {
    inputFilename: "_base-theme.scss",
    outputFilename: "base-theme",
  },
  {
    inputFilename: "_icon-buttons.scss",
    outputFilename: "icon-buttons",
  },
];

const convertFile = ({ inputFilename, outputFilename }) => {
  ["expanded", "compressed"].forEach((style) => {
    // Prefix content with required imports
    const prefixContent = `
@import "./node_modules/bootstrap/scss/functions";
@import "./node_modules/bootstrap/scss/variables";
@import "./node_modules/bootstrap/scss/variables-dark";
`;

    sass.render(
      {
        data: `${prefixContent}\n@import './dist/bootstrap-5/scss/${inputFilename}';`, // Prefix with content and import main file
        outputStyle: style,
      },
      (err, result) => {
        if (err) {
          console.error(err);
        } else {
          const outputFilePath = `./dist/bootstrap-5/css/${outputFilename}${
            style === "compressed" ? ".min" : ""
          }.css`;

          // Ensure the directory exists
          const outputDir = path.dirname(outputFilePath);
          if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
          }

          // Write the CSS file
          fs.writeFileSync(outputFilePath, result.css.toString());
          console.log(`Converted ${inputFilename} to ${outputFilePath}`);
        }
      }
    );
  });
};

const buildSass = () => {
  filesToConvert.forEach((obj) => convertFile(obj));
};

const watchSass = () => {
  const watcher = chokidar.watch("./dist/bootstrap-5/scss");
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
