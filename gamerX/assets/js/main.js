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

  $('.games__slider').slick({
    infinite: true,
    dots: false
  });
  $('.free__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    fade: true,
    asNavFor: '.free__slider-nav'
  });
  $('.free__slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    asNavFor: '.free__slider',
    dots: false,
    arrows: false,
    focusOnSelect: true,
    draggable: false
  });

  $('.reviews__slider').slick({
    infinite: true,
    dots: false
  });

  $('.open-download').click(function () {
    $('.popup').css('display', 'flex');
  });
  $('.download').click(function () {
    $('.popup').css('display', 'none')
  });
  $('.navbar').click(function () {
    $('.header__mob-menu').toggle('slow');
  });
});
