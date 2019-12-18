<?php

$phone = $_POST['phone'];


$subject = "=?utf-8?B?".base64_encode("Заявка контакты")."?=";
$headers = "От: $phone";

$success = mail("asyl2000asyl@yandex.ru", $subject, $headers);
echo $success;
?>
