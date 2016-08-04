var React = require('react');

var TrackItView = React.createClass({
  render: function(){
    return (
      <div className="hero-banner">
        <div className="hero-header">
          <h1 className="hero-headings"><i>Track It!</i></h1>
          <h3 className="hero-info">An athlete tracking system</h3>
          <p className="hero-desc"><span className="trackit-logo">Track It! </span>
            is the easy to use athlete personal
            record and progress management system for the busy youth track coach.</p>
      </div>
        <div>
          <ul className="row hero-ul">
            <li className="hero-btn" type="btn btn-secondary"><a href="#signup"
                title="coaches page">Sign Up for <span className="trackit-logo2">
                Track It!</span> </a></li>
            <li className="hero-btn" type="btn btn-secondary"> <a href="#jetspage"
              title="jets page">
                See<span className="trackit-logo2">Track It!</span> in Action</a></li>
          </ul>
        </div>
      </div>
    )
  }
});

module.exports = TrackItView;
