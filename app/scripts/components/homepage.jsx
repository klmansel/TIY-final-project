var React = require('react');

var Homepage = React.createClass({
  handleSignout: function(){
    window.localStorage.removeItem("user");
    router.navigate('coachesOnly', {trigger: true});
  },
  render: function(){
    return (
      <div className="container homepage-links bkg-pages">
        <div className="row col-md-6 col-md-offset-3 coaches-menu">
          <h1 className="homepage-title">Coaches Area</h1>
          <ul className="btn-list">
            <li><button className="jets-button" type="button"><a href="#signup">SignUp Here</a></button></li>
            <li><button className="jets-button" type="button"><a href="#signin">Sign In</a></button></li>
            <li><button className="jets-button" type="button"><a href="#athleteEntry">Athlete Entry</a></button></li>
            <li><button className="jets-button" type="button"><a href="#results">Event Results Entry</a></button></li>
            <li><button className="jets-button" type="button"><a href="#jetspage">Jets Homepage</a></button></li>
            <li><button className="jets-button" type="button"><a href="#"><span className="trackit-logo2">Track It!</span> Homepage</a></button></li>
            <li><button className="jets-button" onClick={this.handleSignout} type="button">Log Out</button></li>
          </ul>
        </div>
      </div>

    );
  }

});

module.exports = {
'Homepage' : Homepage

}
