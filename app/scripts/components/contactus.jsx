var React = require('react');


var ContactInfo = React.createClass({
  render: function(){
    return (
        <div className="container-fluid bkg-pages">
          <nav className="row">
            <button className="profile-btns nav-button" type="button">
              <a href="#">Home</a></button>
          </nav>
          <div className="row">
            <div className="col-md-6">
              <h3 className="coach-headings">Contact Us</h3>
              <p className="contact-us">Would you like to become a Greenville Jet?
                Call Willie Goolsby (864)901-1869 or Adrique Heyward (864)561-5134</p>

              <p className="contact-us"> Practices are held Monday,Tuesday, and
                Thursday at 6:00pm  at the JL Mann High School track.<br/>

                In June practices are 4-5 days a week,
                and continue this way until the end of the season in late July.</p>

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


module.exports = ContactInfo;
