import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('total-num-widget', 'Integration | Component | total num widget', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{total-num-widget}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#total-num-widget}}
      template block text
    {{/total-num-widget}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
