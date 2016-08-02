var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');
var Athlete = require('../models/athlete').Athlete;
var AthleteCollection = require('../models/athlete').AthleteCollection;
var ResultsCollection = require('../models/results').ResultsCollection;

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
  handleRemoveAthlete: function(profile){
    this.props.athlete.remove(profile);
    this.forceUpdate();
  },
  render: function(profile){
    var profile = this.state.profile;
    return (
      <div key={profile.get('objectId')} className="col-md-6">
        <li className="thumbnail" onClick={function(){self.handleClick(profile)}}>
          <a href="#singleAthlete">
              <img className="thumbnail-pic" src={profile.get('profilePic')} />
              <div className="caption">
                <h3>Name: {profile.get('athleteName')}</h3>
                <p>Gender: {profile.get('gender')}</p>
                <p>Age: {profile.get('ageGroup')}</p>
              </div>
          </a>
          <button className="jetspage" onClick={this.handleRemoveAthlete}>Delete</button>
        </li>
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
            <li><button type="submit" className="submit jets-button">Submit</button></li>
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
