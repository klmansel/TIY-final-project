var Backbone = require('backbone');

var User = Backbone.Model.extend({
  urlRoot: 'http://kmcakes.herokuapp.com/users',
},{
  login: function(username, password, callbacks){
    var loggedInUser = new User();
    var queryString = jQuery.param({'username': username, 'password': password});


    loggedInUser.urlRoot = 'http://kmcakes.herokuapp.com/login?' + queryString;

    loggedInUser.fetch().done(function(data){
      localStorage.setItem('user', JSON.stringify(loggedInUser.toJSON()));

      jQuery.ajaxSetup({
        beforeSend: function(xhr){
          xhr.setRequestHeader("X-Parse-Application-Id", "kmcakes");
          xhr.setRequestHeader("X-Parse-REST-API-Key", "greenvillejets");
          xhr.setRequestHeader("X-Parse-Session-Token", data.sessionToken);
          }
        });


      callbacks.success(loggedInUser);


    }).fail(function(error){
      callbacks.error(loggedInUser, error);


    });

  }

});


module.exports = {
  'User' : User
};
