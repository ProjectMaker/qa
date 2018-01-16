import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

import { roles } from 'qa/constants/organization'

module('Integration | Component | role-list', function(hooks) {
  setupRenderingTest(hooks);

  test(`Should have ${roles.length} roles`, async function(assert) {
    this.set('rolesStub', roles);
    await render(hbs`{{role-list roles=rolesStub}}`);
    assert.equal(this.element.querySelectorAll('[data-test-x-button]').length, roles.length)
  })
})