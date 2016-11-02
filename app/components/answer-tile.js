import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    likeAnswer(answer, question){
      var params = {
        user: this.get('user'),
        reply: this.get('reply'),
        like: this.incrementProperty('like', 1),
        question: this.get('question')
      };
      this.sendAction('likeAnswer', answer, params);
    }
  }
});
