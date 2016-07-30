var React = require('react');
var User = require('../models/User').User;
var $ = window.jQuery = require('jQuery');
var Session = require('../models/user').Session;

var SignUpComponent = React.createClass({
  getInitialState: function(){
    return {'name': '', 'team': '','username': '', 'password': ''
    };
  },
  handleSubmit: function(e){
    e.preventDefault();
    var signup = new User();
    var router = this.props.router;

    signup.set('name', this.state.name );
    signup.set('team', this.state.team);
    signup.set('username', this.state.email );
    signup.set('password', this.state.password );
    signup.save().done(function(){
      alert('Added New Coach');
      router.navigate('signin', {trigger: true});
    });
  },
  handleNameChange: function(e){
    this.setState({'name': e.target.value})
  },
  handleTeamChange: function(e){
    this.setState({'team': e.target.value})
  },
  handleEmailChange: function(e){
    this.setState({'email': e.target.value})
  },
  handlePasswordChange: function(e){
    this.setState({'password': e.target.value})
  },

  render: function(){
    return (
      <div className="container bkg-pages">
        <div className="row col-md-12 col-md-offset-3">
          <form onSubmit={this.handleSubmit} className="col-md-6">
            <h1 className="coach-headings">Coach Sign Up</h1>
              <fieldset className="form-group">
                <label htmlFor="name">Coach Name</label>
                <input onChange={this.handleNameChange} type="text"
                  className="form-control" id="coach-name"
                placeholder="Enter Full Name"/>
              </fieldset>
              <fieldset className="form-group">
                <label htmlFor="team">Team Name</label>
                <input onChange={this.handleTeamChange} type="text"
                  className="form-control" id="team-name"
                placeholder="Enter Team Name"/>
              </fieldset>
              <fieldset className="form-group">
                <label htmlFor="username">Username</label>
                <input onChange={this.handleEmailChange} type="text" className="form-control" id="username"
                placeholder="Create Username"/>
              </fieldset>
              <fieldset className="form-group">
                <label htmlFor="password">Password</label>
                <input onChange={this.handlePasswordChange} type="password" className="form-control" id="password"
                placeholder="Create Password"/>
              </fieldset>
              <button type="submit" className="btn btn-primary submit jets-button">Submit</button>
              <button className="jets-button" type="button"><a href="#signin">Sign In</a></button>
              <button className="jets-button" type="button"><a href="#">Home</a></button>
          </form>
        </div>
      </div>

    );
  }
});

var SignInComponent = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    var username = $('#username').val();
    var password = $('#password').val();
    var router = this.props.router;
    console.log(this.props);
    User.login(username, password, {

      success: function(user){
        console.log('User logged in!: ', user);
        router.navigate('athleteEntry', {trigger: true})
      },
      error: function(user, error){
        console.log('error: ', error);
      }
    });
  },

  render: function(){
    return (
      <div className="col-md-6 col-md-offset-4 bkg-pages">
        <form onSubmit={this.handleSubmit} className="col-md-6">
          <h1 className="coach-headings">Coach Login</h1>
            <fieldset className="form-group">
              <label htmlFor="inputUsername" className="sr-only">Username</label>
              <input name="username" type="text" className="form-control" id="username"
              placeholder="Username"/>
            </fieldset>
            <fieldset className="form-group">
              <label htmlFor="inputPassword" className="sr-only">Password</label>
              <input name="password" type="password" className="form-control" id="password"
              placeholder="Password"/>
            </fieldset>
            <button type="submit" className="btn btn-primary submit jets-button">Sign In</button>
            <button className="jets-button" type="button"><a href="#">Home</a></button>
        </form>

      </div>

    );
  }

});

module.exports = {
  'SignUpComponent' : SignUpComponent,
  'SignInComponent' : SignInComponent
};
