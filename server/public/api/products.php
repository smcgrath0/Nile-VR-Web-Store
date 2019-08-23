<?php

require_once("functions.php");
require_once("db_connection.php");

set_exception_handler('error_handler');

startUp();

$query = "SELECT * FROM `products`";

$result = $conn->query($query);

if ($result = mysqli_query($conn, $query)) {
  $output = ["success" => "success", "data" => []];


  while ($row = $result->fetch_assoc()) {
    $output["data"][] = $row;
  }
  if (mysqli_num_rows($result)  === 0) {
    print("no data availiable");
    exit();
  }
  print(json_encode($output["data"]));
} else {
  printf("Error message: %s\n", mysqli_error($conn));
  exit();
}

// header('Content-Type: application/json');

// if (empty($_GET['id'])) {
//   readfile('dummy-products-list.json');
// } else {
//   readfile('dummy-product-details.json');
// }
?>
