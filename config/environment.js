'use strict';

module.exports = function(/* environment, appConfig */) {
  return {
    contentSecurityPolicy: {
      /* jshint ignore: start */
      'style-src': "'self' 'unsafe-inline'"
      /* jshint ignore: end */
    },
    modulePrefix: 'ui-common'
  };
};
