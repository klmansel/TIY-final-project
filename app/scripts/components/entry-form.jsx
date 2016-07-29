var React = require('react');
var _ = require('underscore');
var Athlete = require('../models/athlete.js').Athlete;
var AthleteCollection = require('../models/athlete.js').AthleteCollection;
require('backbone-react-component');

var AthleteList = React.createClass({
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
    var user = JSON.parse(localStorage.getItem('user'));
    var athletes = this.state.athleteCollection.map(function(athlete){
      return (
          <li className="col-md-6" key={athlete.get('objectId')}>
            {athlete.get('athleteName')}</li>
      )
    });

    return (
    <div className="col-md-6">
      <h2 className="coach-headings">Hi {user.name}!</h2>
      <h3 className="coach-headings">You are adding athletes to the team: <br/>{user.team}</h3>
      <ul className="athlete-list">
        {athletes}
      </ul>
    </div>
  );
}
});

var AthleteEntry = React.createClass({
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
  handleSubmit: function(e){
    e.preventDefault();
    var newAthlete = new Athlete();
    var coach = JSON.parse(localStorage.getItem('user'));

    newAthlete.set('athleteName', this.state.athleteName );
    newAthlete.set('gender', this.state.gender);
    newAthlete.set('ageGroup', this.state.ageGroup);
    newAthlete.setPointer('coach', coach, '_User');
    newAthlete.save().done(function(){
      console.log(newAthlete.get('athleteName'));
    });
  },
  render: function(){
    return (
      <div className="col-md-6">
        <form id="enter-athlete" onSubmit={this.handleSubmit} className="col-md-12">
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
                 <option>--SELECT--</option>
                 <option>Male</option>
                 <option>Female</option>
               </select>
             </fieldset>
             <fieldset className="form-group">
               <label htmlFor="age-group">Age Group</label>
               <select onChange={this.addAge} className="form-control" id="ageGroup">
                 <option>--SELECT--</option>
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
  getInitialState: function(){
    return {
      'athleteTeam': 'Greenville Jets',
      'name': '',
      'gender': 'Male',
      'event': '100',
      'ageGroup': '8 and Under',
      'athleteCollection': []
    };
  },
  componentWillMount: function(){
    var self = this;
       var athleteCollection = new AthleteCollection();
       athleteCollection.fetch().done(function(){
         self.setState({athleteCollection: athleteCollection});
  });
},
 handleSubmit: function(){
    var router = this.props.router;
   router.navigate('athleteEntry', {trigger: true});
   this.forceUpdate();
 },
render: function(){
  return (
    <div>
      <AthleteEntry />
      <AthleteList athleteCollection={this.state.athleteCollection}/>
    </div>
  );
}
});

module.exports = {
  'AthleteEntry' : AthleteEntry,
  'AthleteView' : AthleteView
};
