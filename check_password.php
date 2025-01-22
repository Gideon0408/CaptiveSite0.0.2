<?php
$data = json_decode(file_get_contents('php://input'), true);
$password = $data['password'];
$roomData = file('room_data.txt', FILE_IGNORE_NEW_LINES);
$userData = file('user_data.txt', FILE_IGNORE_NEW_LINES);

if ($password === '1234' || in_array($password, $roomData) || in_array($password, $userData)) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false]);
}
?>
