import Ember from 'ember';

export default Ember.Service.extend({
  questions: [],

  flag(question) {
    console.log("im here too");
    this.get('questions').pushObject(question);
  }
});
