import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | user-listing', function(hooks) {
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
  });

  test('should display all users', async function(assert) {
    await render(hbs`{{user-listing user=user}}`);
    assert.equal(this.element.querySelector('.user-image-container .user-image-circle').src, this.user.image_url);
    assert.equal(this.element.querySelector('.card .user_name').innerHTML, this.user.name);
    assert.equal(this.element.querySelector('.card .user_email').innerHTML, this.user.email);
  });
});
