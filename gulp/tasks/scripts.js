var gulp            = require('gulp');
var gulpif          = require('gulp-if');
var plumber         = require('gulp-plumber');
var browserSync     = require('browser-sync');
var uglify          = require('gulp-uglify');
var concat          = require('gulp-concat-util');
var config          = require('../config').scripts;

module.exports = gulp.task(config.taskname, function() {
  return gulp.src(config.src)
    .pipe(plumber())
    .pipe(concat(config.output))
    .pipe(gulpif(RELEASE, uglify()))
    .pipe(gulp.dest(config.dest.build))
    .pipe(gulpif(browserSync.active, browserSync.reload({ stream: true, once: true })));
});
