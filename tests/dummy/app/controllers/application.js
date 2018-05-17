import Controller from '@ember/controller';

const users = [
  { name: 'John Connor', age: 20 },
  { name: 'Joe Hardy', age: 43 },
  { name: 'Meg Lipmsy', age: 35 },
  { name: 'Miguel Camba', age: 29 },
  { name: 'Chefa Neo', age: 29 },
  { name: 'Mary Pipper', age: 100 },
  { name: 'Other guy', age: 33 },
];

const numbers = [
  'one',
  'two',
  'three',
  'four'
];

export default Controller.extend({
  users: users,
  numbers: numbers,
});
