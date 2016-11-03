import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    saveAnswer() {
     var params = {
       user: this.get('user'),
       reply: this.get('reply'),
       question: this.get('question'),
       like: this.set('like', 0),
       dislike: this.set('dislike', 0)
     };
     this.set('addNewAnswer', false);
     this.sendAction('saveAnswer', params);
   }
  }
});
