import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {name: 'Tacos', isAvailable: false},
      {name: 'Salad', isAvailable: true},
      {name: 'Pizza', isAvailable: false},
    ]
  }
  
});
