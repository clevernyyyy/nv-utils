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
  }
};
