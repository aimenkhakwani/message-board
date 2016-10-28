import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  reply: DS.attr(),
  question: DS.belongsTo('question', {async: true})
});
