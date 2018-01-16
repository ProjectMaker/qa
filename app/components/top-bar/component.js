import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
  organizationManager: inject(),
  actions: {
    sendMessage() {
      console.log('sendMessage');
      return "sendMessage";
    }
  }
});
