function numberPages() {
    var range=document.getElementById('page');
    var number=document.getElementById('number__pages');
    number.innerHTML=range.value;
}


$(document).ready(function(){

    $('.show__sub').click(function() {
        $('.sub__menu').stop().slideToggle('slov')
    });

    $.fn.datepicker.language['eng'] =  {
    days: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    daysShort: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
    daysMin: ['Su','Mo','Tu','We','Th','Fr','Sa'],
    months: ['January','February','March','April','May','June','July','August','September','October','November','December'],
    monthsShort: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Des'],
    today: 'Today',
    clear: 'Clear',
    dateFormat: 'dd.mm.yyyy',
    timeFormat: 'hh:ii',
    firstDay: 1
    };

    $('.datepicker-here').datepicker({
        language: 'eng',
        dateFormat: 'MM d, yyyy',
        position: 'bottom center',
        clearButton: true,
    });


    $('.slider').slick({
        prevArrow: '<button type="button" class="reviews__prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
        nextArrow: '<button type="button" class="reviews__next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
    });

    $('.slider__sample').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: '<button type="button" class="sample__prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
        nextArrow: '<button type="button" class="sample__next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
        appendDots:$(".sample__nav"),
        dots: true,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 320,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });
});