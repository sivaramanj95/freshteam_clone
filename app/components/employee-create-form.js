import Component from '@ember/component';
import {inject as service} from '@ember/service';

export default Component.extend({
  router: service(),
  store: service(),
  teamOptions: [{name: 'Freshteam'}, {name: 'Sales'}, {name: 'Business'}],
  actions: {
    setselectedTeam(filter) {
      this.set('selectedTeam', filter);
    },
    close() {
      this.router.transitionTo('/')
    },
    submitForm(){
      let first_name = this.get('first_name')
      let last_name = this.get('last_name')
      let email = this.get('email')
      let joining_date = this.get('myDate')
      let team = this.get('selectedTeam').name
      let new_user = {
        first_name: first_name,
        last_name: last_name,
        email: email,
        joiningDate: joining_date,
        team: team
      }
      let userRecord = this.store.createRecord('user', new_user);
      userRecord.save().then((res) => {
        return this.router.transitionTo('/');
      });
     
    }
  }
});
