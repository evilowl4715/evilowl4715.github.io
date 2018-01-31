$( document ).ready(function() {
	$('.sl').slick({
		// autoplay: true,
		autoplaySpeed: 5000,
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					dots: true,
					arrows: false
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					dots: true,
					arrows: false
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
					arrows: false
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
					arrows: false
				}
			},
			{
				breakpoint: 320,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
					arrows: false
				}
			}
		]
  });

  $("a.scrollto").click(function () {
		var elementClick = $(this).attr("href")
		var destination = $(elementClick).offset().top;
		jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
		return false;
		});
			//установим значение radio
		$('.js-radio').click(function(){
			if(!$(this).hasClass('checked')) {
				$(this).parent().find('.js-radio').removeClass('checked').find('input').removeAttr('checked');
				$(this).addClass('checked').find('input').attr('checked', 'checked');
			}
			recalc();
		});
		$('.inp_txt').keyup(function(){recalc()});
			//reset калькулятор
	$('.js-reset').click(function(){
		$('.js-radio').removeClass('checked');
		$('.js-radio .inp_radio').removeAttr('checked');
		$('.gender').children('.js-radio').first().addClass('checked').find('.inp_radio').attr('checked', 'checked');
		$('.activity').children('.js-radio').first().addClass('checked').find('.inp_radio').attr('checked', 'checked');
		$('.target').children('.js-radio').first().addClass('checked').find('.inp_radio').attr('checked', 'checked');
		$('.params').find('input').val('');
		$('.js-resut').html('');
	});
	//расчет по введенным данным
function recalc(){
	var gender, activity, target, age, growth, mass, result;
	$('.gender').find('.inp_radio').each(function(){if($(this).attr('checked') == 'checked') gender = $(this).val();});
	$('.activity').find('.inp_radio').each(function(){if($(this).attr('checked') == 'checked') activity = $(this).val();});
	$('.target').find('.inp_radio').each(function(){if($(this).attr('checked') == 'checked') target = $(this).val();});
	age = $('.age').val();
	growth = $('.growth').val();
	mass = $('.mass').val();
	if(age && growth && mass){
		if(gender == 'male'){
			result = ((9.99*mass)+(6.25*growth)-(4.92*age)+5)*activity*target;
		}
		else{
			result = ((9.99*mass)+(6.25*growth)-(4.92*age)-161)*activity*target;
		}
		$('.price1').removeClass('active');
		$('.price2').removeClass('active');
		$('.price3').removeClass('active');
		$('.price4').removeClass('active');
	
		if (result >=1200 && result < 1499) {
			$('.price1').addClass('active');
		}
		if (result >= 1500 && result < 1799) {
			$('.price2').addClass('active');
		}
		if (result >= 1800 && result < 2199) {
			$('.price3').addClass('active');
		}
		if (result >= 2200 ) {
			$('.price4').addClass('active');
		}
		$('.js-resut').html(result.toFixed(0)+' <span>ккал</span>');
	}
	else $('.js-resut').html('');
	}
	
});