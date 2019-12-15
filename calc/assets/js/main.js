$(document).ready(function(){
  $('.calculate').click(function () {
    result();
    $('.win-amount__input').removeClass('hidden');
    $('.btn').removeClass('calculate').addClass('put').text('Поставить');
  });
});

$('.win-amount__input input').keyup(function () {
  result();
});

function result() {

  let money = $("input[name='money']").val();
  let coefficient = $("input[name='coefficient']").val();
  let pay = $("input[name='pay']");
  let amount = $("input[name='amount']");

  let multiplication = money * coefficient;
  pay.val(multiplication + ' ₽');
  amount.val((multiplication - money) + ' ₽');

  // Проверка на заполнение полей
  if (money.length != 0 && coefficient.length != 0){
    // Если поле не кнопка активна
    $('.btn').removeAttr('disabled');
  } else {
    // Если поле пустое кнопка не активна и Сумма выигрыша = 0
    $('.btn').attr('disabled', 'disabled');
    amount.val(0);
  }
}
