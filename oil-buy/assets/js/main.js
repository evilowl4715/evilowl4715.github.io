$(document).ready(function(){


  var $page = $('html, body');
  $('a[href*="#"]').click(function() {
    $page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
  });

  $('.callback').click(function () {
    $('.modal-callback').css('display', 'flex');
  });
  $('.consultation').click(function () {
    $('.modal-consultation').css('display', 'flex');
  });
  $('.close').click(function () {
    $('.modal').css('display', 'none');
  });
  $('.navbar').click(function () {
    $('.mob-contacts').slideToggle();
  });
  $('.phone').mask('+7 (999) 999-9999');


  $('#callback').on("click", function (e) {
    e.preventDefault();
    let name = $('.callback_name').val();
    let phone = $('.callback_phone').val();
    let liter = $('.callback_liter').val();

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
        'liter': liter,
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


  $('#consultation').on("click", function (e) {
    e.preventDefault();
    let name = $('.consultation_name').val();
    let phone = $('.consultation_phone').val();

    if(name === "") {
      return false;
    } else if (phone === "") {
      return false;
    }

    $.ajax({
      url: 'assets/mail/mail-consultation.php',
      type: 'POST',
      cache: false,
      data: {
        'name': name,
        'phone': phone,
      },
      dataType: 'html',
      beforeSend: function() {
        $('#consultation').prop("disabled", true);
      },
      success: function(data) {
        if(!data) {
          alert("Ошибка! сообщение не отправленно");
        } else {
          $(".modal").css('display', 'none');
          $("form").trigger("reset");
        }
        $('#consultation').prop("disabled", false);
      }
    })
  });


  $('#offer').on("click", function () {
    let name = $('.offer__name').val();
    let phone = $('.offer__phone').val();
    let liter = $('.offer__liter').val();

    if(name === "") {
      return false;
    } else if (phone === "") {
      return false;
    }

    $.ajax({
      url: 'assets/mail/mail-offer.php',
      type: 'POST',
      cache: false,
      data: {
        'liter': liter,
        'name': name,
        'phone': phone,
      },
      dataType: 'html',
      beforeSend: function() {
        $('#offer').prop("disabled", true);
      },
      success: function(data) {
        if(!data) {
          alert("Ошибка! сообщение не отправленно");
        } else {
          $("form").trigger("reset");
        }
        $('#offer').prop("disabled", false);
      }
    })
  });
});
