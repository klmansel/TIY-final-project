var React = require('react');

var TrackItView = React.createClass({
  render: function(){
    return (
      <div className="container-fluid hero-banner">
        <h1 className="hero-headings">Track It!</h1>
        <h3 className="hero-info">An athlete tracking system</h3>
        <p className="hero-desc">Track It! is the easy to use athlete personal
          record and progress management system for the busy youth track coach.</p>
        <button className="hero-btn" type="btn btn-secondary"><a href="#signup"
          title="coaches page">Sign Up for Track It!</a></button>
        <button className="hero-btn" type="btn btn-secondary"> <a href="#jetspage" title="jets page">
          See Track It! in Use</a></button>
      </div>
    )
  }
});

module.exports = TrackItView;
