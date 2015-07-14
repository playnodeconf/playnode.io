var gulp            = require('gulp');
var gulpif          = require('gulp-if');
var plumber         = require('gulp-plumber');
var browserSync     = require('browser-sync');
var less            = require('gulp-less');
var minifyCss       = require('gulp-minify-css');
var autoprefixer    = require('gulp-autoprefixer');
var concat          = require('gulp-concat-util');

var config          = require('../config').styles;

module.exports = gulp.task(config.taskname, function() {

  return gulp.src(config.src)
    .pipe(plumber())
    .pipe(concat(config.output))
    .pipe(less())
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(gulpif(RELEASE, minifyCss()))
    .pipe(gulp.dest(config.dest.build))
    .pipe(gulpif(browserSync.active, browserSync.reload({ stream: true, once: true })));
});
