
$(document).ready(function() {
	
		$('.feedback').submit(function(event){
			event.preventDefault();
			var _this = $(this);
			$.ajax({
				type: "POST",
				url: "mail.php",
				data: _this.serialize()
			}).done(function() {
				_this.trigger("reset").find("input").val("");
				alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			});
			return false;
		});
		


		$("a.anchor").click(function() {
      var elementClick = $(this).attr("href")
      var destination = $(elementClick).offset().top;
      jQuery("html:not(:animated),body:not(:animated)").animate({
        scrollTop: destination
      }, 800);
      return false;
    });
	});