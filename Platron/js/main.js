$( document ).ready(function() {
	$(".chek").magnificPopup ({
		type : 'image' ,
		gallery : {
			enabled : true
		}
	});

	$('.address-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrow: true,
		nextArrow: '<button type="button" class="address-arrow-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
		prevArrow: '<button type="button" class="address-arrow-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						nextArrow: '<button type="button" class="address-arrow-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
						prevArrow: '<button type="button" class="address-arrow-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
					slidesToShow: 4,
					slidesToScroll: 1
					}
				},
				{
					breakpoint: 1024,
					settings: {
						nextArrow: '<button type="button" class="address-arrow-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
						prevArrow: '<button type="button" class="address-arrow-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
					slidesToShow: 3,
					slidesToScroll: 1
					}
				},
				{
					breakpoint: 768,
					settings: {
						nextArrow: '<button type="button" class="address-arrow-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
						prevArrow: '<button type="button" class="address-arrow-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
					slidesToShow: 2,
					slidesToScroll: 1
					}
				},
			{
				breakpoint: 480,
				settings: {
				nextArrow: '<button type="button" class="address-arrow-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
				prevArrow: '<button type="button" class="address-arrow-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
				slidesToShow: 1,
				slidesToScroll: 1
				}
			},
			{
				breakpoint: 320,
				settings: {
					nextArrow: '<button type="button" class="address-arrow-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
					prevArrow: '<button type="button" class="address-arrow-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
				slidesToShow: 1,
				slidesToScroll: 1
				}
			}
		]
	});

	$('.stock-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrow: true,
		nextArrow: '<button type="button" class="stock-arrow-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
		prevArrow: '<button type="button" class="stock-arrow-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
		responsive: [
					{
						breakpoint: 1024,
						settings: {
							nextArrow: '<button type="button" class="stock-arrow-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
							prevArrow: '<button type="button" class="stock-arrow-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
						slidesToShow: 2,
						slidesToScroll: 1
						}
					},
					{
						breakpoint: 768,
						settings: {
						nextArrow: '<button type="button" class="stock-arrow-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
						prevArrow: '<button type="button" class="stock-arrow-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
						slidesToShow: 2,
						slidesToScroll: 1
						}
					},
				{
					breakpoint: 480,
					settings: {
					nextArrow: '<button type="button" class="stock-arrow-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
					prevArrow: '<button type="button" class="stock-arrow-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
					slidesToShow: 1,
					slidesToScroll: 1
					}
				},
				{
					breakpoint: 320,
					settings: {
					nextArrow: '<button type="button" class="stock-arrow-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
					prevArrow: '<button type="button" class="stock-arrow-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
					slidesToShow: 1,
					slidesToScroll: 1
					}
				}
		  ]
	});




	var activeAddress =	$('.address-slider').find('.address-item');

	$('.address-slider .address-item').click(function() {
		$('.address-slider .address-item').removeClass('item-active');
		$(this).addClass('item-active');
		});

});