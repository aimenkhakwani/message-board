import Ember from 'ember';

export default Ember.Component.extend({
  flagQuestions: Ember.inject.service(),
  actions: {
    remove(question) {
      this.get('flagQuestions').remove(question);
    }
  }
});
