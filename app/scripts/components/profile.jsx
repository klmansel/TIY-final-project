var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var Athlete = require('../models/athlete').Athlete;
var AthleteCollection = require('../models/athlete').AthleteCollection;
var ResultsCollection = require('../models/results').ResultsCollection;

var SingleAthleteResults = React.createClass({
  getInitialState: function(){
    return {
      resultsCollection : new ResultsCollection()
    };
  },
  componentWillMount: function(){
    var self = this;
    var athlete = this.props.profile;
    var resultsCollection = this.state.resultsCollection;
    var results = resultsCollection.query(athlete.get('objectId')).fetch().done(function(){
      self.setState({resultsCollection: resultsCollection});
    });
  },
  render: function(){
    var results = this.state.resultsCollection;
    var resultList = results.map(function(result){
      return <li className="each-result" key={result.get('objectId')}>
              {result.get('meetName')} {result.get('createdAt').slice(0,10)}
               {result.get('event')} {result.get('minutes:')}{result.get('seconds')}
            </li>
    });

    return (
      <div className="col-med-6">
        <h1 className="coach-headings">Results</h1>
          <ul>
            {resultList}
          </ul>
      </div>
    )
  }
});


var SingleAthlete = React.createClass({
  getInitialState: function(){
     return {
       profile: new Athlete()
     }
  },
  componentWillMount: function(){
    var self = this;
    var profile = this.state.profile;

    if(this.props.profile){
       profile.set('objectId', this.props.profile);
       profile.fetch().done(function(){
         self.setState({
           profile: profile
     });
   });
 }
  },
  handleRemoveAthlete: function(e){
    console.log(this.state);
    this.state.profile.destroy();
    this.forceUpdate();
    Backbone.history.navigate('#athleteProfile'), {trigger:true};
  },
  handleSignout: function(){
    window.localStorage.removeItem("user");
    this.router.navigate('#', {trigger: true});
  },
  render: function(profile){
    var coach = JSON.parse(localStorage.getItem('user'));
    var profile = this.state.profile;

    return (
      <div className="bkg-pages">
        <nav>
          <ul className="profile-btns">
            <li className="nav-button"><a href="#athleteProfile">
                Back to {coach.team} List</a></li>
              <li className="nav-button" onClick={this.handleRemoveAthlete}><a href="#athleteProfile">
                Delete Athlete from {coach.team}</a></li>
          </ul>
        </nav>
        <div key={profile.get('objectId')} className="row">
          <div className="thumbnail-wrap">
            <li className="thumbnail fulllistprofileview col-md-6">
                <img className="thumbnail-pic" src={profile.get('profilePic')} />
                  <div className="singleathletecaption caption">
                    <h3>Name: {profile.get('athleteName')}</h3>
                    <p>Gender: {profile.get('gender')}</p>
                    <p>Age: {profile.get('ageGroup')}</p>
                  </div>
            </li>
          </div>
        </div>

        <div className="athlete-results col-md-6">
          <SingleAthleteResults profile={profile}/>
          </div>
      </div>
    );
  }
  });

var FullTeamList = React.createClass({
  handleClick: function(profile){
    var router= this.props.router;
    Backbone.history.navigate("#athletes/" + profile.get('objectId'), {trigger:true});

  },
  render: function(){
    var user =JSON.parse(localStorage.getItem('user'));
    var athleteList = this.props.athleteList;

    var self = this;

    var athleteProfile = athleteList.map(function(profile){

      return (
        <div key={profile.get('objectId')} className="col-md-6">
          <li onClick={function(){self.handleClick(profile)}}
            className="fulllistprofileview thumbnail athleteprofile">
                <img className="thumbnail-pic" src={profile.get('profilePic')} />
                <div className="caption">
                  <h3>Name: {profile.get('athleteName')}</h3>
                  <p>Gender: {profile.get('gender')}</p>
                  <p>Age: {profile.get('ageGroup')}</p>
                </div>
          </li>
        </div>
        )
    });

    return (
      <div>
        <h1 className="login-heading">{user.team}</h1>
        <ul className="results-list">
          {athleteProfile}
        </ul>
      </div>
    );
  }

});

var FilterView = React.createClass({
  getInitialState: function(){
    return {
      'selectedAge': ''
    }
  },
  selectAge: function(e){
      this.setState({'selectedAge': e.target.value});
      this.props.filter(_.extend({}, this.state, {'selectedAge': e.target.value}));
  },
  selectedGender: function(e){
      this.setState({'selectedGender': e.target.value});
      this.props.filter(_.extend({}, this.state, {'selectedGender': e.target.value}));
  },
  selectedEvent: function(e){
      this.setState({'selectedEvent': e.target.value});
      this.props.filter(_.extend({}, this.state, {'selectedEvent': e.target.value}));
  },
  render: function(e){
    console.log(this.state);
    var user = JSON.parse(localStorage.getItem('user'));
    var eventFilter = this.props.athleteList.where({
      'event': this.state.selectedEvent
    }).map(function(model){
      return (
        <li key={model.get('objectId')}>
          {model.get('athleteName')}
        </li>
      );
    });

    return (
      <div className="row">
        <div className="col-xs-12 col-md-6 col-md-offset-3">
            <fieldset className="form-group">
              <h1 className="login-heading">Athlete Profiles</h1>
              <label htmlFor="age-group">Age Group</label>
              <select onChange={this.selectAge} className="form-control" id="ageGroup">
                <option>--SELECT--</option>
                <option>8 and Under</option>
                <option>9-10 Years Old</option>
                <option>11-12 Years Old</option>
                <option>13-14 Years Old</option>
                <option>15-16 Years Old</option>
                <option>17-19 Years Old</option>
              </select>
              <label htmlFor="age-group">Gender</label>
              <select onChange={this.selectedGender} className="form-control" id="gender">
                <option>--SELECT--</option>
                <option>Male</option>
                <option>Female</option>
              </select>
              <label htmlFor="event">Event</label>
              <select onChange={this.selectedEvent} className="form-control" id="event">
                <option>-- Select --</option>
                <option>100</option>
                <option>200</option>
                <option>400</option>
                <option>800</option>
                <option>1500</option>
              </select>

            </fieldset>
        </div>
      </div>
    );
  }
});


var AthleteProfileView = React.createClass({
  getInitialState: function(){
    return {
      athleteList: new AthleteCollection()
    }
  },
  componentWillMount: function(){
    var self = this;
    var athleteList = this.state.athleteList;

    athleteList.fetch().done(function(data){
      self.setState({athleteList: athleteList});

      self.athleteList = new AthleteCollection(data.results);
      var results = new ResultsCollection();

      results.fetch().done(function(data){
        self.athleteList.each(function(athlete){
          var athleteEvents = _.filter(results.toJSON(), function(result){
            return result.athlete.objectId === athlete.get('objectId');
          });

          athlete.set('event', _.uniq(_.pluck(athleteEvents, 'event')));
        });
        console.log(self.athleteList);
      });
    });


  },
  filter: function(filters){
    var filterObject = {};
    if(filters.selectedGender){filterObject.gender = filters.selectedGender};
    if(filters.selectedAge){filterObject.ageGroup = filters.selectedAge};

    var filteredAthletes = this.athleteList.where(filterObject);

    if (filters.selectedEvent){
      filteredAthletes =  _.filter(filteredAthletes, function(athlete){
        return athlete.get('event').indexOf(filters.selectedEvent) != -1;
      });
    }

    this.setState({athleteList: new AthleteCollection(filteredAthletes)});
  },
  render: function(){
    return (
      <div className="container-fluid bkg-pages">
        <nav>
          <ul className="row col-md-12 profile-btns">
            <li className="nav-button"><a href="#">Home</a></li>
            <li className="nav-button"><a href="#athleteEntry">Athlete Entry</a></li>
            <li className="nav-button"><a href="#athleteProfile">Athlete Profiles</a></li>
            <li className="nav-button"><a href="#results">Event Results Entry</a></li>
            <li className="nav-button"><a onClick={this.handleSignout} href="#">Log Out</a></li>
          </ul>
        </nav>
        <div>
          <FilterView filter={this.filter} athleteList={this.state.athleteList}/>
          <FullTeamList athleteList={this.state.athleteList}/>
        </div>
      </div>

    );
  }
});

module.exports = {
  'SingleAthlete' : SingleAthlete,
  'AthleteProfileView' : AthleteProfileView
}
