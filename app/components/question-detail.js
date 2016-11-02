import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    likeAnswer(answer, params){
      Object.keys(params).forEach(function(key) {
        if(params[key]!== undefined) {
          answer.set(key,params[key]);
        }
      });
      answer.save();
      this.transitionTo('question', question);
    }
  }
});
