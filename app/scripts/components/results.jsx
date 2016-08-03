
var React = require('react');
var _ = require('underscore');
var Backbone = require('backbone');
var Results = require('../models/results').Results;
var AthleteCollection = require('../models/athlete').AthleteCollection;
var ResultsCollection = require('../models/results').ResultsCollection;

var ResultsForm = React.createClass({
  getInitialState: function(){
    return {
    'minutes': '',
    'seconds': '',
    'event': '',
    'meetName' : ''
    };
  },
  handleSubmit: function(e){
    e.preventDefault();
    var newResult = new Results();
    var router = this.props.router;
    var coach = JSON.parse(localStorage.getItem('user'));
    var self= this;

    newResult.set('minutes', this.state.minutes);
    newResult.set('seconds', this.state.seconds);
    newResult.set('meetName', this.state.meetName);
    newResult.set('event', this.state.event);
    newResult.setPointer('athlete', this.state.athlete, 'athletes');
    newResult.setPointer('coach', coach, '_User');

    newResult.save().done(function(){
      console.log('Entry Created');
      self.setState({
        'minutes': '',
        'seconds': '',
        'event': '',
        'meetName' : '',
        'athlete': ''
      });
    });
  },
  handleSignout: function(){
    window.localStorage.removeItem("user");
    Backbone.history.navigate('coachesOnly', {trigger: true});
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
  addmeetName: function(e){
    this.setState({'meetName': e.target.value})
  },
  render: function(){
    var coach = JSON.parse(localStorage.getItem('user'));
    return (

        <div className="col-md-6 col-md-offset-3">

            <form onSubmit={this.handleSubmit}>
              <h1 className="coach-headings">Enter Meet Results</h1>

              <fieldset className="form-group">

                  <SelectAthlete chooseAthlete={this.chooseAthlete}/>

                  <label htmlFor="meetName">Meet Name</label>
                  <input value={this.state.meetName} onChange={this.addmeetName} type="text" className="form-control" id="meetName"
                  placeholder="Enter Name of Meet"/>

                  <label htmlFor="event">Event</label>
                  <select value={this.state.event} onChange={this.addEvent} className="form-control" id="event">
                    <option>-- Select --</option>
                    <option>100</option>
                    <option>200</option>
                    <option>400</option>
                    <option>800</option>
                    <option>1500</option>
                  </select>

              <label htmlFor="minutes">Minutes</label>
                <input value={this.state.minutes} onChange={this.enterMinutes}
                   type="text" className="form-control" id="minutes" placeholder="Enter minutes"/>
                  <label htmlFor="seconds">Seconds</label>
                  <input value={this.state.seconds} onChange={this.enterSeconds}
                     type="text" className="form-control" id="seconds" placeholder="Enter seconds"/>

                   <ul className="row col-md-12 entry-btn btn-list">
                      <li><button type="submit" className="submit jets-button">Submit</button></li>
                      <li><button className="jets-button" type="button">
                        <a href="#coachesOnly">Coaches Only</a></button></li>
                      <li><button className="jets-button" type="button">
                        <a href="#results">Event Results Entry</a></button></li>
                      <li><button type="button" className="jets-button"><a href="#athleteProfile">
                           {coach.team} List</a></button></li>
                      <li><button className="jets-button" type="button"><
                        a href="#jetspage">Jets Homepage</a></button></li>
                      <li><button className="jets-button" onClick={this.handleSignout}
                        type="button">Log Out</button></li>
                    </ul>
            </fieldset>
            </form>
      </div>

    );

  }
});

var SelectAthlete = React.createClass({
  getInitialState: function(){
    return {
      athleteCollection: new AthleteCollection(),
      'athlete': ''
    }
  },
  componentWillMount: function(){
    var self = this;
    var athleteCollection = this.state.athleteCollection;
    athleteCollection.fetch().done(function(){
      self.setState({athleteCollection: athleteCollection});
    });
  },
  render: function(){
    var athletes = this.state.athleteCollection.map(function(athlete){
      return <option key={athlete.get('objectId')} value={athlete.get('objectId')}>{athlete.get('athleteName')}</option>
    });

    console.warn('Athletes:',this.state.athleteCollection);

    return (
      <div>
      <label htmlFor="athlete">Athlete Name</label>
      <select value={this.state.athlete} onChange={this.props.chooseAthlete} type="text" className="form-control" id="athlete" placeholder="Choose Athlete">
        <option value="">-- Select Athlete --</option>
        {athletes}
      </select>
      </div>
    );
  }

});


var ResultsView = React.createClass({
  render: function(){
    return (
      <div className="bkg-pages">
        <ResultsForm />

      </div>
    );
  }
});
module.exports = {
  'ResultsForm' : ResultsForm,
  'ResultsView' : ResultsView,
  'SelectAthlete': SelectAthlete
};
