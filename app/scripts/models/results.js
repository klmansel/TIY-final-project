var Backbone = require('backbone');
var PointerFieldModel = require('./utilities.js');

var Results = PointerFieldModel.extend({
  idAttribute: 'objectId',
  urlRoot: 'https://kmcakes.herokuapp.com/classes/results'
});

var ResultsCollection = Backbone.Collection.extend({
  model: Results,
  parse: function(serverResponse){
   return serverResponse.results;
 },
 url: function(){
   var url = 'https://kmcakes.herokuapp.com/classes/results';

   if(this.whereClause){
     url += this.whereClause;
   }

   return url;
 },
 query: function(objectId){
   this.whereClause = '?where={"athlete": {"__type": "Pointer", "className": "athletes", "objectId": "' + objectId + '"}}';
   return this;
 }
});

module.exports = {
  'Results' : Results,
  'ResultsCollection' : ResultsCollection
};
