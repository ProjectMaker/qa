import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';


module('Integration | Component | x-button', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    console.log('beforeEach button')
  });

  test('should', async function(assert) {
    assert.expect(2);
    this.set('onTestClick', (result) => {
      assert.ok(true, 'trigger onClick action');
    })
    await render(hbs`{{x-button onClick=(action onTestClick) disabled=false label='owner'}}`);
    assert.equal(this.element.querySelector('[data-test-x-button]').textContent, 'owner', 'be rendered with this label');
    await click('[data-test-x-button]');
  })
})