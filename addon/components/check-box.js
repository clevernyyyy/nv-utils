import Ember from 'ember'; 
import layout from '../templates/components/check-box'; 

/** 
  Renders a checkbox that on change, fires an action (if one is specified). 
  This component doesn't impose and hence doesn't expect any values however, 
  rendering as such is quite fruitless: 

  ```handlebars 
  {{check-box}} 
  ``` 

  To get the intended benefit, you should instead specify an action along with 
  a name and value: 

  ```handlebars 
  {{check-box action="awesomeAction" name="someName" value="someValue"}} 
  ``` 

  When the checkbox's `checked` attribute changes, the action handler can expect an object containing the following properties:

  - `checked` true/false 
  - `name` the name attribute 
  - `value` the value attribute 

  ## Customizing the checkbox. 

  ### Default `checked` value 

  You can specify the default checked state by providing a `checked` value: 

  ```handlebars 
  {{check-box checked=true}} 
  ``` 

  ### Custom `classnames`. 

  You can specify a space-separated string of class names that are applied 
  to the element: 

  ```handlebars 
  {{check-box classes="fancyCheckbox"}} 
  ``` 

  @extends Ember.Component 
*/ 

export default Ember.Component.extend({ 
  layout: layout, 

  /** 
  Whether the checkbox is checked. 

  @public 
  @property checked 
  @type Boolean 
  @default false 
  */ 
  checked: false, 

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
    'checkedAttr:checked', 
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

  /** Calculates the value to use for the name attribute. 
  @private 
  @method nameAttr 
  */ 
  checkedAttr: Ember.computed('checked', function() { 
    return !!this.get('checked'); 
  }), 

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
  type: 'checkbox', 

  /** Update component state after initial render. May potentially cause a re-render though it should be fast. 
  @private 
  @method 
  */ 
  didRender() { 
    Ember.run.scheduleOnce('afterRender', this, 'updateCheckedValue'); 
  }, 

  /** Maintains the checked state. 
  @private 
  @method updateCheckedValue 
  */ 
  updateCheckedValue() { 
    this.set('checked', this.$().prop('checked')); 
  }, 

  /** The handler for the change event fired when toggling the checkbox. 
  @private 
  @method change 
  */ 
  change: function() { 
    // Always update so we don't have to inspect the event object. 
    this.updateCheckedValue(); 

    this.sendAction('action', { 
      checked: this.get('checked'), 
      name: this.get('name'), 
      value: this.get('value') 
    }); 
  } 
});