var React = require('react');
var slick = require('slick-carousel');

var SlideshowView = React.createClass({
  componentDidMount: function(){
    jQuery('.jetspics').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
    });
  },
  render: function(){
    return (
      <div className="row col-md-10 col-md-offset-1 bkg-pages">
        <div className="jetspics">
          <div><img src="images/jets2015.jpg" alt="jets2015"></img></div>
          <div><img src="images/jetspic1.jpg" alt="jets2015"></img></div>
          <div><img src="images/jetspic4.jpg" alt="jets2015"></img></div>
          <div><img src="images/jetspic2.jpg" alt="jetspic2"></img></div>
          <div><img src="images/jets2016.jpg" alt="jets2016"></img></div>
          <div><img src="images/vandel.jpg" alt="jets2016"></img></div>
          <div><img src="images/smm1.jpg" alt="jets2016"></img></div>
        </div>
      </div>
    );
  }

});

module.exports = SlideshowView;
