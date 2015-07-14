var gulp           = require('gulp');
var plumber        = require('gulp-plumber');
var watch          = require('gulp-watch');
var runSequence    = require('run-sequence');
var path           = require('path');
var config         = require('../config');

module.exports = gulp.task('watch', [config.browsersync.taskname, config.server.taskname], function() {

  config.watch.watcher.forEach(function(watcher) {
    watch(watcher.src, function() {
      runSequence(watcher.task);
    });
  });
});
