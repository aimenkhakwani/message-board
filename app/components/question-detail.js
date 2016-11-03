import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    likeAnswer(answer, params){
      answer.incrementProperty('like',1);
      answer.save();
    },
    dislikeAnswer(answer, params){
      console.log(params)
      answer.incrementProperty('dislike',1);
      answer.save();
    }
  }
});
