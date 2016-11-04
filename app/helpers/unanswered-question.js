import Ember from 'ember';

export function unansweredQuestion(params) {
  var question = params[0];
  if(question.get('answers').get('length') === 0) {
    return Ember.String.htmlSafe('<i class="fa fa-question" aria-hidden="true"></i>');
  }
}

export default Ember.Helper.helper(unansweredQuestion);
