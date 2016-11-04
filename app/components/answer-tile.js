import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    likeAnswer(answer) {
      this.sendAction('likeAnswer', answer);
    },
    dislikeAnswer(answer) {
      this.sendAction('dislikeAnswer', answer);
    }
  }
});
