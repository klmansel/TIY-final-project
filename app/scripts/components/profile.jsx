var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');
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
      return <li key={result.get('objectId')}>{result.get('meetName')} {result.get('event')} {result.get('minutes')}:{result.get('seconds')}</li>
    });

    return (
      <div>
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
    Backbone.history.navigate('#athleteList'), {trigger:true};
  },
  render: function(profile){
    var coach = JSON.parse(localStorage.getItem('user'));
    var profile = this.state.profile;

    return (
      <div className="container-fluid">
        <div key={profile.get('objectId')} className="bkg-pages col-md-6">
          <li className="thumbnail">
                <img className="thumbnail-pic" src={profile.get('profilePic')} />
                <div className="singleathletecaption caption">
                  <h3>Name: {profile.get('athleteName')}</h3>
                  <p>Gender: {profile.get('gender')}</p>
                  <p>Age: {profile.get('ageGroup')}</p>
                </div>
          </li>
        </div>

        <div className="athlete-results col-md-6">
          <SingleAthleteResults profile={profile}/>
        </div>

        <div className="col-md-12">
          <ul className="row col-md-1 profile-btn-list btn-list">
            <li><button className="jets-button" type="button">
              <a href="#coachesOnly">Coaches Only</a></button></li>
            <li><button className="jets-button" type="button">
              <a href="#results">Event Results Entry</a></button></li>
            <li><button className="jets-button" type="button"><
              a href="#jetspage">Jets Homepage</a></button></li>
            <li><button className="jets-button" onClick={this.handleSignout}
              type="button">Log Out</button></li>
            <li><button type="button" className="jets-button"><a href="#athleteProfile">
                Back to {coach.team} List</a></button></li>
            <li><button type="button" className="jets-button" onClick={this.handleRemoveAthlete}>
                Delete Athlete from {coach.team}</button></li>
          </ul>
        </div>
      </div>

    );
  }
  });

var FullTeamList = React.createClass({
  getInitialState: function(){
    return {
      athleteList: []
    }
  },
  componentWillMount: function(){
    var self = this;
    var athleteList = new AthleteCollection();

    athleteList.fetch().done(function(){
      self.setState({athleteList: athleteList});
    });
  },
  handleClick: function(profile){
    var router= this.props.router;
    Backbone.history.navigate("#athletes/" + profile.get('objectId'), {trigger:true});

  },
  render: function(){
    var user =JSON.parse(localStorage.getItem('user'));
    var athleteList = this.state.athleteList;

    var self = this;

    var athleteProfile = athleteList.map(function(profile){

      return (
        <div key={profile.get('objectId')} className="col-md-6">
          <li onClick={function(){self.handleClick(profile)}} className="thumbnail athleteprofile">
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
        <h1 className="coach-headings">{user.team}</h1>
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
      athleteCollection: new AthleteCollection(),
      'selectedAge': ''
    }
  },
  componentWillMount: function(){
    var self = this;
    var athleteCollection = this.state.athleteCollection;
    athleteCollection.fetch().done(function(){
      self.setState({athleteCollection: athleteCollection});
    });
  },
  selectAge: function(e){
      this.setState({'selectedAge': e.target.value});
  },
  selectedGender: function(e){
      this.setState({'selectedGender': e.target.value});
  },
  render: function(e){
    var user = JSON.parse(localStorage.getItem('user'));

    var filterBy = this.state.athleteCollection.where({
      'ageGroup': this.state.selectedAge,
      'gender': this.state.selectedGender
    }).map(function(model){
      return (
        <li key={model.get('objectId')}>
          {model.get('athleteName')}
        </li>
      );
    });

    return (
      <div className="row">
        <div className="col-md-6">
            <fieldset className="form-group">
              <h1 className="coach-headings">Athlete Profiles</h1>
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
            </fieldset>
        </div>
        <div className="col-md-6">
          <h1 className="coach-headings">Filtered {user.team}</h1>
            <ul className="athlete-list">{filterBy}</ul>
        </div>
      </div>
    );
  }
});


var AthleteProfileView = React.createClass({
  render: function(){
    return (
      <div className="container-fluid bkg-pages">
        <FilterView />
        <FullTeamList />


          <ul className="btn-list">
            <li><button className="jets-button" type="button"><a href="#">Home</a></button></li>
            <li><button className="jets-button" type="button"><a href="#athleteProfile">Athlete Profiles</a></button></li>
            <li><button className="jets-button" type="button"><a href="#results">Event Results Entry</a></button></li>
            <li><button className="jets-button" onClick={this.handleSignout} type="button"><a href="#">Log Out</a></button></li>
          </ul>
      </div>

    );
  }
});

module.exports = {
  'SingleAthlete' : SingleAthlete,
  'AthleteProfileView' : AthleteProfileView
}
