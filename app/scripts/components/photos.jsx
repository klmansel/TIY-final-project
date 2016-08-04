var React = require('react');
var slick = require('slick-carousel');

var SlideshowView = React.createClass({
  componentDidMount: function(){
    jQuery('.jetspics').slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
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

        <div className="row col-md-12">
          <button className="jets-button" type="button"><a href="#">Home</a></button>
        </div>
      </div>
    );
  }

});

module.exports = SlideshowView;
