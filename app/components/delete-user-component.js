import Component from '@ember/component';
import {inject as service} from '@ember/service';
export default Component.extend({
  router: service(),
  store: service(),
  actions: {
    userDelete(user) {
      user.destroyRecord().then(res => {
          this.router.transitionTo('/')
      });
    },
    close() {
      this.router.transitionTo('/')
    },
  }
});
