var React = require('react');

var Homepage = React.createClass({
  handleSignout: function(){
    window.localStorage.removeItem("user");
    router.navigate('coachesOnly', {trigger: true});
  },
  render: function(){
    return (
      <div className="container col-md-12 col-md-offset-4 homepage-links">
        <div className="row coaches-menu">
        <h1 className="homepage-title">Coaches Area</h1>
        <ul>
          <li><a href="#signup">SignUp Here</a></li>
          <li><a href="#signin">Sign In</a></li>
          <li><a href="#athleteEntry">Athlete Entry</a></li>
          <li><a href="#results">Event Results Entry</a></li>
          <li><a href="#">Jets Homepage</a></li>
        </ul>
        <button onClick={this.handleSignout} type="button">Log Out</button>
        </div>
      </div>

    );
  }

});

module.exports = {
'Homepage' : Homepage

}
