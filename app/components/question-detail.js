import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['like:desc'],
  sortedAnswers: Ember.computed.sort('question.answers', 'sortBy'),
  actions: {
    likeAnswer(answer){
      answer.incrementProperty('like',1);
      answer.save();
    },
    dislikeAnswer(answer){
      answer.incrementProperty('dislike',1);
      answer.save();
    },
    saveAnswer(params) {
      this.sendAction('saveAnswer', params);
    }
  }
});
