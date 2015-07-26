var gulp            = require('gulp');
var plumber         = require('gulp-plumber');
var runSequence     = require('run-sequence');
var config          = require('../config');

module.exports = gulp.task(config.release.taskname, function (cb) {
  cb = cb || function() {process.exit(1);};

  runSequence(
    config.production.taskname,
    config.ghpages.taskname,
    cb
  );
});
