$(document).ready(function(){
  $('.slider-promotion').slick({
    arrows: false,
    dots: true
  });

  $('.navbar').click(function () {
    $('.navigation__menu').toggle('slow')
  });

  function windowSize(){
    if ($(window).width() <= '1060'){
      $('.catalog__title').click(function () {
        $('.catalog__menu').toggle("slow")
      })
    } else {
      $('.catalog__title').unbind('click');
    }
  }
  $(window).on('load resize',windowSize);
});
