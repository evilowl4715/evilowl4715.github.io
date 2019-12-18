$(document).ready(function(){

  $('a[href*="#"]').bind('click', function(e) {
    e.preventDefault();

    let target = $(this).attr("href");

    $('html, body').stop().animate({
      scrollTop: $(target).offset().top
    }, 500, function() {
      location.hash = target;
    });

    return false;
  });


  $('.modal__close').click(function () {
    $('.modal').css('display', 'none');
  });

  $('.services-discount').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    fade: true,
  });


  $('.work__tabs ul li').click(function(){
    let tab_id = $(this).attr('data-tab');

    $('.work__tabs ul li').removeClass('current');
    $('.work__content-item').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  });

  $('.services-page__category').click(function(){
    let tab_id = $(this).attr('data-tab');

    $('.services-page__category').removeClass('current');
    $('.services-page__content').removeClass('current-content');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current-content');
  });

  $('.navbar').click(function () {
    $('.header__mob-menu').toggle('slow');
  });

  $('.more-button-1').click(function (e) {
    let $this = $('.more-button-1');
    let textButton = "скрыть";
    if($this.text() === textButton) {
      $(this).text("подробности");
    } else {
      $this.text(textButton);
    }
    $('.more-text-1').slideToggle();
  });

  $('.more-button-2').click(function (e) {
    let $this = $('.more-button-2');
    let textButton = "скрыть";
    if($this.text() === textButton) {
      $(this).text("подробности");
    } else {
      $this.text(textButton);
    }
    $('.more-text-2').slideToggle();
  });

  $('.more-button-3').click(function (e) {
    let $this = $('.more-button-3');
    let textButton = "скрыть";
    if($this.text() === textButton) {
      $(this).text("подробности");
    } else {
      $this.text(textButton);
    }
    $('.more-text-3').slideToggle();
  });

  $('.more-button-4').click(function (e) {
    let $this = $('.more-button-4');
    let textButton = "скрыть";
    if($this.text() === textButton) {
      $(this).text("подробности");
    } else {
      $this.text(textButton);
    }
    $('.more-text-4').slideToggle();
  });

  $('.more-button-5').click(function (e) {
    let $this = $('.more-button-5');
    let textButton = "скрыть";
    if($this.text() === textButton) {
      $(this).text("подробности");
    } else {
      $this.text(textButton);
    }
    $('.more-text-5').slideToggle();
  });

  $('.more-button-6').click(function (e) {
    let $this = $('.more-button-6');
    let textButton = "скрыть";
    if($this.text() === textButton) {
      $(this).text("подробности");
    } else {
      $this.text(textButton);
    }
    $('.more-text-6').slideToggle();
  });

  $('.more-button-7').click(function (e) {
    let $this = $('.more-button-7');
    let textButton = "скрыть";
    if($this.text() === textButton) {
      $(this).text("подробности");
    } else {
      $this.text(textButton);
    }
    $('.more-text-7').slideToggle();
  });

  $('.more-button-8').click(function (e) {
    let $this = $('.more-button-8');
    let textButton = "скрыть";
    if($this.text() === textButton) {
      $(this).text("подробности");
    } else {
      $this.text(textButton);
    }
    $('.more-text-8').slideToggle();
  });

  $('.more-button-9').click(function (e) {
    let $this = $('.more-button-9');
    let textButton = "скрыть";
    if($this.text() === textButton) {
      $(this).text("подробности");
    } else {
      $this.text(textButton);
    }
    $('.more-text-9').slideToggle();
  });

  $('.more-button-10').click(function (e) {
    let $this = $('.more-button-10');
    let textButton = "скрыть";
    if($this.text() === textButton) {
      $(this).text("подробности");
    } else {
      $this.text(textButton);
    }
    $('.more-text-10').slideToggle();
  });

  $('.services-page__categories').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: `<button type="button" class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>`,
    prevArrow: `<button type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>`,
    responsive: [
      {
        breakpoint: 1251,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: true,
          dots: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          arrows: true,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: true,
          slidesToScroll: 1
        }
      }
    ]
  });
});

$(window).scroll(function(){
  let scrollTop = $(window).scrollTop();
  if (scrollTop > 1) {
    $('.header').css('background', 'rgba(0, 0, 0, 1)');
  } else {
    $('.header').css('background', 'rgba(0, 0, 0, 0.6)');
  }
});

$(window).scroll(function(){
  let scrollTop = $(window).scrollTop();
  if (scrollTop > 800) {
    $('.home .sticky-btn').css('display', 'block');
  } else {
    $('.home .sticky-btn').css('display', 'none');
  }
});

$(window).scroll(function() {

  let scrollDistance = $(window).scrollTop();
  $('section').each(function(i) {
    if ($(this).position().top <= scrollDistance) {
      $('.scroll-menu ul li.current').removeClass('current');
      $('.scroll-menu ul li').eq(i).addClass('current');
    }
  });
}).scroll();
