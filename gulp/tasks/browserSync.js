var gulp            = require('gulp');
var browserSync     = require('browser-sync');
var config          = require('../config').browsersync;
var server          = require('../config').server;

module.exports = gulp.task(config.taskname, function() {
  browserSync({
    port: config.browserport,
    ui: {
      port: config.uiport
    },
    proxy: 'localhost:' + server.port
  });
});
