import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

  this.route('track', function() {
    this.route('edit');
    this.route('position');
  });

});

export default Router;
