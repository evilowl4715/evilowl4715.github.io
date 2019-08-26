$(document).ready(function(){
  $('.callback').click(function () {
    $('.popup-request').css('display', 'flex');
  });
  $('.close-btn').click(function () {
    $('.popup-request').css('display', 'none');
  });
  $('.close').click(function () {
    $('.header__mob-menu').css('right', '-100%');
  });
  $('.navbar').click(function () {
    $('.header__mob-menu').css('right', '0px');
  });
  $('.phone').mask('8 (999) 999-9999');


  $('#callback').on("click", function (e) {
    e.preventDefault();
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
          $("form").trigger("reset");
          $(".popup-request").css('display', 'none');
          $(".ok").css('display', 'flex');
        }
        $('#callback').prop("disabled", false);
      }
    })
  });


  $('#contacts').on("click", function () {
    let phone = $('.contacts-phone').val();

    if(phone === "") {
      return false;
    }

    $.ajax({
      url: 'assets/mail/mail-contacts.php',
      type: 'POST',
      cache: false,
      data: {
        'phone': phone,
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
          $(".ok").css('display', 'flex');
        }
        $('#contacts').prop("disabled", false);
      }
    })
  });
});
