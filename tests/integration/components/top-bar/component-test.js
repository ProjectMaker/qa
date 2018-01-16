import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

import { roles } from 'qa/constants/organization'

module('Integration | Component | top-bar', function(hooks) {
  setupRenderingTest(hooks);

  test(`should be rendered with its role label name`, async function(assert) {
    this.set('roleStub', '');
    await render(hbs`{{top-bar role=roleStub}}`);
    assert.equal(this.element.querySelector('[data-test-top-bar-role-label]').textContent, '', 'empty')
    roles.forEach((role) => {
      this.set('roleStub', role);
      assert.equal(this.element.querySelector('[data-test-top-bar-role-label]').textContent, role, role)
    })

  })
})