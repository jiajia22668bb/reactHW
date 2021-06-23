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
    isset($data->seq)
    && isset($data->OI)
    && isset($data->EI)
    && isset($data->CI)
	&& isset($data->OD)
    && isset($data->descript)
    && !empty(trim($data->seq))
    && !empty(trim($data->OI))
    && !empty(trim($data->EI))
    && !empty(trim($data->CI))
	&& !empty(trim($data->OD))
    
) {
    $seq = mysqli_real_escape_string($db_connection, trim($data->seq));
    $OI = mysqli_real_escape_string($db_connection, trim($data->OI));
	$EI = mysqli_real_escape_string($db_connection, trim($data->EI));
    $CI = mysqli_real_escape_string($db_connection, trim($data->CI));
	$OD = mysqli_real_escape_string($db_connection, trim($data->OD));
    $descript = mysqli_real_escape_string($db_connection, trim($data->descript));
    $updateUser = mysqli_query($db_connection, "UPDATE `salesorder` SET `OrderId`='$OI', `EmpId`='$EI',`CustId`='$CI', `OrderDate`='$OD',`Descript`='$descript' WHERE `seq`='$data->seq'");
    if ($updateUser) {
        echo json_encode(["success" => 1, "msg" => "User Updated."]);
    } else {
        echo json_encode(["success" => 0, "msg" => "User Not Updated!"]);
    }
} else {
    echo json_encode(["success" => 0, "msg" => "Please fill all the required fields!"]);
}
?>