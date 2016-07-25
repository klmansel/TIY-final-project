var React = require('react');
var Athlete = require('../models/athlete').Athlete;
require('backbone-react-component');

var AthleteEntry = React.createClass({
  getInitialState: function(){
    return {'athleteTeam': 'Greenville Jets','name': '', 'gender': 'Male', 'event': '100', 'ageGroup': '8 and Under'};
  },
  addTeam: function(e){
    this.setState({'athleteTeam': e.target.value})
    console.log();
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
  handleSubmit: function(e){
    e.preventDefault();
    var newAthlete = new Athlete();
    var router = this.props.router;
    var coach = JSON.parse(localStorage.getItem('user'));
    // var coachPointer = {"__type":"Pointer","className":"_User","objectId":coach.objectId};

    newAthlete.set('athleteTeam', this.state.athleteTeam);
    newAthlete.set('athleteName', this.state.athleteName );
    newAthlete.set('gender', this.state.gender);
    newAthlete.set('ageGroup', this.state.ageGroup);
    newAthlete.setPointer('coach', coach, '_User');
    newAthlete.save().done(function(){
      console.log('athlete-team');
      router.navigate('results', {trigger: true});
    });
  },
  render: function(){
    return (
      <div className="col-md-12 col-md-offset-3">
        <form onSubmit={this.handleSubmit} className="col-md-6">
          <h1 className="coach-headings">Coach Stat Tracker</h1>
            <h3 className="coach-headings">Enter New Athlete Information</h3>
              <fieldset className="form-group">
                <label htmlFor="team">Team</label>
                <input onChange={this.addTeam} type="text" className="form-control" id="athleteTeam"
                placeholder="Enter Athlete's Team"/>
              </fieldset>
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
            </form>

            <button type="button"><a href="#">Home</a></button>
        </div>
    );
  }
});

module.exports = {
  'AthleteEntry' : AthleteEntry
};
