import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import Service from '@ember/service';

import { roles } from 'qa/constants/organization'

module('Integration | Component | top-bar', function(hooks) {
  setupRenderingTest(hooks);
  hooks.beforeEach(function() {
    this.service = this.owner.lookup('service:organization-manager');
  })
  test(`should be rendered with its role label name`, async function(assert) {
    this.set('roleStub', '');
    await render(hbs`{{top-bar}}`);

    //assert.equal(this.element.querySelector('[data-test-top-bar-role-label]').textContent, '', 'Empty')
    roles.forEach((role) => {
      this.set('service.role', role)
      console.log(this.service.get('role'))
      //this.service.set('role', role)
      assert.equal(this.element.querySelector('[data-test-top-bar-role-label]').textContent, role, role)
    })
  })
})