var Backbone = require('backbone');
var PointerFieldModel = require('./utilities.js');



var Athlete = PointerFieldModel.extend({
  idAttribute: 'objectId',
  urlRoot: 'https://kmcakes.herokuapp.com/classes/athletes'
});

var AthleteCollection = Backbone.Collection.extend({
  model: Athlete,
  parse: function(serverResponse){
   return serverResponse.results;
 },
 url: function(){
   var url = 'https://kmcakes.herokuapp.com/classes/athletes';
   if(this.whereClause){
     url += this.whereClause;
   }

   return url;
 },
 query: function(queryObject){
   this.whereClause = '?where=' + JSON.stringify(queryObject);
   return this;
 }
});
// var athleteCollection = new AthleteCollection();
// athleteCollection.query({athlete: this.state.model.get('objectId')}).fetch();

module.exports = {
'Athlete' : Athlete,
'AthleteCollection' : AthleteCollection

};
