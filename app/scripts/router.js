var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = window.jQuery = require('jquery'); //get backbone models into app
var SignUpComponent = require('./components/login.jsx').SignUpComponent;
var SignInComponent = require('./components/login.jsx').SignInComponent;
var AthleteEntry = require('./components/entry-form.jsx').AthleteEntry;
var Results = require('./components/entry-form.jsx').Results;
var Homepage = require('./components/homepage.jsx').Homepage;


var Router = Backbone.Router.extend({
  routes: {
  '': 'index',
  'signup' : 'signup',
  'signin' : 'signin',
  'athleteEntry' : 'athleteEntry',
  'results' : 'results'
},

index: function(){
  var self = this;
  ReactDOM.render(
    React.createElement(Homepage, {router: self}),
      document.getElementById('container')
    );
},

signup: function(){
  var self = this;
  ReactDOM.render(
    React.createElement(SignUpComponent, {router: self}),
      document.getElementById('container')
    );
  },

signin: function(){
  var self = this;
  ReactDOM.render(
    React.createElement(SignInComponent, {router: self}),
      document.getElementById('container')
    );
  },

athleteEntry: function(){
  var self = this;
  ReactDOM.render(
    React.createElement(AthleteEntry, {router: self}),
      document.getElementById('container')
    );
  },

results: function(){
  ReactDOM.render(
    React.createElement(Results, {router: self}),
      document.getElementById('container')
    );
}
});


var router = new Router();

module.exports = router;
