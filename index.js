/* jshint node: true */
'use strict';

var mergeTrees = require('broccoli-merge-trees');
var pickFiles = require('broccoli-static-compiler');

module.exports = {
  name: 'nv-ui-utils',
  
  included: function(app) {
    if (app.env === 'development') {
      app.import('bower_components/d3/d3.js');
      // app.import('bower_components/gel-gss/dist/css/gss.css');
      // app.import('bower_components/gel-gss/dist/js/bootstrap.js');
      app.import('bower_components/moment/moment.js');
      app.import('bower_components/modernizr/modernizr.js');
      app.import('bower_components/moment/moment.js');
    } else if (app.env === 'production' || app.env === 'hosted-widget') {
      // gss.css, bootstrap.js, and modernizr.js are provided by the PC.
      app.import('bower_components/d3/d3.min.js');
      app.import('bower_components/moment/min/moment.min.js');
    }
  },

  // postprocessTree: function(type, tree) {
  //   if (this.app.env === 'development') {
  //     return mergeTrees([
  //       tree,
  //       pickFiles('bower_components/gel-gss/dist/fonts', {
  //         srcDir: '/',
  //         files: [
  //           'gel-icons-2.2.2.eot',
  //           'gel-icons-2.2.2.woff'
  //         ],
  //         destDir: '/fonts'
  //       })
  //     ], {
  //       overwrite: true
  //     });
  //   } else {
  //     return tree;
  //   }
  // }
};
