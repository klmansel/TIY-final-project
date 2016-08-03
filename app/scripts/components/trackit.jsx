var React = require('react');

var TrackItView = React.createClass({
  render: function(){
    return (
      <div className="container-fluid hero-banner">
        <h1 className="hero-headings"><i>Track It!</i></h1>
        <h3 className="hero-info">An athlete tracking system</h3>
        <p className="hero-desc"><span className="trackit-logo">Track It! </span>
          is the easy to use athlete personal
          record and progress management system for the busy youth track coach.</p>
        <ul>
        <li> <button className="hero-btn" type="btn btn-secondary"><a href="#signup"
            title="coaches page">Sign Up for <span className="trackit-logo2">
            Track It!</span> </a></button></li>
        <li> <button className="hero-btn" type="btn btn-secondary"> <a href="#jetspage"
          title="jets page">
            See<span className="trackit-logo2">Track It!</span> in Action</a></button></li>
        </ul>
      </div>
    )
  }
});

module.exports = TrackItView;