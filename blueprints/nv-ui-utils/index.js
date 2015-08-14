/* jshint node: true */
'use strict';

module.exports = {
  normalizeEntityName: function() {
    // This override is needed to prevent the command 'ember g nv-ui-utils' from
    // throwing an error.  The CLI normally expects the format
    // 'ember g <entityName> <blueprint>'.
  },

  afterInstall: function() {
    var _this = this;
  
    // return this.addBowerPackageToProject('https://github.gallup.com/UX/gel-gss.git#0.8.0')
    //   .then(function () {
    //     return _this.addBowerPackageToProject('moment');
    //   })
    //   .then(function () {
    //     return _this.addBowerPackageToProject('modernizr');
    //   })
    //   .then(function () {
    //     return _this.addBowerPackageToProject('d3');
    //   });
  }
};
