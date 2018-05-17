import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn, find, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { clickTrigger } from 'ember-power-select/test-support/helpers'

const users = [
  { name: 'John Connor', age: 20 },
  { name: 'Joe Hardy', age: 43 },
  { name: 'Meg Lipmsy', age: 35 },
  { name: 'Miguel Camba', age: 29 },
  { name: 'Chefa Neo', age: 29 },
  { name: 'Mary Pipper', age: 100 },
  { name: 'Other guy', age: 33 },
];

const names = users.map(u => u.name);

// Rendering

module('Integration | Component | power select blockless', function(hooks) {
  setupRenderingTest(hooks);

  test('Renders the property in the given path on each option and the trigger when options are objects', async function(assert) {
    assert.expect(3);

    this.users = users;
    this.user = users[1];
    await render(hbs`{{power-select-blockless options=users labelPath="name" selected=user onchange=(action (mut user))}}`);

    assert.equal(this.$().text().trim(), 'Joe Hardy');
    await clickTrigger();
    assert.equal(findAll('.ember-power-select-option').length, users.length);
    assert.equal(findAll('.ember-power-select-option')[4].textContent.trim(), 'Chefa Neo');
  });

  test('Renders each string in the list without needing any labelPath and the trigger when options are strings', async function(assert) {
    assert.expect(3);

    this.names = names;
    this.name = names[1];
    await render(hbs`{{power-select-blockless options=names selected=name onchange=(action (mut name))}}`);

    assert.equal(this.$().text().trim(), 'Joe Hardy');
    await clickTrigger();
    assert.equal(findAll('.ember-power-select-option').length, names.length);
    assert.equal(findAll('.ember-power-select-option')[4].textContent.trim(), 'Chefa Neo');
  });


  // Filtering

  test('Filters using the label path by default', async function(assert) {
    assert.expect(3);

    this.users = users;
    this.user = users[1];
    await render(hbs`{{power-select-blockless options=users labelPath="name" selected=user onchange=(action (mut user))}}`);

    assert.equal(this.$().text().trim(), 'Joe Hardy');
    await clickTrigger();
    let el = find('.ember-power-select-search input, .ember-power-select-trigger-multiple-input');
    await fillIn(el, 'lip');
    assert.equal(findAll('.ember-power-select-option').length, 1);
    assert.equal(findAll('.ember-power-select-option')[0].textContent.trim(), 'Meg Lipmsy');
  });

  test('Filters using the string itself then the options are strings', async function(assert) {
    assert.expect(3);

    this.names = names;
    this.name = names[1];
    await render(hbs`{{power-select-blockless options=names selected=name onchange=(action (mut name))}}`);

    assert.equal(this.$().text().trim(), 'Joe Hardy');
    await clickTrigger();
    let el = find('.ember-power-select-search input, .ember-power-select-trigger-multiple-input');
    await fillIn(el, 'lip');
    assert.equal(findAll('.ember-power-select-option').length, 1);
    assert.equal(findAll('.ember-power-select-option')[0].textContent.trim(), 'Meg Lipmsy');
  });
});

