import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    someAction: function(btn) {
      console.log('nv-button action fired: ', btn);
    }
  },
});




