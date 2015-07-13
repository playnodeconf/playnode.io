var gulp            = require('gulp');
var path            = require('path');
var requireDir      = require('require-dir');
var args            = require('minimist')(process.argv.slice(2));

global.RELEASE      = args.release || false;

requireDir(path.join('./gulp/tasks'), { recurse: true });

gulp.task('default', []);
