var Backbone = require('backbone');

//need help with adding athlete data to database: Name, Team, Age not showing yet(code below)


var Athlete = Backbone.Model.extend({
  idAttribute: 'objectId',
  urlRoot: 'http://kmcakes.herokuapp.com/classes/athletes',
});

var AthleteCollection = Backbone.Collection.extend({
  model: Athlete,
  urlRoot: 'http://kmcakes.herokuapp.com/classes/athletes',
  parse: function(serverResponse){
   return serverResponse.results;
 }

});


module.exports = {
'Athlete' : Athlete,
'AthleteCollection' : AthleteCollection

};
