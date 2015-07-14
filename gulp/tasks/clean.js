var gulp            = require('gulp');
var del             = require('del');
var config          = require('../config').clean;

module.exports = gulp.task(config.taskname, function (cb) {
  del(config.target, cb);
});
