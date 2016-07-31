var React = require('react');
var JetsPage = require('../components/jets-site.jsx').JetsPage;

var ContactInfo = React.createClass({
  render: function(){
    return (
        <div className="container">
          <div className="row">
            <div className="bkg-pages col-md-6">
              <h3 className="coach-headings">Contact Us</h3>
              <p className=" contact-us">Would you like to become a Greenville Jet?<br/>
                Call Willie Goolsby (864)901-1869 or Adrique Heyward (864)561-5134<br/>

                Practices are held Monday,Tuesday, and Thursday at 6:00pm  at the JL Mann High School track.<br/>

                In June practices are 4-5 days a week,
                and continue this way until the end of the season in late July.</p>
              <button className="jets-button" type="button"><a href="#">Home</a></button>
            </div>
            <div className="jets-map col-md-6">
              <iframe width="400" height="350" frameBorder="0"
                src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJP_X4XnovWIgR9MTYXuJZTp4&key=AIzaSyC1lJUsF_8rqOo5qc0IIlqspDyrvlUca4g"
                allowFullScreen></iframe>
            </div>
          </div>
        </div>
      )
  }

});

var ContactInfoView = React.createClass({
  render: function(){
    return (
      <div>
        <JetsPage />
        <ContactInfo />
     </div>
   );
 }
});
module.exports = ContactInfo;
