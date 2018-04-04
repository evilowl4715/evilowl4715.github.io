$(document).ready(function(){
	
	jQuery(function($){
		$(".mask_phone").mask("+7 (999) 999-9999");
	});

  $("a.scrollto").click(function () {
		var elementClick = $(this).attr("href")
		var destination = $(elementClick).offset().top;
		jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
		return false;
	});

});