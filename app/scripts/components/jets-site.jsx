var React = require('react');


var JetsPage = React.createClass({
  render: function(){
    return (
      <div>
        <div className="row">
          <nav className= "navbar navbar-default">
            <div className="navbar-header">
              <a className="navbar-brand jets-brand" href="#">
                <span className="glyphicon glyphicon-plane" ></span>
                <span className="jets-brand">Greenville Jets Track Club</span>
                <span className="glyphicon glyphicon-plane"></span>
              </a>
            </div>
            <div className="collapse navbar-collapse top-navbar" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className="jets-brand"><a href="#photos">Photos <span className="sr-only">(current)</span></a></li>
                <li><a className="jets-brand" href="#">Events</a></li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle jets-brand" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">About Our Team <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a className="jets-brand" href="#schedule">Schedule/Results</a></li>
                    <li><a className="jets-brand" href="#">Successes</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a className="jets-brand" href="#coachesOnly">Coaches Area</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a className="jets-brand" href="#">Donate</a></li>
                  </ul>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><a className="jets-brand" href="#contactInfo">Contact Us</a></li>
              </ul>
            </div>
          </nav>
        </div>

        <header className="header">
          <div className="row col-md-12 mobile-nav hidden-md hidden-lg">
            <div className="new-nav col-xs-12 col-md-12">
                <a className="col-xs-12 col-md-3 new-navlist" href="#photos">Photos</a>
                <a className="col-xs-12 col-md-3 new-navlist" href="#results">Schedule/Results</a>
                <a className="col-xs-12 col-md-3 new-navlist" href="#">About Our Team</a>
                <a className="col-xs-12 col-md-3 new-navlist" href="#contactInfo">Contact Us</a>
            </div>
          </div>
          <p>The Greenville Jets Track Club exists for the mental and physical development of
          youth ages 6-18 from the Greater Greenville and surrounding areas. The primary
          goal of the club is to develop each member's skills in leadership and sportsmanship
          through mentoring, self discipline and educational support in a non violent,
          drug free environment.</p>
        </header>

      </div>
    );
  }
});

var JetsPageFooter = React.createClass({
  render: function(){
    return (
      <div className="row">
        <nav className="navbar footer">
          <p className="footer-text">Crafted by KLM &#169;2016</p>
        </nav>
      </div>
    );
  }
});

var JetsPageView = React.createClass({
  render: function(){
    return (
      <div>
        <JetsPage />
        <JetsPageFooter />
      </div>
    )
  }
});
module.exports = {
  'JetsPageView' : JetsPageView
}
