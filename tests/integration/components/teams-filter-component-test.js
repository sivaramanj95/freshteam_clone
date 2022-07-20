import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | teams-filter-component', function(hooks) {
  setupRenderingTest(hooks);
  hooks.beforeEach(function () {
    let store = this.owner.lookup('service:store');
    this.store = store;
    this.user = store.createRecord('user', {
      first_name: 'Mathi',
      last_name: 'R',
      email: 'mathi.r@gmail.com',
      team: 'Sales',
      joiningDate: '2019-07-02',
      image_url: "https://images.unsplash.com/photo-1590086782957-93c06ef21604?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
    });
    this.user1 = store.createRecord('user', {
      first_name: 'Siva',
      last_name: 'Raman',
      email: 'siva.r@gmail.com',
      team: 'Management',
      joiningDate: '2017-07-02',
    });
    this.teamFilter = ''
  });
  test('it renders team filter component', async function(assert) {
    this.set('setTeamFilter', (team) => {this.set('teamFilter', team)});
    await render(hbs`{{teams-filter-component filter=(action setTeamFilter)}}`);
    assert.dom('.team-filter-cont').exists();
  });
  test('it renders team filter component options', async function(assert) {
    this.set('setTeamFilter', (team) => {this.set('teamFilter', team)});
    await render(hbs`{{teams-filter-component filter=(action setTeamFilter)}}`);
    await click('.team-filter-cont .teams-filter-dropdown .teams-filter-toggle')
    assert.dom('.team-filter-cont .teams-filter-dropdown .dropdown-menu a').exists({ count: 3 }, 'It renders all the option');
    assert.dom('.team-filter-cont .teams-filter-dropdown .dropdown-menu a:nth-child(1)').hasText('All Employees')
    assert.dom('.team-filter-cont .teams-filter-dropdown .dropdown-menu .Sales').hasText('Sales')
    assert.dom('.team-filter-cont .teams-filter-dropdown .dropdown-menu .Management').hasText('Management')
  });
  test('filter by any one of the options', async function(assert) {
    this.set('setTeamFilter', (team) => {this.set('teamFilter', team)});
    await render(hbs`{{teams-filter-component filter=(action setTeamFilter)}}`);
    await click('.team-filter-cont .teams-filter-dropdown .teams-filter-toggle');
    await click('.team-filter-cont .teams-filter-dropdown .dropdown-menu .Sales');
    assert.equal(this.teamFilter, 'Sales');
  });
});
