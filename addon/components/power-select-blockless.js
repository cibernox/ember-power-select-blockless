import Ember from 'ember';
import layout from '../templates/components/power-select-blockless';
import { defaultOptions } from 'ember-power-select/components/power-select';

const { computed } = Ember;

export default Ember.Component.extend(defaultOptions, {
  layout: layout,

  // CPs
  searchField: computed('labelPath', function() {
    return this.get('labelPath') || defaultOptions.searchField;
  })
});
