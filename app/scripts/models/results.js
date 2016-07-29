var Backbone = require('backbone');
var PointerFieldModel = require('./utilities.js');

var Results = PointerFieldModel.extend({
  idAttribute: 'objectId',
  urlRoot: 'http://kmcakes.herokuapp.com/classes/results'
});

var ResultsCollection = Backbone.Collection.extend({
  model: Results,
  url: 'http://kmcakes.herokuapp.com/classes/results',
  parse: function(serverResponse){
   return serverResponse.results;
 },

});

module.exports = {
  'Results' : Results,
  'ResultsCollection' : ResultsCollection
};
