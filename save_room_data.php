<?php
$data = json_decode(file_get_contents('php://input'), true);
$roomNumber = $data['roomNumber'];
$password = $data['password'];
file_put_contents('room_data.txt', "$roomNumber\n$password\n", FILE_APPEND);
echo 'Success';
?>
