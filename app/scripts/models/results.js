var Backbone = require('backbone');

var PointerFieldModel = Backbone.Model.extend({
setPointer: function(field, obj, className){
  this.set(field, {'__type': 'Pointer', 'className': className, 'objectId': obj.objectId});
  }
});

var Results = PointerFieldModel.extend({
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
