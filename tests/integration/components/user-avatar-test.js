import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | user-avatar', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.store = this.owner.lookup('service:store');
    this.user = this.store.createRecord('user', {
      first_name: 'Mathi',
      last_name: 'R',
      email: 'mathi.r@gmail.com',
      team: 'Sales',
      joiningDate: '2019-07-02',
      image_url: "https://images.unsplash.com/photo-1590086782957-93c06ef21604?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
    });
    this.user1 = this.store.createRecord('user', {
      first_name: 'Mathi',
      last_name: 'R',
      email: 'mathi.r@gmail.com',
      team: 'Sales',
      joiningDate: '2019-07-02',
    });
  });

  test('should display user avatar', async function(assert) {
    await render(hbs`{{user-avatar user=user}}`);
    assert.equal(this.element.querySelector('.user-image-container .user-image-circle').src, this.user.image_url);
  });
  test('should display user avatar with user name initials', async function(assert) {
    await render(hbs`{{user-avatar user=user1}}`);
    assert.equal(this.element.querySelector('.user-image-container .user-initial-image-circle .user-initial-image-text').innerHTML, this.user1.first_name[0]+this.user1.last_name[0]);
  });
});
