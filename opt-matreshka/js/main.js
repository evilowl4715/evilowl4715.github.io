$( document ).ready(function() {
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus()
  }

  $("#form").submit(function() {
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function() {
      alert("Спасибо за заявку!");
    });
    return false;
  });
});
