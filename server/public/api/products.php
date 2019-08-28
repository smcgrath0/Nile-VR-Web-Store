<?php

require_once("functions.php");

set_exception_handler('error_handler');

require_once("db_connection.php");

startUp();

$whereClause = '';
if (!empty($_GET['id'])){
  $whereClause .= " WHERE `id` = " . $_GET['id'];
}

if(!empty($_GET['id']) && !is_numeric($_GET['id'])){
  throw new Exception("Error message: id needs to be a number");
}

$query = "SELECT `id`, `name`, GROUP_CONCAT(`image`), `price`,`shortDes`, `longDes` FROM `products` JOIN `images` ON `productID` = `id`" . $whereClause . " GROUP BY `productID`";

$result = mysqli_query($conn, $query);

if(!$result){
  throw new Exception("Error message: %s\n". mysqli_error($conn));
}

$output = [];

while ($row = mysqli_fetch_assoc($result)) {
  $output[] = $row;
}

if (mysqli_num_rows($result) === 0 && !empty($_GET['id'])) {
  throw new Exception('invalid ID: ' . $_GET['id']);
}

print(json_encode($output));

header('Content-Type: application/json');


if (empty($_GET['id'])) {
  readfile('dummy-products-list.json');
} else {
  readfile('dummy-product-details.json');
}
?>
