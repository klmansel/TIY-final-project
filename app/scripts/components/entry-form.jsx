var React = require('react');
var _ = require('underscore');
var $ = require('jquery');
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
  getInitialState: function(){
    return {
    'athleteName': '',
    'gender': '',
    'event': '',
    'ageGroup' : '',
    'profilePic': ''
    };
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
  handleUpload: function(e){
    var self=this;
    var file;
    var files = e.target.files || e.dataTransfer.files;
     file = files[0];

     var serverUrl = 'https://kmcakes.herokuapp.com/files' +'/'+ file.name;

   $.ajax({
     type: "POST",
     beforeSend: function(request) {
       request.setRequestHeader("X-Parse-Application-Id", 'kmcakes');
       request.setRequestHeader("X-Parse-REST-API-Key", 'greenvillejets');
       request.setRequestHeader("Content-Type", file.type);
     },
     url: serverUrl,
     data: file,
     processData: false,
     contentType: false,
     success: function(data) {
       console.log("File available at: " + data.url);
       var profilePic= data.url;

       self.setState({'profilePic': profilePic});

     },
     error: function(data) {
       var obj = jQuery.parseJSON(data);
       alert(obj.error);
     }
   });
  },

  handleSubmit: function(e){
    e.preventDefault();
    var self = this;
    var newAthlete = new Athlete();
    var coach = JSON.parse(localStorage.getItem('user'));
    console.log(this.state);
    newAthlete.set('athleteName', this.state.athleteName );
    newAthlete.set('gender', this.state.gender);
    newAthlete.set('ageGroup', this.state.ageGroup);
    newAthlete.set('profilePic', this.state.profilePic);
    newAthlete.setPointer('coach', coach, '_User');
    newAthlete.save().done(function(){
      console.log(newAthlete.get('athleteName'));
      $('#fileselect').val = ""
        self.setState({
        'athleteName': '',
        'gender': '',
        'event': '',
        'ageGroup' : '',
        'profilePic': ''
      });
    });
  },
  render: function(){
    console.log(this.state);
    return (
      <div className="container-fluid col-md-6">
        <form name="fileupload" encType="multipart/form-data" method="post" id="enter-athlete" onSubmit={this.handleSubmit} className="col-md-12">
          <h1 className="coach-headings">Add New Athlete</h1>
            <h3 className="coach-headings">Enter New Athlete Information</h3>
              <fieldset className="profile-pic-field form-group">
                <fieldset>
                  <img src={this.state.profilePic} />
                  <label className="profile-pic-field" htmlFor="fileselect">Upload Profile Photo</label>  <i className="fa fa-camera profile-icon" aria-hidden="true"></i>
                  <input className="pic-input" onChange={this.handleUpload} type="file" name="profilepic" id="fileselect"></input>
                </fieldset>
                <label htmlFor="name">Name</label>
                <input value={this.state.athleteName} onChange={this.addAthlete} type="text" className="form-control" id="athleteName"
                placeholder="Enter Athlete's Name"/>
              </fieldset>
              <fieldset className="form-group">
               <label htmlFor="gender">Gender</label>
                 <select value={this.state.gender} onChange={this.addGender} className="form-control" id="gender">
                   <option>--SELECT--</option>
                   <option>Male</option>
                   <option>Female</option>
                 </select>
             </fieldset>
             <fieldset className="form-group">
               <label htmlFor="age-group">Age Group</label>
               <select value={this.state.ageGroup} onChange={this.addAge} className="form-control" id="ageGroup">
                 <option>--SELECT--</option>
                 <option>8 and Under</option>
                 <option>9-10 Years Old</option>
                 <option>11-12 Years Old</option>
                 <option>13-14 Years Old</option>
                 <option>15-16 Years Old</option>
                 <option>17-19 Years Old</option>
               </select>
             </fieldset>
             <ul className="athlete-entry-btn btn-list col-md-3">
               <li><button type="submit" className="submit jets-button"><span>Submit</span></button></li>
               <li><button className="jets-button" type="button"><a href="#">Home</a></button></li>
               <li><button className="jets-button" type="button"><a href="#athleteProfile">View Athlete Profiles</a></button></li>
               <li><button className="jets-button" type="button"><a href="#results">Event Results Entry</a></button></li>
               <li><button className="jets-button" onClick={this.handleSignout} type="button"><a href="#">Log Out</a></button></li>
             </ul>
        </form>


    </div>

    );
  }
});

var AthletePhoto = React.createClass({
  handleUpload: function(e){
    var file;
    var files = e.target.files || e.dataTransfer.files;
     file = files[0];

     var serverUrl = 'https://kmcakes.herokuapp.com/files' +'/'+ file.name;

   $.ajax({
     type: "POST",
     beforeSend: function(request) {
       request.setRequestHeader("X-Parse-Application-Id", 'kmcakes');
       request.setRequestHeader("X-Parse-REST-API-Key", 'greenvillejets');
       request.setRequestHeader("Content-Type", file.type);
     },
     url: serverUrl,
     data: file,
     processData: false,
     contentType: false,
     success: function(data) {
       alert("File available at: " + data.url);
       var profilePic= data.url;
       console.log(profilePic);
       var formData = new FormData();
           formData.append('profilePic', profilePic);

     },
     error: function(data) {
       var obj = jQuery.parseJSON(data);
       alert(obj.error);
     }
   });
  },

  render: function(){
    return (
      <div className="upload-photo row col-md-12">
        <form id="fileupload" name="fileupload" encType="multipart/form-data" method="post">
          <fieldset>
            <input onChange={this.handleUpload} type="file" name="profilePic" id="fileselect"></input>
          </fieldset>
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
      'athleteCollection': [],
      'profilePic': ''
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
   this.clear();
 },
render: function(){
  return (
    <div className="bkg-pages">
      <AthleteEntry  />
      <AthleteList athleteCollection={this.state.athleteCollection}/>
    </div>
  );
}
});

module.exports = {
  'AthleteEntry' : AthleteEntry,
  'AthleteView' : AthleteView
};
