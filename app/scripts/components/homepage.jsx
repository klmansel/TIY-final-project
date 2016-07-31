var React = require('react');

var Homepage = React.createClass({
  handleSignout: function(){
    window.localStorage.removeItem("user");
    router.navigate('coachesOnly', {trigger: true});
  },
  render: function(){
    return (
      <div className="container homepage-links bkg-pages">
        <div className="row col-xs-6 coaches-menu">
          <h1 className="homepage-title">Coaches Area</h1>

            <button className="btn jets-button" type="button"><a href="#signup">SignUp Here</a></button>
            <button className="jets-button" type="button"><a href="#signin">Sign In</a></button>
            <button className="jets-button" type="button"><a href="#athleteEntry">Athlete Entry</a></button>
            <button className="jets-button" type="button"><a href="#results">Event Results Entry</a></button>
            <button className="jets-button" type="button"><a href="#jetspage">Jets Homepage</a></button>
            <button className="jets-button" type="button"><a href="#">Track It! Homepage</a></button>
            <button className="jets-button" onClick={this.handleSignout} type="button">Log Out</button>

        </div>
      </div>

    );
  }

});

module.exports = {
'Homepage' : Homepage

}
