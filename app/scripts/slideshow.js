var $ = require('jquery');

//Show Multple slides

$(document).ready(function(){
  $('.your-class').slick({
    'setting-name': 'setting-value'
  });
});

$('.jetspics').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});
