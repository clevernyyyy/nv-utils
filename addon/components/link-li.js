import Ember from 'ember';
import layout from '../templates/components/link-li';

/**
 To use this component in a template, do the following:

 ```handlebars
 {{#link-li classes="my-class"}}
   {{link-to "Edit Track" "track.edit"}}
 {{/link-li}}}}
 ```

 @extends Ember.Component
*/
export default Ember.Component.extend({
  layout: layout,

  /**
   The element into which this view is rendered.

   @private
   @property tagName
   @type String
   */
  tagName: 'li',

  /**
   A space-separated string classes applied to the element.

   @public
   @property classes
   @type String
   */
  classes: null,

  /**
   The ARIA role applied to the component's DOM element.

   @public
   @property role
   @type String
   */
  role: null,

  /**
   Determines whether the active class name is applied to the component element.

   @private
   @property active
   @type method
   */
  active: Ember.computed('childViews.@each.active', function() {
    return this.get('childViews').anyBy('active');
  }),

  /**
   The list of attributes bound to the component's DOM element.

   @private
   @property attributeBindings
   @type Array
   */
  attributeBindings: ['customRole:role'],

  /**
   Calculates the role attribute value applied to the DOM element.

   @private
   @property customRole
   @type method
   */
  customRole: Ember.computed(function() {
    return this.get('role');
  }),

  /**
   A list of values that map to same name properties which each emit classes
   that are applied on the component element.

   @private
   @property classNameBindings
   @type Array
   */
  classNameBindings: ['active', 'customClasses'],

  /**
   Calculates the class attribute value applied to the DOM element.

   @private
   @property customClasses
   @type method
   */
  customClasses: Ember.computed(function() {
    return this.get('classes');
  })
});