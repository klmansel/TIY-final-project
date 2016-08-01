
var React = require('react');
var _ = require('underscore');
var Results = require('../models/results').Results;
var AthleteCollection = require('../models/athlete').AthleteCollection;
var ResultsCollection = require('../models/results').ResultsCollection;

var ResultsForm = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    var newResult = new Results();
    var router = this.props.router;
    var coach = JSON.parse(localStorage.getItem('user'));

    newResult.set('minutes', this.state.minutes);
    newResult.set('seconds', this.state.seconds);
    newResult.set('event', this.state.event);
    newResult.setPointer('athlete', this.state.athlete, 'athletes');
    newResult.setPointer('coach', coach, '_User');

    newResult.save().done(function(){
      console.log('Entry Created');
      });
  },
  handleSignout: function(){
    window.localStorage.removeItem("user");
    this.router.navigate('coachesOnly', {trigger: true});
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

        <div className="col-md-6">

            <form onSubmit={this.handleSubmit}>
              <h1 className="coach-headings">Enter Meet Results</h1>

              <fieldset className="form-group">

                  <SelectAthlete chooseAthlete={this.chooseAthlete}/>

                  <label htmlFor="event">Event</label>
                  <select onChange={this.addEvent} className="form-control" id="event">
                    <option>-- Select --</option>
                    <option>100</option>
                    <option>200</option>
                    <option>400</option>
                    <option>800</option>
                    <option>1500</option>
                  </select>

              <label htmlFor="minutes">Minutes</label>
                <input onChange={this.enterMinutes} type="text" className="form-control" id="minutes" placeholder="Enter minutes"/>
                  <label htmlFor="seconds">Seconds</label>
                  <input onChange={this.enterSeconds} type="text" className="form-control" id="seconds" placeholder="Enter seconds"/>
                  <button type="submit" className="btn btn-primary submit jets-button">Submit</button>
            </fieldset>

            </form>
            <ul className="row col-md-1 btn-list">
              <li><button className="jets-button" type="button">
                <a href="#coachesOnly">Coaches Only</a></button></li>
              <li><button className="jets-button" type="button">
                <a href="#results">Event Results Entry</a></button></li>
              <li><button className="jets-button" type="button"><
                a href="#jetspage">Jets Homepage</a></button></li>
              <li><button className="jets-button" onClick={this.handleSignout}
                type="button">Log Out</button></li>
            </ul>
      </div>

    );

  }
});

var SelectAthlete = React.createClass({
  getInitialState: function(){
    return {
      athleteCollection: new AthleteCollection()
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
      <select onChange={this.props.chooseAthlete} type="text" className="form-control" id="athlete" placeholder="Choose Athlete">
        <option value="">-- Select Athlete --</option>
        {athletes}
      </select>
      </div>
    );
  }

});

var ResultsList = React.createClass({
  getInitialState: function(){
    return {
      resultscollection: new ResultsCollection()
    }
  },
  componentWillMount: function(){
    var self = this;
    var resultscollection = this.state.resultscollection;
    resultscollection.fetch().done(function(){
      self.setState({resultscollection: resultscollection});
      console.log('Results:',resultscollection.length);

    });
  },
  render: function(){
    var user = JSON.parse(localStorage.getItem('user'));
    var results = this.state.resultscollection.map(function(result){
      return <li key={result.get('objectId')} value={result.get('objectId')}>
        {result.get(user.name),result.get('event'),'   ', result.get('minutes'), ':',result.get('seconds')}</li>
    });
    return (
      <div className="col-md-6">
        <h3 className="coach-headings">Results:</h3>
        <ul className="results-list">
          {results}
        </ul>
      </div>
    )
  }
});
var ResultsView = React.createClass({
  render: function(){
    return (
      <div className="bkg-pages">
        <ResultsForm />
        <ResultsList />
      </div>
    );
  }
});
module.exports = {
  'ResultsForm' : ResultsForm,
  'ResultsView' : ResultsView
};
