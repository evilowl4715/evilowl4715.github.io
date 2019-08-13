$(document).ready(function(){
  wow = new WOW(
    {
      mobile:  false,
    }
  );
  wow.init();

  $('.callback').click(function () {
    $('.popup-request').css('display', 'flex');
  });
  $('.close-btn').click(function () {
    $('.popup-request').css('display', 'none');
  });
  $('.popup-request input[submit]').click(function () {
    $('.popup-request').css('display', 'none');
    $('.ok').css('display', 'flex');
  });
  $('.close').click(function () {
    $('.popup').css('display', 'none')
  });
  $('.navbar').click(function () {
    $('.mob__menu ul').toggle();
  });
  $('.phone').mask('8 (999) 999-9999');

  $(window).scroll(function(){
    let scrollTop = $(window).scrollTop();
    if (scrollTop > 400) {
      $('.scroll-menu').css('display', 'block');
    } else {
      $('.scroll-menu').css('display', 'none');
    }
  });


  $('#callback').on("click", function () {
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
