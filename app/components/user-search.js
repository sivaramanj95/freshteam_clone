import Component from '@ember/component';

export default Component.extend({
  classNames: ['user-search'],
  value: '',

  init() {
    this._super(...arguments);
    this.filter('');
  },

  actions: {
    handleUserEntry() {
      let filterInputValue = this.value;
      let searchAction = this.filter;
      searchAction(filterInputValue);
    }
  }

});


