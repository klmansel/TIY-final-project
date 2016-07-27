var React = require('react');

var Homepage = React.createClass({
  handleSignout: function(){
    window.localStorage.removeItem("user");
    router.navigate('coachesOnly', {trigger: true});
  },
  render: function(){
    return (
      <div className="container col-md-12 col-md-offset-4 homepage-links">
        <div className="row">
        <h1 className="homepage-title">Coaches Area</h1>
        <h3><a href="#signup">SignUp Here</a></h3>
        <h3><a href="#signin">Sign In</a></h3>
        <h3>Below links should only show once logged in(change route?)</h3>
        <h3><a href="#athleteEntry">Athlete Entry</a></h3>
        <h3><a href="#results">Event Results Entry</a></h3>
        <h3><a href="#">Jets Homepage</a></h3>
        <button onClick={this.handleSignout} type="button"><a href="#">Log Out</a></button>
        </div>
      </div>

    );
  }

});

module.exports = {
'Homepage' : Homepage

}
