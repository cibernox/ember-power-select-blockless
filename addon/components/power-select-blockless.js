import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/power-select-blockless';

export default Component.extend({
  layout: layout,

  /**
   * @property powerSelectComponent
   * @type {String}
   */
  powerSelectComponent: 'power-select',

  // CPs
  searchField: computed('labelPath', function() {
    return this.get('labelPath');
  })
});
