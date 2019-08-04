$(document).ready(function(){

  $('.header__slider').slick({
    dots: false,
    arrows: false,
    fade: true,
    speed: 1000,
    infinite: true,
    cssEase: 'ease-in-out',
    touchThreshold: 100,
    autoplay: true
  });

  $('.header__instagram img').click(function () {
    $('.iframely-embed').toggleClass('iframely-embed-show');
    // $('.iframely-embed').removeClass('iframely-embed-show').delay(2000);
  });

});
