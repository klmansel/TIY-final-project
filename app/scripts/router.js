var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = window.jQuery = require('jquery'); //get backbone models into app
var User = require('./models/user.js').User;
var SignUpComponent = require('./components/login.jsx').SignUpComponent;
var SignInComponent = require('./components/login.jsx').SignInComponent;
var AthleteView = require('./components/entry-form.jsx').AthleteView;
var Homepage = require('./components/homepage.jsx').Homepage;
var JetsPageView = require('./components/jets-site.jsx').JetsPageView;
var ResultsForm = require('./components/results.jsx').ResultsForm;
var ResultsView = require('./components/results.jsx').ResultsView;
var ContactInfo = require('./components/contactus.jsx');
var Schedule = require('./components/schedule.jsx');
var SlideshowView = require('./components/photos.jsx');
var JetsHomepage = require('./components/newjetshomepage.jsx').JetsHomepage;
var TrackItView = require('./components/trackit.jsx');
var AthleteProfileView = require('./components/profile.jsx');

var Router = Backbone.Router.extend({
  routes: {
  '': 'index',
  'signup' : 'signup',
  'signin' : 'signin',
  'athleteEntry' : 'athleteEntry',
  'results' : 'results',
  'coachesOnly' : 'coachesOnly',
  'contactInfo' : 'contactInfo',
  'schedule' : 'schedule',
  'photos' : 'photos',
  'jetspage' : 'jetspage',
  'athleteProfile' : 'athleteProfile'
},
initialize: function(){
  User.setHeaders();

  if (User.isLoggedIn()){
    User.refresh();
  }else{
    this.navigate('coachesOnly', {trigger: true});
  }
},

index: function(){
  var self = this;
  ReactDOM.render(
    React.createElement(TrackItView, {router: self}),
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
    React.createElement(AthleteView, {router: self}),
      document.getElementById('container')
    );
  },

results: function(){
  var self = this;
  ReactDOM.render(
    React.createElement(ResultsView, {router: self}),
      document.getElementById('container')
    );
  },

coachesOnly: function(){
  ReactDOM.render(
    React.createElement(Homepage, {router: this}),
    document.getElementById('container')
  );
},

contactInfo: function(){
  ReactDOM.render(
    React.createElement(ContactInfo, {router: this}),
    document.getElementById('container')
  );
},

schedule: function(){
  ReactDOM.render(
    React.createElement(Schedule, {router: this}),
    document.getElementById('container')
  );
},
photos: function(){
  ReactDOM.render(
    React.createElement(SlideshowView, {router:this}),
    document.getElementById('container')
  );
},
jetspage: function(){
  var self = this;
  ReactDOM.render(
    React.createElement(JetsHomepage, {router: self}),
      document.getElementById('container')
    );
  },
  athleteProfile: function(){
    var self = this;
    ReactDOM.render(
      React.createElement(AthleteProfileView, {router: self}),
        document.getElementById('container')
      );
    },
});


var router = new Router();

module.exports = router;
