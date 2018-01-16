import Service from '@ember/service';
import { computed } from '@ember/object';

export default Service.extend({
  role: 'admin',
  isOwner: computed('role', function() {
    return this.get('role' )=== 'owner';
  }),
  isAdmin: computed('role', function() {
    return this.get('role' )=== 'admin';
  }),
  isReporting: computed('role', function() {
    return this.get('role' )=== 'reporting';
  }),
  isEmployee: computed('role', function() {
    return this.get('role' )=== 'employee';
  })
});
