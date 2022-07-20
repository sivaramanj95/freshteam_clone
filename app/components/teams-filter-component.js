import Component from '@ember/component';
import {
  computed
} from '@ember/object';
import { inject as service } from '@ember/service';
export default Component.extend({
  store: service(),
  teams: computed(function(){
    return [... new Set(this.store.peekAll('user').map(i => i.team))]
  }),
  actions: {
    filterByTeams(param) {
      this.filter(param)
    }
  }
});
