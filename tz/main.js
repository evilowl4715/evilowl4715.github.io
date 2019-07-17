$(document).ready(function(){
  $('#checkboxLocation').click(function () {
    $('.location').toggle();
  });

  $('.owner-item').addClass('not-active');
  $('.individual-item').addClass('not-active');
  $('.individual-owner-item').addClass('not-active');

  $('input[type="radio"][name="employment_type"]').change(function() {
    if (this.value === "hiring") {
      $('.hiring-item').removeClass('not-active');
      $('.hiring-owner-item').removeClass('not-active');
      $('.owner-item').addClass('not-active');
      $('.individual-item').addClass('not-active');
      $('.individual-owner-item').addClass('not-active');
    } else if (this.value === "individual") {
      $('.individual-item').removeClass('not-active');
      $('.individual-owner-item').removeClass('not-active');
      $('.hiring-item').addClass('not-active');
      $('.owner-item').addClass('not-active');
      $('.hiring-owner-item').addClass('not-active')
    } else if (this.value === "owner") {
      $('.owner-item').removeClass('not-active');
      $('.hiring-owner-item').removeClass('not-active');
      $('.individual-owner-item').removeClass('not-active');
      $('.hiring-item').addClass('not-active');
      $('.individual-item').addClass('not-active');
    }
  });
});
