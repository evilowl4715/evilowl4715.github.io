<?php
$recepient = "evilowl123@yandex.ru";
$sitename = "OPT-MATRESHKA";

$name = trim($_POST["name"]);
$phone = trim($_POST["tel"]);
$email = trim($_POST["email"]);
$message = "Имя: $name \nТелефон: $phone \nПочта: $email";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plan; charset=\"utf-8"\"\n From: $recepient")
?>
