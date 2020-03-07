<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$hidden = $_POST['hidden'];

$to      = 'info@metod-prodazh.ru';
$subject = "=?utf-8?B?".base64_encode("Записаться на консультацию")."?=";
$headers = "От: $hidden, $name, $phone, $email";

$success = mail($to, $subject, $headers);
echo $success;
?>
