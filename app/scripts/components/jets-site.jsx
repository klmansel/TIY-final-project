var React = require('react');
var slick = require('slick-carousel');

var JetsPage = React.createClass({
  componentDidMount: function(){

      jQuery('.your-class').slick({
        'setting-name': 'setting-value'
      });


    jQuery('.jetspics').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true
    });

  },
  render: function(){
    return (
      <div className="container-fluid">
        <div className="row">
          <nav className= "navbar navbar-default">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand jets-brand" href="#">
                <span className="glyphicon glyphicon-plane" ></span>
                <span className="jets-brand">Greenville Jets Track Club</span>
                <span className="glyphicon glyphicon-plane"></span>
              </a>
            </div>
            <div className="collapse navbar-collapse top-navbar" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className="jets-brand"><a href="#">Photos <span className="sr-only">(current)</span></a></li>
                <li><a className="jets-brand " href="#">Events</a></li>
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
        <div className="row col-md-12 mobile-nav hidden-md hidden-lg">
          <div className="new-nav col-xs-12 col-md-12">
              <a className="col-xs-12 col-md-3 new-navlist" href="#">Photos</a>
              <a className="col-xs-12 col-md-3 new-navlist" href="#">Events</a>
              <a className="col-xs-12 col-md-3 new-navlist" href="#">About Our Team</a>
              <a className="col-xs-12 col-md-3 new-navlist" href="#">Contact Us</a>
          </div>
        </div>
        <div className="row col-md-12">

            <div className="jetspics">
              <div><img src="images/jets2015.jpg" alt="jets2015"></img></div>
              <div><img src="images/jetspic2.jpg" alt="jetspic2"></img></div>
              <div><img src="images/jets2016.jpg" alt="jets2016"></img></div>
            </div>

        </div>
      </div>

    );

  }

});

module.exports = {
  'JetsPage' : JetsPage
}
