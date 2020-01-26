$(document).ready(function(){
  $('.callback').click(function () {
    $('.modal').css('display', 'flex');
  });
  $('.close').click(function () {
    $('.modal').css('display', 'none');
  });
  $('.phone').mask('+7 (999) 999-9999');

  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  });

  $('.banner__slider').slick({
    infinite: true,
    dots: false,
    prevArrow: `<button type="button" class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>`,
    nextArrow: `<button type="button" class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>`
  });

  $('.catalog__slider').slick({
    infinite: true,
    dots: false,
    prevArrow: `<button type="button" class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>`,
    nextArrow: `<button type="button" class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>`
  });

  $('.similar-products__slider').slick({
    infinite: true,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: `<button type="button" class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>`,
    nextArrow: `<button type="button" class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>`
  });

  let $counter_slides = $('.reviews__counter-slide .current');
  let $slides_all = $('.reviews__counter-slide .all');
  let $reviews__slider = $('.reviews__slider');
  $reviews__slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    $slides_all.text(slick.slideCount);
    let i = (currentSlide ? currentSlide : 0) + 1;
    $counter_slides.text(i + '/');
  });

  $reviews__slider.slick({
    infinite: true,
    dots: false,
    prevArrow: `<button type="button" class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>`,
    nextArrow: `<button type="button" class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>`
  });

  $('.catalog__tabs ul').on('click', 'li:not(.current)', function() {
    $(this)
      .addClass('current').siblings().removeClass('current')
      .closest('.catalog').find('.catalog__slider').removeClass('catalog-active').eq($(this).index()).addClass('catalog-active');
  });

  $('.product-card__info-tabs ul').on('click', 'li:not(.current)', function() {
    $(this)
      .addClass('current').siblings().removeClass('current')
      .closest('.product-card__info-more').find('.product-card__info-desc').removeClass('active-desc').eq($(this).index()).addClass('active-desc');
  });


  $('.product-card__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: true,
    asNavFor: '.product-card__slider-nav'
  });
  $('.product-card__slider-nav').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.product-card__slider',
    dots: false,
    prevArrow: `<button type="button" class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>`,
    nextArrow: `<button type="button" class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>`,
    focusOnSelect: true
  });
});
