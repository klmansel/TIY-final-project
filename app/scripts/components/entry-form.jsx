var React = require('react');
var _ = require('underscore');
var Athlete = require('../models/athlete.js').Athlete;
var AthleteCollection = require('../models/athlete.js').AthleteCollection;
require('backbone-react-component');

var AthleteList = React.createClass({
  render: function(){
    var user = JSON.parse(localStorage.getItem('user'));
    var athleteCollection = new AthleteCollection();
    console.log(athleteCollection);
    var athletes = this.props.athleteCollection.map(function(athlete){
      return <li key={athlete.get('objectId')}>{athlete.get('athleteName')}</li>
    });

    return (
      <div className="col-md-6">
        <h2 className="coach-headings">Hi {user.name}!</h2>
        <h3 className="coach-headings">You are adding athletes to the team: <br/>{user.team}</h3>
        <ul className="athlete-list">
          {athletes}
          DOES THIS WORK?

        </ul>
      </div>
    );
    }
});

var AthleteEntry = React.createClass({
  getInitialState: function(){
    return {
      'athleteTeam': 'Greenville Jets',
      'name': '',
      'gender': 'Male',
      'event': '100',
      'ageGroup': '8 and Under',
      'athleteCollection': []};
  },
  addAthlete: function(e){
    this.setState({'athleteName': e.target.value})
  },
  addGender: function(e){
    this.setState({'gender': e.target.value})
  },
  addEvent: function(e){
    this.setState({'event': e.target.value})
  },
  addAge: function(e){
    this.setState({'ageGroup': e.target.value})
  },
  handleSignout: function(){
    window.localStorage.removeItem("user");
  },
  handleSubmit: function(){
    e.preventDefault();
    var newAthlete = new Athlete();
    var coach = JSON.parse(localStorage.getItem('user'));

    newAthlete.set('athleteName', this.state.athleteName );
    newAthlete.set('gender', this.state.gender);
    newAthlete.set('ageGroup', this.state.ageGroup);
    newAthlete.setPointer('coach', coach, '_User');

    this.props.handleSubmit(newAthlete);
  },
  render: function(){
    return (
      <div className="col-md-12">
        <form onSubmit={this.handleSubmit} className="col-md-6">
          <h1 className="coach-headings">Add New Athlete</h1>
            <h3 className="coach-headings">Enter New Athlete Information</h3>
              <fieldset className="form-group">
                <label htmlFor="name">Name</label>
                <input onChange={this.addAthlete} type="text" className="form-control" id="athleteName"
                placeholder="Enter Athlete's Name"/>
              </fieldset>
              <fieldset className="form-group">
               <label htmlFor="gender">Gender</label>
               <select onChange={this.addGender} className="form-control" id="gender">
                 <option>Male</option>
                 <option>Female</option>
               </select>
             </fieldset>
             <fieldset className="form-group">
               <label htmlFor="age-group">Age Group</label>
               <select onChange={this.addAge} className="form-control" id="ageGroup">
                 <option>8 and Under</option>
                 <option>9-10 Years Old</option>
                 <option>11-12 Years Old</option>
                 <option>13-14 Years Old</option>
                 <option>15-16 Years Old</option>
                 <option>17-19 Years Old</option>
               </select>
             </fieldset>
             <button type="submit" className="btn btn-primary submit">Submit</button>
             <button type="button"><a href="#">Home</a></button>
             <button onClick={this.handleSignout} type="button"><a href="#">Log Out</a></button>
             <button onClick={this.editProfile} type="button">Edit Profile</button>
            </form>
        </div>
    );
  }
});

var AthleteView = React.createClass({
  handleSubmit: function(newAthlete){
    var router = this.props.router;
    var athleteCollection =
    this.state.athleteCollection.create(newAthlete).done();

    newAthlete.save().done(function(){
      router.navigate('athleteEntry', {trigger: true});
    });
  },
  render: function(){
    return (
      <div className="athlete-list">
        <AthleteEntry />
        <ul>
          <AthleteList athleteCollection={this.props.athleteCollection}/>
        </ul>
      </div>
    )
  }
});
module.exports = {
  'AthleteEntry' : AthleteEntry,
  'AthleteList' : AthleteList,
  'AthleteView' : AthleteView
};
