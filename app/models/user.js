import DS from 'ember-data';
import { computed } from '@ember/object';
export default DS.Model.extend({
  first_name: DS.attr('string'),
  last_name: DS.attr('string'),
  email: DS.attr('string'),
  team: DS.attr('string'),
  joiningDate: DS.attr('date'),
  image_url:DS.attr('string'),
  name: computed('first_name', 'last_name', function(){
    return [this.get('first_name'), this.get('last_name')].compact().join(' ');
  }),
  initials: computed('first_name', 'last_name', function(){
    return this.get('first_name').toUpperCase()[0] + this.get('last_name').toUpperCase()[0];
  }),
});