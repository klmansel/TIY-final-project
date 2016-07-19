var React = require('react');
var User = require('../models/User').User;

var AthleteEntry = React.createClass({
  handleSubmit: function(){
    return (
      alert('form submitted!')
    )
  },
  render: function(){
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="col-md-6">
          <h1>Coach Stat Tracker</h1>
            <h3>Enter New Athlete Information</h3>
              <fieldset className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="athlete-name"
                placeholder="Enter Athlete's Name"/>
              </fieldset>
              <fieldset className="form-group">
               <label htmlFor="gender">Gender</label>
               <select className="form-control" id="gender">
                 <option>Male</option>
                 <option>Female</option>
               </select>
             </fieldset>
             <fieldset className="form-group">
               <label htmlFor="event">Event</label>
               <select className="form-control" id="event">
                 <option>100</option>
                 <option>200</option>
                 <option>400</option>
                 <option>800</option>
                 <option>1500</option>
                 <option>Long Jump</option>
               </select>
             </fieldset>
             <fieldset className="form-group">
               <label htmlFor="Age Group">Age Group</label>
               <select className="form-control" id="age-group">
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
        </div>
    );
  }
});

var Results = React.createClass({
  render: function(){
    return (
      <div>


      </div>

    );
  }

});
module.exports = {
  'AthleteEntry' : AthleteEntry,
  'Results' : Results
};
