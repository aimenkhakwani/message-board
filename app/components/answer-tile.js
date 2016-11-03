import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    likeAnswer(answer) {
      var params = {
        like: this.incrementProperty('like', 1)
      };
      this.sendAction('likeAnswer', answer, params);
    },
    dislikeAnswer(answer) {
      var params = {
        dislike: this.incrementProperty('dislike', 1)
      };
      this.sendAction('dislikeAnswer', answer, params);
    }
  }
});
