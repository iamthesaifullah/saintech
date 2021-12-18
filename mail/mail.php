<?php

$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$subject = $_REQUEST['subject'];
$message = $_REQUEST['msg'];

if (empty($name) || empty($email) || empty($subject) || empty($message))
{
	echo "Please Fill all this";
}
else{
	mail("saintechfirm@gmail.com","Email Form", $message , "From: $name $subject <$email>");
	echo "<script type='text/javascript'>alert('Your message successfully sent!!!');
		window.history.log(-1);
		</script>";
}
?>