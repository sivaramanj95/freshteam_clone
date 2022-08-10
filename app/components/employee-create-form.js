import Component from '@ember/component';
import {inject as service} from '@ember/service';

export default Component.extend({
  router: service(),
  store: service(),
  teamOptions: [{name: 'Freshteam', id: '1', displayName:''}, {name: 'Sales'}, {name: 'Business'}],
  selectedTeam: '',
  init() {
    this._super()
    this.set('selectedTeam', {name: this.get('user.team')})
  },
  actions: {
    setselectedTeam(filter) {
      this.set('selectedTeam', filter);
    },
    close() {
      this.router.transitionTo('/')
    },
    submitForm(){
      let team = this.get('selectedTeam').name
      let userRecord = this.get('user')
      this.set('user.team', team)
      userRecord.save().then((res) => {
        return this.router.transitionTo('/');
      });
    }
  }
});
