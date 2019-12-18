<?php

$name = $_POST['name'];
$phone = $_POST['phone'];

$to      = 'info@metod-prodazh.ru';
$subject = "=?utf-8?B?".base64_encode("Перезвоните мне")."?=";
$headers = "От: $name, $phone";

$success = mail($to, $subject, $headers);
echo $success;
?>
