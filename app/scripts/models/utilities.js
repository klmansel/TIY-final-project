var Backbone = require('backbone');

var PointerFieldModel = Backbone.Model.extend({
  setPointer: function(field, obj, className){
    console.log(obj);
    var objectId = typeof obj === 'string' ? obj : obj.objectId;
    this.set(field, {'__type': 'Pointer', 'className': className, 'objectId': objectId});
  }
});

module.exports = PointerFieldModel;
