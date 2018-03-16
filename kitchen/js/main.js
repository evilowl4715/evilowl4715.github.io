$(document).ready(function(){
	
  $(".popupimg").magnificPopup ({
    type : 'image' ,
    gallery : {
      enabled : true
    }
  });

  $('.open__more').click(function() {
		$('.gallery__hide').stop().slideToggle('slov')
	});

	jQuery(function($){
		$(".phone__mask").mask("+7 (999) 999 99 99");
	});

  $(".feedback").submit(function(e) {
    e.preventDefault();
    var formData = new FormData($(this)[0]);
    var that = $(this)[0];
    $.ajax({
      url: "mail.php",
      type: "POST",
      data: formData,
      async: false,
      cache: false,
      contentType: false,
      processData: false
    }).done(function() {
      $(that).trigger("reset").find("input").val("");
      alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
    });

  });
});