const { src, dest } = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps')

// sass config
const sassConfig = {
  outputStyle: 'expanded'
};

const autoprefixerConfig = {
  flexbox: 'no-2009'
};

const postcssPlugins = [
  autoprefixer(autoprefixerConfig)
];

/**
 * @param {Object} config 
 * @param {string} config.inputFileName FileName including path
 * @param {string} config.outputDir Output directory path
 * @param {boolean} config.sourcemap Create sourcemap 
 */
const compile = (config) => {
  
  if(config.sourcemap) {
    return src(config.inputFileName)
      .pipe(sourcemaps.init())
      .pipe(sass(sassConfig).on('error', sass.logError))
      .pipe(postcss(postcssPlugins))
      .pipe(sourcemaps.write('./'))
      .pipe(dest(config.outputDir));
  }
  return src(config.inputFileName)
      .pipe(sass(sassConfig).on('error', sass.logError))
      .pipe(postcss(postcssPlugins))
      .pipe(dest(config.outputDir));
}

module.exports.compile = compile;