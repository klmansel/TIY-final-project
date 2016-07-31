var Backbone = require('backbone');
var PointerFieldModel = require('./utilities.js');


var Athlete = PointerFieldModel.extend({
  idAttribute: 'objectId',
  urlRoot: 'https://kmcakes.herokuapp.com/classes/athletes',
});

var AthleteCollection = Backbone.Collection.extend({
  model: Athlete,
  url: 'https://kmcakes.herokuapp.com/classes/athletes',
  parse: function(serverResponse){
   return serverResponse.results;
 }

});


module.exports = {
'Athlete' : Athlete,
'AthleteCollection' : AthleteCollection

};
