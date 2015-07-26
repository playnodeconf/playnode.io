var gulp            = require('gulp');
var gulpif          = require('gulp-if');
var plumber         = require('gulp-plumber');
var ghPages         = require('gulp-gh-pages');
var config          = require('../config').ghpages;

module.exports = gulp.task(config.taskname, function() {
  return gulp.src(config.src)
    .pipe(plumber())
    .pipe(ghPages());
});
