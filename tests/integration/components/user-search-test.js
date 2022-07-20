import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { resolve } from 'rsvp';

module('Integration | Component | user-search', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders search input', async function(assert) {
    this.set('searchByName', () => resolve({}));
    await render(hbs`{{user-search filter=(action searchByName)}}`);
    assert.dom('.user-search-cont').exists();
  });
});
