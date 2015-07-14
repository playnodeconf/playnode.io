var gulp      = require('gulp');
var gutil     = require('gulp-util');
var http      = require('http');
var express   = require('express');
var morgan    = require('morgan');
var config    = require('../config').server;

module.exports = gulp.task('server', function() {

  var server = express();

  server.use(morgan('dev'));
  server.use(express.static(config.root));

  server.all('/*', function(req, res) {
      res.sendFile('index.html', { root: config.root });
  });

  var s = http.createServer(server);
  s.on('error', function(err){
    if(err.code === 'EADDRINUSE'){
      gutil.log('Development server is already started at port ' + config.port);
    }
    else {
      throw err;
    }
  });

  s.listen(config.port);

});