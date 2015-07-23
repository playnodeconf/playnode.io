var gulp            = require('gulp');
var gulpif          = require('gulp-if');
var plumber         = require('gulp-plumber');
var browserSync     = require('browser-sync');
var concat          = require('gulp-concat-util');
var config          = require('../config').vendor.js;

module.exports = gulp.task(config.taskname, function() {
  return gulp.src(config.src)
    .pipe(plumber())
    .pipe(concat(config.output))
    .pipe(gulp.dest(config.dest.build))
    .pipe(gulpif(browserSync.active, browserSync.reload({ stream: true, once: true })));
});
