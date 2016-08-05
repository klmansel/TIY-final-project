var React = require('react');
var Backbone = require('backbone');

var Homepage = React.createClass({
  handleSignout: function(){
    window.localStorage.removeItem("user");
    Backbone.history.navigate('#', {trigger: true});
  },
  render: function(){
    return (
      <div className="container-fluid bkg-pages">
        <div className="row">
          <h1 className="homepage-title">
            <span className="trackit-logo2">Track It!</span> Team Management</h1>
          <ul className="row col-md-8 col-md-offset-2 coaches-menu">
            <li className="nav-button">
              <a href="#signup">SignUp Here</a></li>
            <li className="nav-button">
              <a href="#signin">Sign In</a></li>
            <li className="nav-button">
              <a href="#jetspage">Jets Homepage</a></li>
            <li className="nav-button">
              <a href="#"><span className="trackit-logo2">Track It! </span>
                Homepage</a></li>
            <li className="nav-button" onClick={this.handleSignout}>
              <a href="#">Log Out</a></li>
          </ul>
        </div>
      </div>

    );
  }

});

module.exports = {
'Homepage' : Homepage

}
