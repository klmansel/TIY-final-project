var Backbone = require('backbone');

var User = Backbone.Model.extend({
  urlRoot: 'https://kmcakes.herokuapp.com/users',
},{
  login: function(username, password, callbacks){
    var self = this;
    var loggedInUser = new User();
    var queryString = jQuery.param({'username': username, 'password': password});

    loggedInUser.urlRoot = 'https://kmcakes.herokuapp.com/login?' + queryString;

    loggedInUser.fetch().done(function(data){
      localStorage.setItem('user', JSON.stringify(loggedInUser.toJSON()));
      self.setHeaders(data.sessionToken);
      callbacks.success(loggedInUser);
    }).fail(function(error){
      callbacks.error(loggedInUser, error);
    });

  },
  setHeaders: function(sessionToken){
    jQuery.ajaxSetup({
      beforeSend: function(xhr){
        xhr.setRequestHeader("X-Parse-Application-Id", "kmcakes");
        xhr.setRequestHeader("X-Parse-REST-API-Key", "greenvillejets");
        if(sessionToken){
          xhr.setRequestHeader("X-Parse-Session-Token", sessionToken);
        }
      }
    });
  },
  isLoggedIn: function(){
    return !!localStorage.getItem('user');
  },
  refresh: function(){
    var currentUser = new User(JSON.parse(localStorage.getItem('user')));
    this.setHeaders(currentUser.get('sessionToken'));
    return currentUser;
  }

});


module.exports = {
  'User' : User
};
