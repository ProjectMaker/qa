import Ember from 'ember';
import { inject } from '@ember/service';

import { roles } from 'qa/constants/organization';

export default Ember.Component.extend({
  organizationManager: inject(),
  roles,
  didReceiveAttrs() {
    this._super(...arguments);
  },
  actions: {
    changeRole(role) {
      this.get('organizationManager').set('role', role);
    }
  }
});
