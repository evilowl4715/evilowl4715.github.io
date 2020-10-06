<?
if((isset($_POST['user_name'])&&$_POST['user_name']!="")&&(isset($_POST['user_phone'])&&$_POST['user_phone']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
    $to = 'fumerok@mail.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
    $subject = 'Заявка на консультацию'; //Загаловок сообщения
    $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['user_name'].'</p>
                        <p>Телефон: '.$_POST['user_phone'].'</p>  
                        <p>Почта: '.$_POST['user_email'].'</p>    
                        <p>Сообщение: '.$_POST['user_message'].'</p>                      
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
    $headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя
    mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>
