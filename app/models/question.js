import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  authorQ: DS.attr(),
  notes: DS.attr(),
  date: DS.attr('string'),
  answers: DS.hasMany('answer', {async: true }),

  flagQuestions: Ember.inject.service(),
  onTeam: Ember.computed('flagQuestions.questions.[]', function(){
    return this.get('flagQuestions.questions.[]').includes(this);
  })
});
