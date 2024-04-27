const sass = require('sass');
const fs = require('fs');
const chokidar = require('chokidar');

const filesToConvert = [
  {
    inputFilename: 'bootstrap-extensions.scss',
    outputFilename: 'bootstrap-extensions',
  },
  {
    inputFilename: '_icon-buttons.scss',
    outputFilename: 'icon-buttons',
  },
];

const convertFile = ({inputFilename, outputFilename}) => {
  ['expanded', 'compressed'].forEach(style => {
    sass.render({
      file: `./dist/scss/${inputFilename}`,
      outputStyle: style,
    }, (err, result) => {
      if (err) {
        console.error(err);
      } else {
        const outputFilePath = `./dist/css/${outputFilename}${style === 'compressed' ? '.min' : ''}.css`;
        fs.writeFileSync(outputFilePath, result.css.toString());
        console.log(`Converted ${inputFilename} to ${outputFilePath}`);
      }
    });
  });
};

const buildSass = () => {
  filesToConvert.forEach(obj => convertFile(obj));
};

const watchSass = () => {
  const watcher = chokidar.watch('./dist/scss');
  watcher.on('change', () => {
    console.log('Change detected in SCSS files. Rebuilding...');
    buildSass();
  });
};

// Check if the watch flag is provided
if (process.argv.includes('-w') || process.argv.includes('--watch')) {
  console.log("Watching Changes...")
  buildSass();
  watchSass();
} else {
  buildSass();
}
