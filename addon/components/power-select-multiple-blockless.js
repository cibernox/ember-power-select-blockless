import Ember from 'ember';
import layout from '../templates/components/power-select-multiple-blockless';

const { computed } = Ember;

export default Ember.Component.extend({
  layout: layout,

  // CPs
  searchField: computed('labelPath', function() {
    return this.get('labelPath');
  })
});
