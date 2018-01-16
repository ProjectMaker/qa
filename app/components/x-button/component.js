import Ember from 'ember';

export default Ember.Component.extend({
  label: '',
  disabled: true,
  didReceiveAttrs() {
    this._super(...arguments);
  },

  actions: {
    handleClickButton() {
      this.get('onClick')('')
    }
  }
});
