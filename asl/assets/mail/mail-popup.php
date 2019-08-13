<?php

$name = $_POST['name'];
$phone = $_POST['phone'];


$subject = "=?utf-8?B?".base64_encode("Заявка")."?=";
$headers = "От: $name\rТелефон: $phone";

$success = mail("evilowl123@yandex.ru", $subject, $headers);
echo $success;
?>
