var Backbone = require('backbone');

var File = Backbone.Model.extend({
  defaults: {

  },
  urlRoot: function(){
    return '/files/' + this.get('name');
  },
  save: function(){

  }


});

module.exports = File;

handleImageChange: function(e){
  var profilePic = e.target.files[0]
  var file = new File();
  file.set('name', profilePic.name);
  file.save().done(function(){
    self.setState({'picUrl': file.get('url')});
  });
}
