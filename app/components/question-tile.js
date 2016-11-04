import Ember from 'ember';

export default Ember.Component.extend({
  flagQuestions: Ember.inject.service(),
  actions: {
    flag(question) {
      console.log("im here");
      this.get('flagQuestions').flag(question);
    }
  }
});
