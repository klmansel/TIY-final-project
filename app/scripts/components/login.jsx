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
      console.log('Added New Coach');
      router.navigate('signin', {trigger: true});
      $('.submit').text('Signing In');
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
        <nav className="col-md-12">
          <ul className="profile-btns">
            <li className="nav-button">
              <a href="#signin">Sign In</a></li>
            <li className="nav-button">
              <a href="#jetspage">Jets Page</a></li>
            <li className="nav-button">
              <a href="#">Back to <span className="trackit-logo2">Track It!</span></a></li>
          </ul>
        </nav>
        <div className="row col-md-6 col-md-offset-3">
          <form className="loginform" onSubmit={this.handleSubmit}>
            <h1 className="login-heading">Coach Sign Up</h1>
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
              <button type="submit" className="submit jets-button">Submit</button>
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
    console.log('logged in');
    User.login(username, password, {

      success: function(user){
        console.log('User logged in!: ', user);
        router.navigate('athleteProfile', {trigger: true})
      },
      error: function(user, error){
        console.log('error: ', error);
      }
    });
  },

  render: function(){
    return (
      <div className="container-fluid bkg-pages">
        <nav className="col-md-12">
          <ul className="profile-btns">
            <li className="nav-button"><a href="#">Home</a></li>
          </ul>
        </nav>
        <form className="loginform col-xs-12 col-md-4 col-md-offset-4"
          onSubmit={this.handleSubmit}>
          <h1 className="login-heading">Coach Login</h1>
            <fieldset className="form-group">
              <label htmlFor="inputUsername" className="sr-only">Username</label>
              <input name="username" type="text" className="form-control" id="username"
              placeholder="Enter Username"/>
            </fieldset>
            <fieldset className="form-group">
              <label htmlFor="inputPassword" className="sr-only">Password</label>
              <input name="password" type="password" className="form-control" id="password"
              placeholder="Enter Password"/>
            </fieldset>
            <button type="submit" className="submit jets-button">Sign In</button>

        </form>

      </div>

    );
  }

});

module.exports = {
  'SignUpComponent' : SignUpComponent,
  'SignInComponent' : SignInComponent
};
