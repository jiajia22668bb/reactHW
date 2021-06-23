<?php
// update-user.php is for updating an existing user.
// Method: POST - http://localhost/php-react/update-user.php
// Required Fields: id --> EmpId, user_name --> EmpName, user_email --> JobTitle

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// DB connection: $db_connection from db_connection.php
require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));

if (
    isset($data->seq2)
    && isset($data->OId2)
    && isset($data->PI2)
    && isset($data->qty)
	&& isset($data->discount)
    && !empty(trim($data->seq2))
    && !empty(trim($data->OId2))
    && !empty(trim($data->PI2))
    && !empty(trim($data->qty))
	&& !empty(trim($data->discount))
) {
    $seq2 = mysqli_real_escape_string($db_connection, trim($data->seq2));
    $OId2 = mysqli_real_escape_string($db_connection, trim($data->OId2));
	$PI2 = mysqli_real_escape_string($db_connection, trim($data->PI2));
    $qty = mysqli_real_escape_string($db_connection, trim($data->qty));
	$discount = mysqli_real_escape_string($db_connection, trim($data->discount));
    $updateUser = mysqli_query($db_connection, "UPDATE `orderdetail` SET `OrderId`='$OId2', `ProdId`='$PI2',`Qty`='$qty',`Discount`='$discount' WHERE `seq`='$data->seq2'");
    if ($updateUser) {
        echo json_encode(["success" => 1, "msg" => "User Updated."]);
    } else {
        echo json_encode(["success" => 0, "msg" => "User Not Updated!"]);
    }
} else {
    echo json_encode(["success" => 0, "msg" => "Please fill all the required fields!"]);
}
?>