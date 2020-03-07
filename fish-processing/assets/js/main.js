$(document).ready(function(){
  $('.callback').click(function () {
    $('.modal-callback').css('display', 'flex');
  });
  $('.btn-course').click(function () {
    $('.modal-course').css('display', 'flex');
  });
  $('.close').click(function () {
    $('.modal').css('display', 'none');
  });
  $('.navbar').click(function () {
    $('.header__menu').slideToggle();
  });
  $('.phone').mask('+7 (999) 999-9999');

  $('.snacks-open').click(function () {
    $('.snacks').css('display', 'flex');
  });
  $('.drying-open').click(function () {
    $('.drying').css('display', 'flex');
  });
  $('.smoking-open').click(function () {
    $('.smoking').css('display', 'flex');
  });
  $('.pickles-open').click(function () {
    $('.pickles').css('display', 'flex');
  });
  $('.preserve-open').click(function () {
    $('.preserve').css('display', 'flex');
  });
  $('.semifinished-open').click(function () {
    $('.semifinished').css('display', 'flex');
  });

  $('.calc').click(function () {
    let raw = $("input[name='raw']").val();
    let cost = (raw * 1.6) + 23;
    let num = Number(cost);
    $('.calculator-result').css('display', 'flex');
    $('.calculator-result .modal__title h3').text(num);
  });

  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  });

  $('.reviews-document__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });


  $('#callback').on("click", function (e) {
    e.preventDefault();
    let hidden = $('.hiden').val();
    let name = $('.callback_name').val();
    let phone = $('.callback_phone').val();

    if(name === "") {
      return false;
    } else if (phone === "") {
      return false;
    }

    $.ajax({
      url: 'assets/mail/mail-popup.php',
      type: 'POST',
      cache: false,
      data: {
        'hidden': hidden,
        'name': name,
        'phone': phone,
      },
      dataType: 'html',
      beforeSend: function() {
        $('#callback').prop("disabled", true);
      },
      success: function(data) {
        if(!data) {
          alert("Ошибка! сообщение не отправленно");
        } else {
          $(".modal").css('display', 'none');
          $("form").trigger("reset");
        }
        $('#callback').prop("disabled", false);
      }
    })
  });


  $('#modalCourse').on("click", function (e) {
    e.preventDefault();
    let name = $('.callback_name').val();
    let phone = $('.callback_phone').val();

    if(name === "") {
      return false;
    } else if (phone === "") {
      return false;
    }

    $.ajax({
      url: 'assets/mail/mail-course.php',
      type: 'POST',
      cache: false,
      data: {
        'name': name,
        'phone': phone,
      },
      dataType: 'html',
      beforeSend: function() {
        $('#callback').prop("disabled", true);
      },
      success: function(data) {
        if(!data) {
          alert("Ошибка! сообщение не отправленно");
        } else {
          $(".modal").css('display', 'none');
          $("form").trigger("reset");
        }
        $('#callback').prop("disabled", false);
      }
    })
  });


  $('#contacts').on("click", function () {
    let name = $('.contacts-name').val();
    let phone = $('.contacts-phone').val();
    let email = $('.contacts-email').val();
    let hidden = $('.hidden').val();

    if(name === "") {
      return false;
    } else if (phone === "") {
      return false;
    } else if (email === ""){
      return false;
    }

    $.ajax({
      url: 'assets/mail/mail-contacts.php',
      type: 'POST',
      cache: false,
      data: {
        'hidden': hidden,
        'name': name,
        'phone': phone,
        'email': email
      },
      dataType: 'html',
      beforeSend: function() {
        $('#contacts').prop("disabled", true);
      },
      success: function(data) {
        if(!data) {
          alert("Ошибка! сообщение не отправленно");
        } else {
          $("form").trigger("reset");
        }
        $('#contacts').prop("disabled", false);
      }
    })
  });
  $('#contacts2').on("click", function () {
    let name = $('.contacts-name2').val();
    let phone = $('.contacts-phone2').val();
    let email = $('.contacts-email2').val();
    let hidden = $('.hidden').val();

    if(name === "") {
      return false;
    } else if (phone === "") {
      return false;
    } else if (email === ""){
      return false;
    }

    $.ajax({
      url: 'assets/mail/mail-contacts2.php',
      type: 'POST',
      cache: false,
      data: {
        'hidden': hidden,
        'name': name,
        'phone': phone,
        'email': email
      },
      dataType: 'html',
      beforeSend: function() {
        $('#contacts2').prop("disabled", true);
      },
      success: function(data) {
        if(!data) {
          alert("Ошибка! сообщение не отправленно");
        } else {
          $("form").trigger("reset");
        }
        $('#contacts2').prop("disabled", false);
      }
    })
  });
});
