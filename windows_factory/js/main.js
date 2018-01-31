$(document).ready(function(){
	$('.slider').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		prevArrow: '<button type="button" class="prev"></button>',
		nextArrow: '<button type="button" class="next_slid"></button>',
		dots: true
	});

	$('.portfolio_slider').slick({
		prevArrow: '<button type="button" class="prev"></button>',
		nextArrow: '<button type="button" class="next_slid"></button>',
		dots: false,
	});

	$('.reviews_slider').slick({
		prevArrow: '<button type="button" class="prev"></button>',
		nextArrow: '<button type="button" class="next_slid"></button>',
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true
	});


	// prevfooter

	$(window).scroll(function(){
		let scrollTop = $(window).scrollTop();
		if (scrollTop > 400 && scrollTop < 8000) {
		  $('#prevfooter').css('display', 'block');
		} else {
		  $('#prevfooter').css('display', 'none');
		}
	});
	window.addEventListener('resize', function() {
	  let elem;
	  if (elem = document.querySelector('#prevfooter')) {
		 if (window.innerWidth < 1200) elem.classList.add('hide_prevfooter');
		 else elem.classList.remove('hide_prevfooter');
	  }
	});
	window.dispatchEvent(new Event('resize'));

	// штрихкод
	$('#nightShare').on('shown.bs.modal', function (e) {
		let canvas = document.querySelector('.bitter .bitter_canvas');
		let ctx = canvas.getContext('2d');
		let radius = 5;
		let down = false;
		let img = new Image()
		img.src = 'img/barcode.png';
		img.onload = function() {
			canvas.width = canvas.offsetWidth;
			canvas.height = canvas.offsetHeight;
			document.querySelector('.bitter').style.visibility = 'visible';
			ctx.drawImage(img, 0, 0);
			ctx.globalCompositeOperation = 'destination-out';
			canvas.addEventListener('mousedown', function(e) {
				down = true
			});
			canvas.addEventListener('mouseup', function(e) {
				down = false
			});
			canvas.addEventListener('mousemove', function(e) {
				if (down) {
					let x = e.offsetX || e.layerX;
					let y = e.offsetY || e.layerY;
				  //  console.log(x, y)
					ctx.beginPath();
					ctx.arc(x, y, radius, 0, Math.PI*2, true);
					ctx.fill();
				}
			})
		}
	 })


	jQuery(function($){
		$(".mask_phone").mask("+7 (999) 999-9999");
	});
 });
