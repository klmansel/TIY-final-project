var React = require('react');
var Results = require('../models/results').Results;

var ResultsForm = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    var newResult = new Results();
    var router = this.props.router;

    newResult.set('minutes', this.state.minutes);
    newResult.set('seconds', this.state.seconds);
    newResult.set('event', this.state.event);
    newResult.save().done(function(){
      alert('Entry Created');
      console.log('results logged');
      router.navigate('coachesOnly', {trigger: true});
      });
  },
  enterMinutes: function(e){
    this.setState({'minutes': e.target.value})
  },
  enterSeconds: function(e){
    this.setState({'seconds': e.target.value})
  },
  chooseAthlete: function(e){
    this.setState({'athlete': e.target.value})
  },
  addEvent: function(e){
    this.setState({'event' : e.target.value})
  },
  render: function(){
    return (
      <div className="container">
        <div className="row col-md-12 col-md-offset-3">
          <div className="col-md-6">
            <form onSubmit={this.handleSubmit}>
              <h1 className="coach-headings">Results Form</h1>

              <fieldset className="form-group">
                <label htmlFor="athlete">Athlete Name</label>
                <select onChange={this.chooseAthlete} type="text" className="form-control" id="athlete" placeholder="Choose Athlete">
                  <option>NEED DROPDOWN TO POPULATE ATHLETE ARRAY</option>
                </select>

                  <label htmlFor="event">Event</label>
                  <select onChange={this.addEvent} className="form-control" id="event">
                    <option>100</option>
                    <option>200</option>
                    <option>400</option>
                    <option>800</option>
                    <option>1500</option>
                    <option>Long Jump</option>
                  </select>

              <label htmlFor="minutes">Minutes</label>
                <input onChange={this.enterMinutes} type="text" className="form-control" id="minutes" placeholder="Enter minutes"/>
                  <label htmlFor="seconds">Seconds</label>
                  <input onChange={this.enterSeconds} type="text" className="form-control" id="seconds" placeholder="Enter seconds"/>
              </fieldset>
                 <button type="submit" className="btn btn-primary submit">Submit</button>
            </form>
            <button type="button"><a href="#">Home</a></button>
          </div>
        </div>
      </div>
    );

  }
});

module.exports = {
  'ResultsForm' : ResultsForm
};
