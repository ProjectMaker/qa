import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

import { roles } from 'qa/constants/organization'

module('Unit | Component | role-list', function(hooks) {
  setupTest(hooks);

  test('change role should be', function (assert) {
    assert.expect(4);

    let orga = this.owner.lookup('service:organization-manager');
    let Factory = this.owner.factoryFor('component:role-list');
    let controller = Factory.create({ organizationManager: orga });

    controller.send('changeRole', 'owner')
    assert.ok(orga.get('isOwner'), 'Owner');

    controller.send('changeRole', 'admin')
    assert.ok(orga.get('isAdmin'), 'Admin');

    controller.send('changeRole', 'reporting')
    assert.ok(orga.get('isReporting'), 'Reporting');

    controller.send('changeRole', 'employee')
    assert.ok(orga.get('isEmployee'), 'Employee');
  });
});