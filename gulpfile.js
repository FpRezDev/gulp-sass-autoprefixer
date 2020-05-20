const { compile } = require("./gulp-sass-autoprefixer");
const { bootstrapConfig } = require('./sass.bootstrap.config');
const del = require('del');

exports.build = () => {
  return compile(bootstrapConfig);
};

exports.clean = function() {
  return del('./test-output');
}
