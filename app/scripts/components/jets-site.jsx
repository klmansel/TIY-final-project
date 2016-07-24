var React = require('react');
var $ = require('jquery');

var JetsPage = React.createClass({
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
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className="jets-brand"><a href="#">Photos <span className="sr-only">(current)</span></a></li>
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
        <div className="row col-md-12 mobile-nav">
          <div className="new-nav col-xs-12 col-md-10 col-md-offset-1">
              <a className="col-xs-12 col-md-3 new-navlist" href="#">Photos</a>
              <a className="col-xs-12 col-md-3 new-navlist" href="#">Events</a>
              <a className="col-xs-12 col-md-3 new-navlist" href="#">About Our Team</a>
              <a className="col-xs-12 col-md-3 new-navlist" href="#">Contact Us</a>
          </div>
        </div>
        <div className="row col-md-12">
          <h1 className="coach-headings">SLIDESHOW HERE</h1>
            <div className="jetspics">
              <div>PIC1</div>
              <div>PIC2</div>
              <div>PIC3</div>
            </div>

        </div>
      </div>

    );

  }

});

module.exports = {
  'JetsPage' : JetsPage
}
