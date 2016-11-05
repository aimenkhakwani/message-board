import Ember from 'ember';

export default Ember.Service.extend({
  questions: [],

  flag(question) {
    if(this.get('questions').includes(question)) {
      alert("You have already flagged this question");
    } else {
      this.get('questions').pushObject(question);
    }
  },
  remove(question) {
    this.get('questions').removeObject(question);
  }
});
