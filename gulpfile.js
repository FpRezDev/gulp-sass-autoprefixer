const { compile } = require("./gulp-sass-autoprefixer");
const config = require('./sassconfig.json');
const del = require('del');

exports.build = () => {
  return compile(config);
};

exports.clean = function() {
  return del('./test-output');
}
