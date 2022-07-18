import Controller from '@ember/controller';
import user from '../../models/user';

export default Controller.extend({
  actions: {
    async searchByName(param) {
      if(param != '') {
        let users = await this.store.findAll('user');
        let result = users.filter(function(i) {
          return i.name.toLowerCase().indexOf(param.toLowerCase()) > -1;
        })
        return result;
      }
      else {
        return this.store.findAll('user');
      }
    },
    async sortUser(sort_by) {
      let users = await this.store.findAll('user');
      return users.sortBy(sort_by);
    }
  }
});
