const { src, dest } = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps')
const gulpIf = require('gulp-if');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');

/**
 * @param {Object} config 
 * @param {string | Array.<string>} config.inputFiles FileNames including path
 * @param {string} config.outputDir Output directory path
 * @param {boolean} config.sourcemap Create sourcemap,
 * @param {boolean} config.minimize Minimize Css
 * @param {Object} config.autoprefixer Autoprefixer Config
 * @param {Object} config.sass Sass Configuration
 */
const buildStyles = (config) => {

  let _inputFiles = config.inputFiles;
  let _outputDir = config.outputDir;
  let _minimize = config.minimize;
  let _sourcemap = config.sourcemap;
  let _sass = config.sass;
  let _autoprefixer = config.autoprefixer;

  return src(_inputFiles)
      .pipe(gulpIf(_sourcemap, sourcemaps.init()))
      .pipe(sass(_sass).on('error', sass.logError))
      .pipe(postcss([autoprefixer(_autoprefixer)]))
      .pipe(gulpIf(_minimize, cssmin()))
      .pipe(gulpIf(_minimize, rename({suffix: '.min'})))
      .pipe(gulpIf(_sourcemap, sourcemaps.write('./')))
      .pipe(dest(_outputDir));
}

module.exports.buildStyles = buildStyles;