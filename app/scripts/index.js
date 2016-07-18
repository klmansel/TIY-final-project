var Backbone = require('backbone');
require('./router.js');
var $ = window.jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');

$.ajaxSetup({
beforeSend: function(xhr) {
	xhr.setRequestHeader("X-Parse-Application-Id", "tiygvl");
        xhr.setRequestHeader("X-Parse-REST-API-Key", "slumber");
   }
});

Backbone.history.start();
