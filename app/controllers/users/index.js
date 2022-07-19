import Controller from '@ember/controller';
import {inject as service} from '@ember/service';
import {computed} from '@ember/object';
export default Controller.extend({
  sortBy: 'first_name',
  sortOrder: 'asc',
  teamFilter: 'all',
  store: service,
  searchKeyWord: '',
  userModel: computed('sortBy', 'searchKeyWord', 'teamFilter', function () {
    let keyWord = this.get('searchKeyWord')
    let teamFilter = this.get('teamFilter')
    console.log(teamFilter)
    let result = this.store.peekAll('user');
    if (keyWord != '') {
      result = result.filter(function(i) {
        return i.name.toLowerCase().indexOf(keyWord.toLowerCase()) > -1;
      })
    }
    if (teamFilter !== 'all') {
      result = result.filter(function(i) {
        return i.team === teamFilter
      })
    }
    return result.sortBy(this.get('sortBy'));;
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
    },
    setTeamFilter(team) {
      this.set('teamFilter', team)
    }
  }
});
