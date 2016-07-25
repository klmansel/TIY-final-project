var Backbone = require('backbone');

var PointerFieldModel = Backbone.Model.extend({
  setPointer: function(field, obj, className){
    this.set(field, {'__type': 'Pointer', 'className': className, 'objectId': obj.objectId});
  }
});

var Athlete = PointerFieldModel.extend({
  idAttribute: 'objectId',
  urlRoot: 'http://kmcakes.herokuapp.com/classes/athletes',
});

var athlete = new Athlete();
var coach = JSON.parse(localStorage.getItem('user'));
athlete.setPointer('coach', coach, '_User');



var AthleteCollection = Backbone.Collection.extend({
  model: Athlete,
  urlRoot: 'http://kmcakes.herokuapp.com/classes/NewClass',
  parse: function(serverResponse){
   return serverResponse.results;
 }

});


module.exports = {
'Athlete' : Athlete,
'AthleteCollection' : AthleteCollection

};
