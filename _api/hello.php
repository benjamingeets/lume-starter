<?php

header('Content-Type: application/json');

$data = [
    'time'=>date('h:i:sa')
];

echo json_encode($data);