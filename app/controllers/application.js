import Ember from 'ember';

export default Ember.Controller.extend({
  
  restaurant: {name: 'My awesome restaurant', yearsOpen: 1},

  actions: {
    makeAvailable(food){
      Ember.set(food, 'isAvailable', true)
    },
    makeUnavailable(food){
      Ember.set(food, 'isAvailable', false)
    }
  }

});
