<?php
// add-user.php is for inserting new users into the database.
// Method: POST - http://localhost/php-react/add-user.php
// Required Fields – user_name --> EmpName, user_email --> JobTitle

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// DB connection: $db_connection from db_connection.php
require 'db_connection.php';

// POST DATA
$data = json_decode(file_get_contents("php://input"));

if (
    isset($data->OI)
    && isset($data->EI)
	&& isset($data->CI)
	&& isset($data->OD)
	&& isset($data->descript)
    && !empty(trim($data->OI))
    && !empty(trim($data->EI))
	&& !empty(trim($data->CI))
    && !empty(trim($data->OD))
	
) {
    $OI = mysqli_real_escape_string($db_connection, trim($data->OI));
    $EI = mysqli_real_escape_string($db_connection, trim($data->EI));
	$CI = mysqli_real_escape_string($db_connection, trim($data->CI));
    $OD = mysqli_real_escape_string($db_connection, trim($data->OD));
	$descript = mysqli_real_escape_string($db_connection, trim($data->descript));
    $insertUser = mysqli_query($db_connection, "INSERT INTO `salesorder`(`OrderId`,`EmpId`,`CustId`,`OrderDate`,`Descript`) VALUES('$OI','$EI','$CI','$OD','$descript')");
    if ($insertUser) {
        $last_id = mysqli_insert_id($db_connection);
        echo json_encode(["success" => 1, "msg" => "User Inserted.", "id" => $last_id]);
    } else {
        echo json_encode(["success" => 0, "msg" => "User Not Inserted!"]);
    }
} else {
    echo json_encode(["success" => 0, "msg" => "Please fill all the required fields!"]);
}
?>