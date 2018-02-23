$(".subgenre").select2({
    width: 'resolve' // need to override the changed default
});


//открытые фильтры

$('.button_genre').click(function() {
    $('.button_genre').toggleClass('button_filtrs_open')
    $('.filtr_genre').toggleClass('filtr_genre_open');
});

$('.button_party').click(function() {
    $('.button_party').toggleClass('button_filtrs_open')
    $('.filtr_party').toggleClass('filtr_party_open');
});

$('.button_frilance').click(function() {
    $('.button_frilance').toggleClass('button_filtrs_open')
    $('.filtr_frilance').toggleClass('filtr_frilance_open');
});


var elm = document.querySelector('#range_part');
var container = elm.parentNode;
var values = elm.getAttribute('data-values').split(' ');

values.forEach(function (value, i, values) {
  var rangePart = elm.cloneNode();
  rangePart.type = 'range';
  rangePart.removeAttribute('data-values');
  rangePart.value = value;
  rangePart = container.insertBefore(rangePart, elm);
});

elm.remove();