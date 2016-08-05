var React = require('react');
var slick = require('slick-carousel');

var SlideshowView = React.createClass({
  componentDidMount: function(){
    jQuery('.jetspics').slick({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
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
  ]
});
  },
  render: function(){
    return (
      <div className="row bkg-pages">
            <button className="profile-btns nav-button" type="button">
              <a href="#">Home</a></button>
        <div className="row col-md-10 col-md-offset-1 jetspics">
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
