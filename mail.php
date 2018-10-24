<?php

//recuperar os dados enviados pelo formulario
$GetPost = filter_input_array(INPUT_POST,FILTER_DEFAULT);
var_dump($GetPost);

//variaveis locais
$Nome = $GetPost['nome'];
$number = $GetPost['number'];
$Email = $GetPost['emil'];

var_demp($Nome);

//incluir a classe phpmailer
include_once 'PHPMailer/class.smtp.php';
include_once 'PHPMailer/class.smtp.php';

//enviando o e-mail utilizando a casse phpmail
$Mailer = new PHPMailer;
$Mailer->Charset = "utf8";
$Mailer->SMTPDebug = 3;
$Mailer->isSMTP();
$Mailer->Host = "mail.webliniaerp.com.br"
$Mailer->SMTPAuth = true;
$Mailer->Usermname = 
$Mailer->Usermname = 



//Verificação
