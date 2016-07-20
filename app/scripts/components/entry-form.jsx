var React = require('react');
var Athlete = require('../models/athlete').Athlete;
var $ = require('jquery');
require('backbone-react-component');

var AthleteEntry = React.createClass({
  getInitialState: function(){
    return {'athleteTeam': 'Greenville Jets','name': '', 'gender': 'M', 'event': '100', 'ageGroup': '8 and Under'};
  },
  addTeam: function(e){
    this.setState({'athleteTeam': e.target.value})
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

    newAthlete.set('athleteTeam', this.state.athleteTeam);
    newAthlete.set('athleteName', this.state.athleteName );
    newAthlete.set('gender', this.state.gender);
    newAthlete.set('event', this.state.event);
    newAthlete.set('ageGroup', this.state.ageGroup);
    newAthlete.save().done(function(){
      alert('Athlete Created');
      console.log('athlete-team');
      router.navigate('athleteEntry', {trigger: true});
    });
  },
  render: function(){
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="col-md-6">
          <h1>Coach Stat Tracker</h1>
            <h3>Enter New Athlete Information</h3>
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
               <select onChange={this.addGender} value={this.state.selectValue}  className="form-control" id="gender">
                 <option>Male</option>
                 <option>Female</option>
               </select>
             </fieldset>
             <fieldset className="form-group">
               <label htmlFor="event">Event</label>
               <select onChange={this.addEvent} value={this.state.selectValue} className="form-control" id="event">
                 <option value="100">100</option>
                 <option value="200">200</option>
                 <option value="400">400</option>
                 <option value="800">800</option>
                 <option value="1500">1500</option>
                 <option value="LJ">Long Jump</option>
               </select>
             </fieldset>
             <fieldset className="form-group">
               <label htmlFor="age-group">Age Group</label>
               <select onChange={this.addAge} value={this.state.selectValue} className="form-control" id="ageGroup">
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
