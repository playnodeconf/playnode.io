var pkg                 = require('../package.json');
var path                = require('path');

var CURRENT_YEAR        = new Date().getFullYear();
var ROOT                = path.normalize(__dirname + '/..');
var BUILD_DIR           = path.join(ROOT, 'build');
var MODULE_DIR          = path.join(ROOT, 'node_modules');
var SRC_DIR             = path.join(ROOT, 'src');
var CLIENT_DIR          = path.join(SRC_DIR, 'client');
var SCRIPTS_DIR         = path.join(CLIENT_DIR, 'scripts');
var LESS_DIR            = path.join(CLIENT_DIR, 'styles');
var IMAGES_DIR          = path.join(CLIENT_DIR, 'images');
var ASSETS_DIR          = 'assets';
var config              = {};

config.copyIndex = {
  taskname: 'copyIndex',
  src: [
    path.join(CLIENT_DIR, 'index.html'),
  ],
  dest: {
    build: BUILD_DIR
  }
};

config.images = {
  taskname: 'images',
  src: [
    path.join(IMAGES_DIR, '**/*.{jpg,jpeg,png,gif,ico}')
  ],
  optimized: {
    optimizationLevel: 5,
    progressive: true,
    interlaced: true
  },
  dest: {
    build: path.join(BUILD_DIR, ASSETS_DIR, 'images')
  }
};

config.scripts = {
  taskname: 'scripts',
  src: [
    path.join(SCRIPTS_DIR, '**/*.js')
  ],
  output: 'app.min.js',
  dest: {
    build: path.join(BUILD_DIR, ASSETS_DIR, 'scripts')
  }
};

config.styles = {
  taskname: 'styles',
  src: [
    path.join(LESS_DIR, 'app.less'),
  ],
  all: [
    path.join(LESS_DIR, '*.less'),
    path.join(LESS_DIR, '**/*.less')
  ],
  output: 'app.min.css',
  autoprefixer: [
    'last 2 versions'
  ],
  dest: {
    build: path.join(BUILD_DIR, ASSETS_DIR, 'styles')
  }
};

config.vendor = {
  js: {
    taskname: 'vendor:js',
    src: [
      path.join(MODULE_DIR, 'jquery/dist/jquery.min.js'),
      path.join(MODULE_DIR, 'jq-console/jqconsole.min.js')
    ],
    output: 'vendor.min.js',
    dest: {
      build: path.join(BUILD_DIR, ASSETS_DIR, 'scripts')
    }
  },
  css: {
    taskname: 'vendor:css',
    src: [
      path.join(MODULE_DIR, 'icono/dist/icono.min.css')
    ],
    output: 'vendor.min.css',
    dest: {
      build: path.join(BUILD_DIR, ASSETS_DIR, 'styles')
    }
  }
}

config.clean = {
  taskname: 'clean',
  target: BUILD_DIR
};

config.server = {
  taskname: 'server',
  root: BUILD_DIR,
  port: 3002
};

config.browsersync = {
  taskname: 'browsersync',
  browserport: 3000,
  uiport: 3001
};

config.watch = {
  taskname: 'watch',
  watcher : [
    {
      task: config.copyIndex.taskname,
      src: config.copyIndex.src
    },
    {
      task: config.images.taskname,
      src: config.images.src
    },
    {
      task: config.scripts.taskname,
      src: config.scripts.src
    },
    {
      task: config.styles.taskname,
      src: config.styles.all
    }
  ]
};

config.development = {
  taskname: 'dev'
};

config.production = {
  taskname: 'prod'
};

config.copyfiles = {
  taskname: 'copyfiles',
  src: [
    path.join(ROOT, 'CNAME'),
    path.join(CLIENT_DIR, 'fb-close.html'),
    path.join(CLIENT_DIR, '2012.html'),
    path.join(CLIENT_DIR, 'sponsor.html')
  ],
   dest: {
    build: path.join(BUILD_DIR)
  }
};

config.ghpages = {
  taskname: 'ghpages',
  src: path.join(BUILD_DIR, '**/*')
};

config.release = {
  taskname: 'release',
};

config.banner =  '/*!\n' +
    ' * ' + pkg.name.replace('-', ' ') + ' v' + pkg.version + ' - ' + pkg.homepage + '\n' +
    ' * Copyright ' + CURRENT_YEAR + ' playnodeconf and other ' + pkg.name + ' contributors\n' +
    ' * LICENSE under ' + pkg.license + '\n' +
    ' */\n';

module.exports = config;
