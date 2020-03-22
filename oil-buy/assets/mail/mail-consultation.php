<?php

$name = $_POST['name'];
$phone = $_POST['phone'];

$to      = 'maslosbor.spb@yandex.ru';
$subject = "=?utf-8?B?".base64_encode("ПРОДАМ: Консультация")."?=";
$headers = "От: $name, $phone";

$success = mail($to, $subject, $headers);
echo $success;
?>
