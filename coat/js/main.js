$(document).ready(function(){
	var clock;

	clock = $('.clock').FlipClock({
				clockFace: 'DailyCounter',
				autoStart: false,
				showSeconds: false,
				countdown: true,
				language:'ru-ru',
				callbacks: {
					stop: function() {
						$('.message').html('The clock has stopped!')
					}
				}
		});
				
		clock.setTime(3600 * 24 * 2);
		clock.setCountdown(true);
		clock.start();

	
	// jQuery(function($){
	// 	$(".mask_phone").mask("+7 (999) 999-9999");
	// });

  $("a.scrollto").click(function () {
		var elementClick = $(this).attr("href")
		var destination = $(elementClick).offset().top;
		jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
		return false;
	});
	 $('.banner-slider').slick({
		nextArrow: '<button type="button" class="banner-next"><i class="fa fa-arrow-right" aria-hidden="true"></i></button>',
		prevArrow: '<button type="button" class="banner-prev"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>',
    infinite: true,
    slidesToShow: 1,
	});
	$('.offer-slider').slick({
		nextArrow: '<button type="button" class="offer-next"><i class="fa fa-arrow-right" aria-hidden="true"></i></button>',
		prevArrow: '<button type="button" class="offer-prev"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>',
    infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3
	});
	$('.partners-slider').slick({
		nextArrow: '<button type="button" class="partners-next"><i class="fa fa-arrow-right" aria-hidden="true"></i></button>',
		prevArrow: '<button type="button" class="partners-prev"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>',
    infinite: true,
		slidesToShow: 5,
		slidesToScroll: 5
	});
	$('.reviews-slider').slick({
		nextArrow: '<button type="button" class="reviews-next"><i class="fa fa-arrow-right" aria-hidden="true"></i></button>',
		prevArrow: '<button type="button" class="reviews-prev"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>',
    infinite: true,
    slidesToShow: 1
	});

});