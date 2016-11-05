import Ember from 'ember';

export default Ember.Component.extend({
  flagQuestions: Ember.inject.service(),
  actions: {
    flag(question) {
      this.get('flagQuestions').flag(question);
    },
    remove(question) {
      this.get('flagQuestions').remove(question);
    }
  }
});
