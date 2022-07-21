import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { resolve } from 'rsvp';

module('Integration | Component | user-sort', function(hooks) {
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
    this.sortBy = ''
  });
  test('it renders sort filter', async function(assert) {
    this.set('setSortBy', () => resolve({}));
    await render(hbs`{{user-sort sortAction=(action setSortBy)}}`);
    assert.dom('.user-sort-filter-cont').exists();
  });
  test('it renders sort filter options', async function(assert) {
    this.set('setSortBy', () => resolve({}));
    await render(hbs`{{user-sort sortAction=(action setSortBy)}}`);
    await click('.user-sort-filter-cont .sortby-dropdown .sortby-dropdown-toggle');
    assert.dom('.user-sort-filter-cont .sortby-dropdown .dropdown-menu a').exists({ count: 3 }, 'It renders all the sort by option');
  });
  test('it renders sort by firstname', async function(assert) {
    this.set('setSortBy', (sort_by) => {this.set('sortBy', sort_by);});
    await render(hbs`{{user-sort sortAction=(action setSortBy)}}`);
    await click('.user-sort-filter-cont .sortby-dropdown .sortby-dropdown-toggle');
    await click('.user-sort-filter-cont .sortby-dropdown .dropdown-menu .first-name');
    assert.equal(this.sortBy, 'first_name')
  });
  test('it renders sort by lastname', async function(assert) {
    this.set('setSortBy', (sort_by) => {this.set('sortBy', sort_by);});
    await render(hbs`{{user-sort sortAction=(action setSortBy)}}`);
    await click('.user-sort-filter-cont .sortby-dropdown .sortby-dropdown-toggle');
    await click('.user-sort-filter-cont .sortby-dropdown .dropdown-menu .last-name');
    assert.equal(this.sortBy, 'last_name')
  });
  test('it renders sort by joining date', async function(assert) {
    this.set('setSortBy', (sort_by) => {this.set('sortBy', sort_by);});
    await render(hbs`{{user-sort sortAction=(action setSortBy)}}`);
    await click('.user-sort-filter-cont .sortby-dropdown .sortby-dropdown-toggle');
    await click('.user-sort-filter-cont .sortby-dropdown .dropdown-menu .joining-date');
    assert.equal(this.sortBy, 'joining_date')
  });
});
