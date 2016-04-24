import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { clickTrigger } from '../../helpers/ember-power-select';

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

function typeInSearch(text) {
  $('.ember-power-select-search input, .ember-power-select-trigger-multiple-input').val(text);
  $('.ember-power-select-search input, .ember-power-select-trigger-multiple-input').trigger('input');
}

moduleForComponent('power-select-blockless', 'Integration | Component | power select blockless', {
  integration: true
});

// Rendering

test('Renders the property in the given path on each option and the trigger when options are objects', function(assert) {
  assert.expect(3);

  this.users = users;
  this.user = users[1];
  this.render(hbs`{{power-select-blockless options=users labelPath="name" selected=user onchange=(action (mut user))}}`);

  assert.equal(this.$().text().trim(), 'Joe Hardy');
  clickTrigger();
  assert.equal($('.ember-power-select-option').length, users.length);
  assert.equal($('.ember-power-select-option:eq(4)').text().trim(), 'Chefa Neo');
});

test('Renders each string in the list without needing any labelPath and the trigger when options are strings', function(assert) {
  assert.expect(3);

  this.names = names;
  this.name = names[1];
  this.render(hbs`{{power-select-blockless options=names selected=name onchange=(action (mut name))}}`);

  assert.equal(this.$().text().trim(), 'Joe Hardy');
  clickTrigger();
  assert.equal($('.ember-power-select-option').length, names.length);
  assert.equal($('.ember-power-select-option:eq(4)').text().trim(), 'Chefa Neo');
});


// Filtering

test('Filters using the label path by default', function(assert) {
  assert.expect(3);

  this.users = users;
  this.user = users[1];
  this.render(hbs`{{power-select-blockless options=users labelPath="name" selected=user onchange=(action (mut user))}}`);

  assert.equal(this.$().text().trim(), 'Joe Hardy');
  clickTrigger();
  Ember.run(() => typeInSearch('lip'));
  assert.equal($('.ember-power-select-option').length, 1);
  assert.equal($('.ember-power-select-option:eq(0)').text().trim(), 'Meg Lipmsy');
});

test('Filters using the string itself then the options are strings', function(assert) {
  assert.expect(3);

  this.names = names;
  this.name = names[1];
  this.render(hbs`{{power-select-blockless options=names selected=name onchange=(action (mut name))}}`);

  assert.equal(this.$().text().trim(), 'Joe Hardy');
  clickTrigger();
  Ember.run(() => typeInSearch('lip'));
  assert.equal($('.ember-power-select-option').length, 1);
  assert.equal($('.ember-power-select-option:eq(0)').text().trim(), 'Meg Lipmsy');
});

