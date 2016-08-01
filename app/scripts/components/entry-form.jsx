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

             <button type="submit" className="submit jets-button">Submit</button>
             <button className="jets-button" type="button"><a href="#">Home</a></button>
             <button className="jets-button" type="button"><a href="#athleteProfile">Athlete Profiles</a></button>
             <button className="jets-button" type="button"><a href="#results">Event Results Entry</a></button>
             <button className="jets-button" onClick={this.handleSignout} type="button"><a href="#">Log Out</a></button>

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


   $('#uploadbutton').click(function() {
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
          //  newAthlete.set('profilepic', profilePic);

     },
     error: function(data) {
       var obj = jQuery.parseJSON(data);
       alert(obj.error);
     }


   });
 });
  },

  render: function(){
    return (
      <div className="upload-photo row col-md-12">
        <form id="fileupload" name="fileupload" encType="multipart/form-data" method="post">
          <fieldset>
            <input onChange={this.handleUpload} type="file" name="profilepic" id="fileselect"></input>
            <input className="jets-button" id="uploadbutton" type="button" value="Upload Profile Photo"/>
          </fieldset>
        </form>
      </div>
    );
  }
});

var ProfileView = React.createClass({
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
    var selectedAge = $('#filteredAgeGroup option:selected').val();
    console.log(selectedAge);
      this.setState({'selectedAge': e.target.value});
  },
  render: function(e){
    var user = JSON.parse(localStorage.getItem('user'));
    var selectedAge = $('#filteredAgeGroup option:selected').val();
    var filterByAge= this.state.athleteCollection.where({
     'ageGroup': '9-10 Years Old'
   }).map(function(model){
     return (
     <li className="athlete-list" key={model.get('objectId')}>{model.get('athleteName')}</li>
     );

    });

    return (
      <div className="row">
        <div className="col-md-6">
          <h1 className="coach-headings">{user.team}</h1>
            <fieldset className="form-group">
              <label htmlFor="age-group">Age Group</label>
              <select onChange={this.selectAge} className="form-control" id="filteredAgeGroup">
                <option>--SELECT--</option>
                <option>8 and Under</option>
                <option>9-10 Years Old</option>
                <option>11-12 Years Old</option>
                <option>13-14 Years Old</option>
                <option>15-16 Years Old</option>
                <option>17-19 Years Old</option>
              </select>
            </fieldset>
        </div>
        <div className="col-md-6">
          <p>Age Group {}</p>
            <ul>{filterByAge}</ul>
        </div>
      </div>

    )
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
      'profilepic': {}
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
      <AthleteEntry />
      <AthleteList athleteCollection={this.state.athleteCollection}/>
      <AthletePhoto />
      <ProfileView />
    </div>
  );
}
});

module.exports = {
  'AthleteEntry' : AthleteEntry,
  'AthleteView' : AthleteView
};
