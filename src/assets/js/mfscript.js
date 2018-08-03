$(document).ready(function(){


$('.rating').rating({
  filled: 'fa fa-star',
  empty: 'fa fa-star-o',
});

 var slide_range = $('input[type="range"]').rangeslider({
      polyfill: false,
      onSlide: function(position, value) {
      //console.log(value);
        $('.range-app').html(value);

      },
  }); 


$('#owl-home').slick({
  dots: true,
  infinite: false,
  speed: 300,
  prevArrow: false,
  nextArrow: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
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

$('#owl-invest').slick({
  dots: false,
  infinite: false,
  speed: 300,
  prevArrow: false,
  nextArrow: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
         dots: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
         dots: false,
      }
    }

  ]
});
// active year

$('.period-year li a').click(function(){
  $('.period-year li a').removeClass('active');
  $(this).addClass('active');
});


// 
$('.investing-link li a').click(function (argument) {
  $('.investing-link li a').removeClass('active');
  $(this).addClass('active');
  var fund_data = $(this).data('fund');
  $('.fund-detail').hide();
  $('#'+fund_data).show();
  //alert(fund_data);
});



});