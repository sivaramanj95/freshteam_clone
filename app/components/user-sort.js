import Component from '@ember/component';

export default Component.extend({
  init() {
    this._super(...arguments);
    this.set('sort_by', 'first_name');
    this.sortUser('first_name').then((results) => this.set('results', results));
  },
  actions: {
    sortUser: async () => {
      this.sortUser('first_name').then((results) => this.set('results', results));
    }
  }
});
