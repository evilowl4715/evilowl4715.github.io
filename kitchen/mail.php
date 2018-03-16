<?php
if (! $_POST) {
    die('biba bratki');
}

$recepient = "omega.kuhni@mail.ru";
$sitename = "omegakuhni.ru";

$variant1 = trim($_POST["variant1"]);
$variant2 = trim($_POST["variant2"]);
$variant3 = trim($_POST["variant3"]);
$variant4 = trim($_POST["variant4"]);
$pvc = trim($_POST["pvc"]);
$plastic = trim($_POST["plastic"]);
$enamel = trim($_POST["enamel"]);
$veneer = trim($_POST["veneer"]);
$tree = trim($_POST["tree"]);
$img = trim($_POST["img"]);
$phone = trim($_POST["tel"]);
if ($_FILES) {
    $tmp_name = $_FILES["img"]["tmp_name"];
    if (is_uploaded_file($tmp_name)) {
        $folder = '/images/';
        $name = time() . basename($_FILES["img"]["name"]);
        $destination = __DIR__ . $folder . $name;
        $status = move_uploaded_file($tmp_name, $destination);
        $image_url = $status ? $folder . $name : 'Нет изображения';
        $image_html = '<img src="http://omegakuhni.ru' . $image_url . '">';
    }
}
$message = "Форма кухни: $variant1, $variant2, $variant3, $variant4 \nМатериал: $pvc, $plastic, $enamel, $veneer, $tree \nТелефон: $phone \nФото пример кухни: $image_html";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");









$recepient = "svs000@mail.ru";
$sitename = "omegakuhni.ru";

$variant1 = trim($_POST["variant1"]);
$variant2 = trim($_POST["variant2"]);
$variant3 = trim($_POST["variant3"]);
$variant4 = trim($_POST["variant4"]);
$pvc = trim($_POST["pvc"]);
$plastic = trim($_POST["plastic"]);
$enamel = trim($_POST["enamel"]);
$veneer = trim($_POST["veneer"]);
$tree = trim($_POST["tree"]);
$img = trim($_POST["img"]);
$phone = trim($_POST["tel"]);
if ($_FILES) {
    $tmp_name = $_FILES["img"]["tmp_name"];
    if (is_uploaded_file($tmp_name)) {
        $folder = '/images/';
        $name = time() . basename($_FILES["img"]["name"]);
        $destination = __DIR__ . $folder . $name;
        $status = move_uploaded_file($tmp_name, $destination);
        $image_url = $status ? $folder . $name : 'Нет изображения';
        $image_html = '<img src="http://omegakuhni.ru' . $image_url . '">';
    }
}
$message = "Форма кухни: $variant1, $variant2, $variant3, $variant4 \nМатериал: $pvc, $plastic, $enamel, $veneer, $tree \nТелефон: $phone \nФото пример кухни: $image_html";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>