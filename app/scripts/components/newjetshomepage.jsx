var React = require('react');

var NavbarComponent = React.createClass({
  render: function(){
    return (
      <div className="container-fluid new-jets-page">
        <div className="row new-nav col-xs-4 col-md-12">
          <h1>
            <span className="glyphicon glyphicon-plane" ></span>
            Greenville Jets Track Club
            <span className="glyphicon glyphicon-plane" ></span>
          </h1>

          <p className="hidden-xs">
            The Greenville Jets Track Club exists for the mental and physical
            development of youth ages 6-18 from the Greater Greenville and
            surrounding areas. The primary goal of the club is to develop each
            member&#8217;s skills in leadership and sportsmanship through mentoring,
            self discipline and educational support in a non violent, drug free environment.
          </p>

          <ul className="nav-icons col-md-8">
            <li className="icon-wrap"><a href="#schedule"><img src="images/running.png"
              alt="running-icon"></img><p className="on-hover">Meet Schedule</p></a></li>
            <li className="icon-wrap"><a href="#coachesOnly"><img src="images/whistle.png"
              alt="whistle"></img><p className="on-hover">Coaches Area</p></a></li>
            <li className="icon-wrap"><a href="#photos"><img src="images/camera.png"
              alt="camera"></img><p className="on-hover">Photos</p></a></li>
            <li className="icon-wrap"><a href="#contactInfo"><img src="images/iphone.png"
              alt="iphone"></img><p className="on-hover">Contact Us</p></a></li>
          </ul>
        </div>
      </div>
    )
  }
});

var JetsHomepage = React.createClass({
  render: function(){
    return (
      <NavbarComponent />
    )
  }
});

module.exports = {
  'NavbarComponent' : NavbarComponent,
  'JetsHomepage' : JetsHomepage
}
