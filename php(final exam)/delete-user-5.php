<?php
// delete-user.php is for deleting an existing user.
// Method: POST - http://localhost/php-react/delete-user.php
// Required Fields: id --> EmpId

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// DB connection: $db_connection from db_connection.php
require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));

if (isset($data->seq2)) {
    $delseq2 = $data->seq2;
    $deleteUser = mysqli_query($db_connection, "DELETE FROM `orderdetail` WHERE `seq`='$delseq2'");
    if ($deleteUser) {
        echo json_encode(["success" => 1, "msg" => "0"]);
    } else {
        echo json_encode(["success" => 0, "msg" => "1!"]);
    }
} else {
    echo json_encode(["success" => 0, "msg" => "$delseq2"]);
}
?>