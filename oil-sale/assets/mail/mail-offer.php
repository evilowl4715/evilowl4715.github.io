<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$liter = $_POST['liter'];

$to      = 'maslosbor.spb@yandex.ru';
$subject = "=?utf-8?B?".base64_encode("КУПЛЮ: Лучшее предложение")."?=";
$headers = "От: $name, $phone, $liter";

$success = mail($to, $subject, $headers);
echo $success;
?>
