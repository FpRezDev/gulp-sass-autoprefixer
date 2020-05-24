# gulp-sass-autoprefixer

A Simple gulp plugin to build sass on the fly with little configuration. 

Install
========

```
npm i -D gulp-sass-autoprefixer
```

Usage
======

### Example

```yaml
#.browserslistrc

>= 1%
last 1 major version
not dead
Chrome >= 45
Firefox >= 38
Edge >= 12
Explorer >= 10
iOS >= 9
Safari >= 9
Android >= 4.4
Opera >= 30
```

```js
// gulpfile.js
const { buildStyles } = require('gulp-sass-autoprefixer');

/**
 * Configuration Example
 */
const config = {
  "inputFiles": "src/scss/styles.scss",
  "outputDir": "wwwroot/css/",
  "sourcemap": true,
  "minimize": true,
  "autoprefixer": {
    "flexbox": "no-2009"
  },
  "sass": {
    "outputStyle": "expanded"
  }
}

exports.build = () => {
  return buildStyles(config);
};
```