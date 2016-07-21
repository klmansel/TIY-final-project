var Backbone = require('backbone');
require('./router.js');
var $ = window.jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
require('bootstrap-sass');


$.ajaxSetup({
beforeSend: function(xhr) {
	xhr.setRequestHeader("X-Parse-Application-Id", "kmcakes");
        xhr.setRequestHeader("X-Parse-REST-API-Key", "greenvillejets");
   }
});

Backbone.history.start();
