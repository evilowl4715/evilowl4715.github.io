$(document).ready(function(){
  $('.callback').click(function () {
    $('.modal').css('display', 'flex');
  });
  $('.close').click(function () {
    $('.modal').css('display', 'none');
  });
  $('.phone').mask('+7 (999) 999-99-99');
});
