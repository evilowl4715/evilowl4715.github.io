$( document ).ready(function() {
			$('#myTabs a').click(function (e) {
				e.preventDefault()
				$(this).tab('show')
			})


			$(".items").magnificPopup ({
				type : 'image' ,
				gallery : {
					enabled : true
				}
			});
			$(".items-reviews").magnificPopup ({
				type : 'image' ,
				gallery : {
					enabled : true
				}
			});



			$('.content-slider').slick({
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				vertical: true,
				verticalSwiping: true,
				autoplay: true,
				autoplaySpeed: 3000,
				infinite: true,
				// dots: true

			});
						

			//создаем переменные "Карта" и "Метка"
			ymaps.ready(init);
			var myMap, 
			myPlacemark;

			//Инициализируем нашу карту, задав ей координаты, устанавливаем масштаб карты
			function init(){ 
				myMap = new ymaps.Map("map", {
					center: [56.050672, 92.915481],
					zoom: 16,
				}); 
			//Пишем свойства для нашей метки
				myPlacemark = new ymaps.Placemark([56.050672, 92.915481	], {
					hintContent: 'ул. Алексеева 29',
					balloonContent: ''
				}, {
								// Опции.
								// Необходимо указать данный тип макета. Показываем что это изображение.
								iconLayout: 'default#image',
								// Своё изображение иконки метки. Указываем путь до картинки
								iconImageHref: 'img/marker-map.png',
								// Размеры метки. 
								iconImageSize: [32, 32],
								// Смещение левого верхнего угла иконки относительно её "ножки" (точки привязки).
								// iconImageOffset: [, ]
							});            
				//Добавляем метку на карту + убираем скролл мышкой 
				myMap.geoObjects.add(myPlacemark);  
				myMap.behaviors.disable('scrollZoom');
				myMap.controls.remove('searchControl');
			}


			$('#myModal').on('shown.bs.modal', function () {
				$('#myInput').focus()
			})



			jQuery(function($){
				$(".phone-mask").mask("+7(999) 999-9999");
			});

			$('.menu-burger').click(function() {
				$('.myMenu').slideToggle(500);
			});
});

