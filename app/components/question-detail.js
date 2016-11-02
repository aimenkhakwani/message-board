import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    likeAnswer(answer, params){
      Object.keys(params).forEach(function(key) {
        if(params[key]!== undefined) {
          answer.incrementProperty('like',1);
        }
      });
      answer.save();
      this.transitionTo('question', question);
    }
  }
});
