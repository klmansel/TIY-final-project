var React = require('react');
var AthleteCollection = require('../models/athlete').AthleteCollection;
var ResultsCollection = require('../models/results').ResultsCollection;


var AthleteProfile = React.createClass({
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
/*need to write code to get individual profiles-possibly completion list */
  },
  render: function(){
    var athleteList = this.state.athleteList;
    console.log('ATHLETE INFO: ', athleteList);
    var self = this;

    var athleteProfile = athleteList.map(function(profile){
      console.log('ATHLETE', profile);
      return (
        <li onClick={function(){self.handleClick(profile)}} key={profile.get('objectId')}>
        Name: {profile.get('athleteName')} Gender: {profile.get('gender')} Age: {profile.get('ageGroup')}</li>
        )
    });

    return (
      <div className="container-fluid bkg-pages">
        <h1 className="coach-headings">Full List(will need to change to 1 athlete)</h1>
        <ul className="results-list">
        {athleteProfile}
        </ul>
      </div>
    );
  }

});

var AthleteProfileView =React.createClass({
  render: function(){
    return (
      <div>
        <AthleteProfile athleteList={this.props.athleteList}/>
          <button className="jets-button" type="button"><a href="#">Home</a></button>
          <button className="jets-button" type="button"><a href="#athleteProfile">Athlete Profiles</a></button>
          <button className="jets-button" type="button"><a href="#results">Event Results Entry</a></button>
          <button className="jets-button" onClick={this.editProfile} type="button">Edit Profile</button>
      </div>
    )
  }
});

module.exports = AthleteProfile;
