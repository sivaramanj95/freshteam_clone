import Controller from '@ember/controller';
import {inject as service} from '@ember/service';
import {computed} from '@ember/object';
export default Controller.extend({
  sortBy: 'first_name',
  sortOrder: 'asc',
  store: service,
  searchKeyWord: '',
  userModel: computed('sortBy', 'searchKeyWord', function () {
    let keyWord = this.get('searchKeyWord')
    if(keyWord != '') {
      let result = this.store.peekAll('user').filter(function(i) {
        return i.name.toLowerCase().indexOf(keyWord.toLowerCase()) > -1;
      })
      return result.sortBy(this.get('sortBy'));
    }
    else {
      return this.store.peekAll('user').sortBy(this.get('sortBy'));
    }
    
  }),

  actions: {
    searchByName(param) {
      this.set('searchKeyWord', param)
    },
    setSortBy(sort_by) {
      this.set('sortBy', sort_by)
    },
    setSortOrder(sortOrder) {
      this.set('sortOrder', sortOrder)
      console.log(this.get('sortOrder'))
    }
  }
});
