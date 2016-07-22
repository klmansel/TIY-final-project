var React = require('react');

var Schedule = React.createClass({
  render: function(){
    return (
      <div className="row col-md-6 col-md-offset-3">
        <h1 className="coach-headings">2016 Schedule and Results</h1>
          <p>This is a where the scheduls and links to results are posted (live and historical)</p>
          <button type="button"><a href="#">Home</a></button>
      </div>
    );
  }

});


module.exports = Schedule;
