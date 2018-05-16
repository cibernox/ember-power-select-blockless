import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/power-select-multiple-blockless';

export default Component.extend({
  layout: layout,

  // CPs
  searchField: computed('labelPath', function() {
    return this.get('labelPath');
  })
});
