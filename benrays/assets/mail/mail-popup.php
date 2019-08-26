<?php

$name = $_POST['name'];
$phone = $_POST['phone'];

$to      = 'evilowl123@yandex.ru';
$subject = "=?utf-8?B?".base64_encode("Заявка")."?=";
$headers = "От: $name\rТелефон: $phone";

$success = mail("asyl2000asyl@yandex.ru", $subject, $headers);
echo $success;
?>
