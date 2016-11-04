import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    likeAnswer(answer){
      answer.incrementProperty('like',1);
      answer.save();
    },
    dislikeAnswer(answer){
      answer.incrementProperty('dislike',1);
      answer.save();
    }
  }
});
