var React = require('react');

var Schedule = React.createClass({
  render: function(){
    return (
      <div className="row col-md-10 col-md-offset-1">
        <h1 className="coach-headings">2016 Schedule and Results</h1>
          <ul className="schedule-list well">
            <li className="schedule-event">April 2 Runnin on Faith Eastside High School Taylors, SC<a> Canceled</a></li>
            <li className="schedule-event">April 23 Stan Staggs Invitational Spartanburg Elite Chapman High School Inman, SC<a href="#"> Results</a></li>
            <li className="schedule-event">April 30 Bring The Heat Invitational Charlotte Heat Track Club Rocky River High School Charlotte, NC<a href="#">Results</a></li>
            <li className="schedule-event">May 21 Battle of the Borders Greer All Stars Eastside High School Taylors, SCs<a href="#"> Results</a></li>
            <li className="schedule-event">May 28-29 Mark Trails Memorial Day Invite West Lake High School Atlanta, GA<a href="#"> Results</a></li>
            <li className="schedule-event">June 4-5 AAU State Championship Eastside High School Taylors, SC<a href="http://www.ptgrouponline.com/Live/2016/Youth/SC-AAU/"> Results</a></li>
            <li className="schedule-event">June 11-12 USATF State Championship Eastside High School Taylors, SC<a href="#"> Results</a></li>
            <li className="schedule-event">June 17 5th Annual Greenville Jets Track Club Invitational Hillcrest High School Simpsonville, SC<a href="#"> Results</a></li>
            <li className="schedule-event">June 23-25 AAU Regional Championship Savannah State University Savannah, GA<a href="#"> Results</a></li>
            <li className="schedule-event">July 7-10 USATF Regional Championship<a href="#"> Results</a></li>
            <li className="schedule-event">July 30-Aug 6 AAU Junior Olympics (National Championships Houston, TX<a href="#"> Results</a></li>
          </ul>
<iframe width="600" height="450" frameBorder="0"
  src="https://www.google.com/maps/embed/v1/directions?origin=place_id:ChIJBRH6YmaPV4gRlnYlv3edqtg&destination=place_id:ChIJLwkGX_crWIgR-KTPJBCNYBE&key=AIzaSyC1lJUsF_8rqOo5qc0IIlqspDyrvlUca4g"
  allowFullScreenullscreen></iframe>
<p><a className="jets-button" href="#">Jets Homepage</a></p>
      </div>
    );
  }

});



module.exports = Schedule;
