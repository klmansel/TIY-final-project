var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = window.jQuery = require('jquery'); //get backbone models into app
var SignUpComponent = require('./components/login.jsx').SignUpComponent;
var SignInComponent = require('./components/login.jsx').SignInComponent;
var AthleteEntry = require('./components/entry-form.jsx').AthleteEntry;
var Homepage = require('./components/homepage.jsx').Homepage;
var JetsPage = require('./components/jets-site.jsx').JetsPage;
var ResultsForm = require('./components/results.jsx').ResultsForm;
var ContactInfo = require('./components/contactus.jsx');
var Schedule = require('./components/schedule.jsx');

var Router = Backbone.Router.extend({
  routes: {
  '': 'index',
  'signup' : 'signup',
  'signin' : 'signin',
  'athleteEntry' : 'athleteEntry',
  'results' : 'results',
  'coachesOnly' : 'coachesOnly',
  'contactInfo' : 'contactInfo',
  'schedule' : 'schedule'
},

index: function(){
  var self = this;
  ReactDOM.render(
    React.createElement(JetsPage, {router: self}),
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
    React.createElement(ResultsForm, {router: self}),
      document.getElementById('container')
    );
  },

coachesOnly: function(){
  ReactDOM.render(
    React.createElement(Homepage, {router: self}),
    document.getElementById('container')
  );
},

contactInfo: function(){
  ReactDOM.render(
    React.createElement(ContactInfo, {router: self}),
    document.getElementById('container')
  );
},

schedule: function(){
  ReactDOM.render(
    React.createElement(Schedule, {router: self}),
    document.getElementById('container')
  );
}

});


var router = new Router();

module.exports = router;
