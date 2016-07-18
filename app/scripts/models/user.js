var Backbone = require('backbone');

var User = Backbone.Model.extend({
  urlRoot: 'https://tiny-parse-server.herokuapp.com/users',
},{
  login: function(username, password, callbacks){
    var loggedInUser = new User();
    var queryString = jQuery.param({'username': username, 'password': password});

    loggedInUser.urlRoot = 'https://tiny-parse-server.herokuapp.com/login?' + queryString;

    loggedInUser.fetch().done(function(data){
      localStorage.setItem('user', JSON.stringify(loggedInUser.toJSON()));
      callbacks.success(loggedInUser);

    }).fail(function(error){
      callbacks.error(loggedInUser, error);

    });

  }

});

module.exports = {
  'User' : User
};
