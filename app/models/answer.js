import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  reply: DS.attr(),
  like: DS.attr('number'),
  dislike: DS.attr('number'),
  date: DS.attr('string'),
  question: DS.belongsTo('question', {async: true})
});
