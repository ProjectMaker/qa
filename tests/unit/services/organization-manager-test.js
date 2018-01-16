import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | Organization Manager', function(hooks) {
  setupTest(hooks);

  test('should have the role', function (assert) {
    assert.expect(5);

    let subject = this.owner.lookup('service:organization-manager');
    assert.ok(subject.get('isAdmin'), 'Admin by default');

    subject.set('role', 'admin');
    assert.ok(subject.get('isAdmin'), 'Admin');

    subject.set('role', 'owner');
    assert.ok(subject.get('isOwner'), 'Owner');

    subject.set('role', 'reporting');
    assert.ok(subject.get('isReporting'), 'Reporting');

    subject.set('role', 'employee');
    assert.ok(subject.get('isEmployee'), 'Employee');
  });
});