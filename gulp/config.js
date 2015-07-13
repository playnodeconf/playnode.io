var pkg                 = require('../package.json');
var path                = require('path');

var CURRENT_YEAR        = new Date().getFullYear();
var ROOT                = path.normalize(__dirname + '/..');
var BUILD_DIR           = path.join(ROOT, 'build');
var DIST_DIR            = path.join(ROOT, 'dist');
var MODULE_DIR          = path.join(ROOT, 'node_modules');
var SRC_DIR             = path.join(ROOT, 'src');
var CLIENT_DIR          = path.join(SRC_DIR, 'client');
var SCRIPTS_DIR         = path.join(CLIENT_DIR, 'scripts');
var LESS_DIR            = path.join(CLIENT_DIR, 'styles');
var IMAGES_DIR          = path.join(CLIENT_DIR, 'images');

var config              = {};

config.banner =  '/*!\n' +
    ' * ' + pkg.name + ' v' + pkg.version + ' - ' + pkg.homepage + '\n' +
    ' * Copyright ' + CURRENT_YEAR + ' playnodeconf and other ' + pkg.name + ' contributors\n' +
    ' * LICENSE under ' + pkg.license + '\n' +
    ' */\n';

module.exports = config;
