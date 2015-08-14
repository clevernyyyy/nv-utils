import Ember from 'ember'; 
import layout from '../templates/components/nv-button'; 

/** 
  Renders a button that on pressed, fires an action (if one is specified). 
  This component doesn't expects values: name and value

  ```handlebars 
  {{nv-button name="someName" value="someValue"}} 
  ``` 

  To get the intended benefit, you should instead specify an action along with 
  a name and value: 

  ```handlebars 
  {{nv-button action="awesomeAction" name="someName" value="someValue"}} 
  ```
  Note:  Testing the action is done in the console on the UI Dummy Page.

  ## Customizing the button. 

  ### Custom colors?

  ### Custom sizes?

  ### Custom `classnames`. 

  You can specify a space-separated string of class names that are applied 
  to the element: 

  ```handlebars 
  {{nv-button classes="fancyButton"}} 
  ``` 

  @extends Ember.Component 
*/ 

export default Ember.Component.extend({ 
  layout: layout, 

  /** 
  A space-separated string of class names applied to the element. 
  @public 
  @property classes 
  @type String 
  @default null 
  */ 
  classes: null, 

  /** The value to use as the view's name attribute. 
  @public
  @property name 
  @type String 
  @default null 
  */ 
  name: null, 

  /** 
  The view into which this component is rendered. 
  @private 
  @property tagName 
  @type String 
  */ 
  tagName: 'input', 

  /** The attributes added to the element. 
  @private 
  @property attributeBindings 
  @type Array 
  */ 
  attributeBindings: [ 
    'id',  
    'nameAttr:name', 
    'type', 
    'value' 
  ], 

  /** A list of values that map to same name properties which each emit classes that are applied on the element. 
  @private 
  @property classNameBindings 
  @type Array 
  */ 
  classNameBindings: ['customClasses'], 

  /** Calculates the value to use for the class attribute. 
  @private 
  @method customClasses 
  */ 
  customClasses: Ember.computed(function() { 
    return this.get('classes'); 
  }), 

  /** Calculates the value to use for the name attribute. 
  @private 
  @method nameAttr 
  */ 
  nameAttr: Ember.computed('name', function() { 
    return this.get('name') || ''; 
  }), 

  /** The value to use for the type attribute. 
  @private 
  @property type 
  @type String 
  */ 
  type: 'button', 

  /** The handler for the click event fired when pressing the button. 
  @private 
  @method click 
  */ 
  click: function() { 
    this.sendAction('action', {
      name: this.get('name'), 
      value: this.get('value') 
    }); 
  } 
});