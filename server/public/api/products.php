<?php

require_once("functions.php");

set_exception_handler('error_handler');

require_once("db_connection.php");

startUp();

$whereClause = '';

if (!empty($_GET['type']) && $_GET['type'] != 'catalog') {
  $whereClause .= " WHERE `typeOfProduct` = '" . $_GET['type'] . "'";
}

if (!empty($_GET['id'])){
  $whereClause .= " WHERE `id` = " . $_GET['id'];
}

if(!empty($_GET['id']) && !is_numeric($_GET['id'])){
  throw new Exception("Error message: id needs to be a number");
}

$query = "SELECT `id`, `name`, GROUP_CONCAT(`image`) AS `images`, `price`,`shortDes`, `longDes`, `typeOfProduct` FROM `products` JOIN `images` ON `productID` = `id`" . $whereClause . " GROUP BY `productID`";

$result = mysqli_query($conn, $query);

if(!$result){
  throw new Exception("Error message: %s\n". mysqli_error($conn));
}

$output = [];

while ($row = mysqli_fetch_assoc($result)) {
  $id = $row['id'];
  $row['images'] = explode(',', $row['images']);
  $output[] = $row;
}

if (mysqli_num_rows($result) === 0 && !empty($_GET['id'])) {
  throw new Exception('invalid ID: ' . $_GET['id']);
}


//can't have quotes in data within output when encode it
print(json_encode($output));

?>
