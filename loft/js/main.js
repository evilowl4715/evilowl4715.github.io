//jQuery is required to run this code
$( document ).ready(function() {
	
			scaleVideoContainer();
	
			initBannerVideoSize('.video-container .poster img');
			initBannerVideoSize('.video-container .filter');
			initBannerVideoSize('.video-container video');
	
			$(window).on('resize', function() {
					scaleVideoContainer();
					scaleBannerVideoSize('.video-container .poster img');
					scaleBannerVideoSize('.video-container .filter');
					scaleBannerVideoSize('.video-container video');
			});
	
	});
	
	function scaleVideoContainer() {
	
			var height = $(window).height() + 5;
			var unitHeight = parseInt(height) + 'px';
			$('.homepage-hero-module').css('height',unitHeight);
	
	}
	
	function initBannerVideoSize(element){
	
			$(element).each(function(){
					$(this).data('height', $(this).height());
					$(this).data('width', $(this).width());
			});
	
			scaleBannerVideoSize(element);
	
	}
	
	function scaleBannerVideoSize(element){
	
			var windowWidth = $(window).width(),
			windowHeight = $(window).height() + 5,
			videoWidth,
			videoHeight;
	
			// console.log(windowHeight);
	
			$(element).each(function(){
					var videoAspectRatio = $(this).data('height')/$(this).data('width');
	
					$(this).width(windowWidth);
	
					if(windowWidth < 1000){
							videoHeight = windowHeight;
							videoWidth = videoHeight / videoAspectRatio;
							$(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});
	
							$(this).width(videoWidth).height(videoHeight);
					}
	
					$('.homepage-hero-module .video-container video').addClass('fadeIn animated');
	
			});
	}

	$(".items").magnificPopup ({
		type : 'image' ,
		gallery : {
			enabled : true
		}
	});

	$('.reviews-slider').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev">Previous</button>',
		nextArrow: '<button type="button" class="slick-next">Previous</button>',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
					arrows: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: true
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: true
				}
			},
			{
				breakpoint: 320,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: true
				}
			}
		]
	});

	
/* Открытие меню */
 
var main = function() { //главная функция
		 $('.icon-menu').click(function() { /* выбираем класс icon-menu и
								добавляем метод click с функцией, вызываемой при клике */
				 $('.left-menu').css('display','none');
				 $('.menu').animate({ //выбираем класс menu и метод animate
	
						 left: '0px' /* теперь при клике по иконке, меню, скрытое за
								левой границей на 285px, изменит свое положение на 0px и станет видимым */
	
				 }, 200); //скорость движения меню в мс
					
				//  $('body').animate({ //выбираем тег body и метод animate
	
				// 		 left: '285px' /* чтобы всё содержимое также сдвигалось вправо
				// 				при открытии меню, установим ему положение 285px */
	
				//  }, 200); //скорость движения меню в мс
		 });
	
 /* Закрытие меню */
	
		 $('.icon-close').click(function() { //выбираем класс icon-close и метод click
				 $('.left-menu').css('display','block');
				 $('.menu').animate({ //выбираем класс menu и метод animate
	
						 left: '-380px' /* при клике на крестик меню вернется назад в свое
								положение и скроется */
	
				 }, 200); //скорость движения меню в мс
					
		//  $('body').animate({ //выбираем тег body и метод animate
	
		// 				 left: '0px' //а содержимое страницы снова вернется в положение 0px
	
		// 		 }, 200); //скорость движения меню в мс
		 });
 };
	
 $(document).ready(main); /* как только страница полностью загрузится, будет
								вызвана функция main, отвечающая за работу меню */

// меняем стиль меню при активном состояние
$('.menu-items').click(function(){
	$('.menu-items').removeClass("menu-active");
	$(this).addClass("menu-active");
});
// плавный якорь скролл
$("a.scrollto").click(function() {
	var elementClick = $(this).attr("href")
	var destination = $(elementClick).offset().top;
	jQuery("html:not(:animated),body:not(:animated)").animate({
		scrollTop: destination
	}, 800);
	return false;
});

// маска на телефон
jQuery(function($){
	$("#phone").mask("+7 (999) 999-9999");
	$("#phone2").mask("+7 (999) 999-9999");
});
var toTop = document.getElementById('toTop');
window.onscroll = function() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var docHeight = window.innerHeight || document.documentElement.offsetHeight;
  if (scrollTop > (docHeight * .2)) {
    toTop.classList.add('show');
  } else {
    toTop.classList.remove('show');
  }
}
ymaps.ready(init);
var myMap, 
myPlacemark;

//Инициализируем нашу карту, задав ей координаты, устанавливаем масштаб карты
function init(){ 
	myMap = new ymaps.Map("map", {
		center: [55.983988, 92.845744],
		zoom: 16,
	}); 

//Пишем свойства для нашей метки
	myPlacemark = new ymaps.Placemark([55.983988, 92.845744], {
		// hintContent: 'Тут описание, которое всплывает при наведении',
		// balloonContent: ''
	}, {
					// Опции.
					// Необходимо указать данный тип макета. Показываем что это изображение.
					iconLayout: 'default#image',
					// Своё изображение иконки метки. Указываем путь до картинки
					iconImageHref: 'img/map.png',
					// Размеры метки. 
					iconImageSize: [14, 22],
					// Смещение левого верхнего угла иконки относительно её "ножки" (точки привязки).
					iconImageOffset: [1, -20]
				});            
	//Добавляем метку на карту + убираем скролл мышкой 
	myMap.geoObjects.add(myPlacemark);  
	myMap.behaviors.disable('scrollZoom');
	myMap.controls.remove('searchControl');
}