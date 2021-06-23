<?php
// all-users.php is to fetch all users that exist in the database.
// Method: GET - http://localhost/php-react/all-users.php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// DB connection: $db_connection from db_connection.php
require 'db_connection.php';

$allUsers = mysqli_query($db_connection, "SELECT customer.CustName as CtNe,customer.CustId as CtId,sum(orderdetail.Qty*product.UnitPrice*orderdetail.Discount) as amount,sum(orderdetail.Qty*(product.UnitPrice*orderdetail.Discount-product.Cost)) as profit,salesorder.OrderDate as OrDe
FROM customer,orderdetail,product,salesorder
WHERE customer.CustId=salesorder.CustId
AND salesorder.OrderId=orderdetail.OrderId
AND orderdetail.ProdId=product.ProdID
GROUP by customer.CustId,salesorder.OrderDate
order by salesorder.OrderDate;
");
if (mysqli_num_rows($allUsers) > 0) {
    $all_users = mysqli_fetch_all($allUsers, MYSQLI_ASSOC);
    // json_encode([],JSON_UNESCAPED_UNICODE) 參數一定要加才會正確顯示中文
    echo json_encode(["success" => 1, "users6" => $all_users], JSON_UNESCAPED_UNICODE);
} else {
    echo json_encode(["success" => 0]);
}
?>
