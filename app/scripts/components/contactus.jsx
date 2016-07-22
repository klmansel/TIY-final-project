var React = require('react');

var ContactInfo = React.createClass({
  render: function(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <h3 className="coach-headings">Contact Us</h3>
            <p>Would you like to become a Greenville Jet?
              Call Willie Goolsby (864)901-1869 or Adrique Heyward (864)561-5134 or

              Contact us about our meets and training schedule.
              Practices are held Monday,Tuesday, and Thursday at 6:00pm.
              In June practices are 4-5 days a week and continue this way until
              the end of the season in late July.</p>
          </div>
        </div>
      </div>
    )

  }

});

module.exports = ContactInfo;
