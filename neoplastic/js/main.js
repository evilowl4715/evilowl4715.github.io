$(document).ready(function(){

	$('.list_city').click(function() {
		$('.submenu').stop().slideToggle('slov')
	});
	$('.burger').click(function() {
		$('.mob_submenu').stop().slideToggle('slov')
	});

	$('.open_more').click(function() {
		$('.gallery_mob_hide').stop().slideToggle('slov')
	});
	$('.slider_banner').slick({
		nextArrow: '<button type="button" class="banner_slick_next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
		prevArrow: '<button type="button" class="banner_slick_prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
	});

	$('.slider_gallery').slick({
		nextArrow: '<button type="button" class="gallery_slick_next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
		prevArrow: '<button type="button" class="gallery_slick_prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>'
	});

	$('.reviews_slider').slick({
		nextArrow: '<button type="button" class="reviews_slick_next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
		prevArrow: '<button type="button" class="reviews_slick_prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>'
	});

	$('.letters_slider').slick({
		centerMode: true,
		nextArrow: '<button type="button" class="letters_slick_next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
		prevArrow: '<button type="button" class="letters_slick_prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
		appendDots:$(".letters_nav"),
		dots: true
	});
	$('.letters_slider_mob').slick({
		arrows: false,
		dots: true,
		appendDots:$(".letters_slider_mob_nav"),
	});
	$('.vantageMob_slider').slick({
		appendDots:$(".vantageMob_nav"),
		dots: true,
		arrows: false
	});

	jQuery(function($){
		$(".phone_mask").mask("+7 (999) 999-9999");
	});

	$('.letters_item').magnificPopup({type:'image'});

	$(".scrollto").click(function() {
		var elementClick = $(this).attr("href")
		var destination = $(elementClick).offset().top;
		jQuery("html:not(:animated),body:not(:animated)").animate({
		  scrollTop: destination
		}, 800);
		return false;
	 });

 });