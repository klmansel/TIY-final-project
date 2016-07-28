var React = require('react');
var slick = require('slick-carousel');

var SlideshowView = React.createClass({
  componentDidMount: function(){
    jQuery('.jetspics').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true
    });
  },
  render: function(){
    return (
      <div className="row col-md-10 col-md-offset-1">
        <div className="jetspics">
          <div><img src="images/jets2015.jpg" alt="jets2015"></img></div>
          <div><img src="images/jetspic2.jpg" alt="jetspic2"></img></div>
          <div><img src="images/jets2016.jpg" alt="jets2016"></img></div>
        </div>
          <button type="button"><a href="#">Home</a></button>
      </div>
    );
  }

});

module.exports = SlideshowView;
