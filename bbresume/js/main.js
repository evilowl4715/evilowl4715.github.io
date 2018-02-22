$(document).ready(function(){

     $('.header_img button').mouseover(function() {
      $('.header_img button').css('display', 'none')
      $('.btn_hover').css('display', 'block');
    });
    $('.header_img button').mouseout(function() {
      $('.header_img button').css('display', 'block')
      $('.btn_hover').css('display', 'none');
    });


    $('.sample_resume_slider').slick({
        dots: true,
        arrows: false
    });

    $('.reviews_slider').slick({
        dots: false,
        nextArrow: '<button type="button" class="next_arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
        prevArrow: '<button type="button" class="prev_arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></butto>',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,

              }
            },
            {
              breakpoint: 320,
              settings: {
                arrows: false,
              }
            }
          ]
    });
    $('.how_work_slider').slick({
      arrows: false,
      appendDots:$(".how_work_nav"),
      dots: true,
    });
  });