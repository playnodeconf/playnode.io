var gulp            = require('gulp');
var plumber         = require('gulp-plumber');
var config          = require('../config').copy2015;

module.exports = gulp.task(config.taskname, function() {
  return gulp.src(config.src)
    .pipe(plumber())
    .pipe(gulp.dest(config.dest.build));
});
