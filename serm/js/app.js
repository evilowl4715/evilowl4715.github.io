$(function() {
  $('.callback').on('click', function() {
    $('.modal').css('display', 'flex');
  });
  $('.close').on('click', function() {
    $('.modal').css('display', 'none');
  });
  $('.results-work__slider').slick({
    arrows: false
  });
  $('.slide__next').on('click', function() {
    $('.results-work__slider').slick('slickNext');
  });
  $('.slide__prev').on('click', function() {
    $('.results-work__slider').slick('slickPrev');
  });
  $("a.anchor").click(function() {
    $("html, body").animate({
       scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
       duration: 500,
       easing: "swing"
    });
    return false;
  });
  $( '.lightzoom' ).lightzoom( {
    speed:                 400,   // скорость появления
    imgPadding:            10,    // значение отступа у изображения
    overlayOpacity:        '0.5', // прозрачность фона (от 0 до 1)
    viewTitle:             true, // true, если надо показывать подпись к изобажению
    isOverlayClickClosing: true, // true, если надо закрывать окно при клике по затемненной области
    isWindowClickClosing:  true, // true, если надо закрывать окно при клике по любой области
    isEscClosing:          true  // true, если надо закрывать окно при нажатии на кнопку Esc
  } );
});
