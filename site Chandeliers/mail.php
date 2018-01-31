<?php

$recepient = "ez@n-con.ru";
$sitename = "Natural concepts";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$phone = trim($_POST["tel"]);
$text = trim($_POST["text"]);
$message = "Имя: $name \nПочта: $email \nТелефон: $phone";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

$recepient = "aa@n-con.ru";
$sitename = "Natural concepts";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$phone = trim($_POST["tel"]);
$text = trim($_POST["text"]);
$message = "Имя: $name \nПочта: $email \nТелефон: $phone";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>


