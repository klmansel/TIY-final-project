var Backbone = require('backbone');

var Results = Backbone.Model.extend({
  idAttribute: 'objectId',
  urlRoot: 'http://kmcakes.herokuapp.com/classes/results'
});

var ResultsCollection = Backbone.Collection.extend({
  model: Results,
  urlRoot: 'http://kmcakes.herokuapp.com/classes/results',
  parse: function(serverResponse){
   return serverResponse.results;
 }

});

module.exports = {
  'Results' : Results,
  'ResultsCollection' : ResultsCollection
};
