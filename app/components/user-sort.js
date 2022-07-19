import Component from '@ember/component';

export default Component.extend({
  init() {
    this._super(...arguments);
  },
  actions: {
    setSortBy(sort_by) {
      this.sortAction(sort_by)
    },
    setSortOrder(order) {
      this.sortOrder(order)
    }
  }
});
