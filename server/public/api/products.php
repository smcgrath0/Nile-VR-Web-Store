<?php

require_once("functions.php");

set_exception_handler('error_handler');

require_once("db_connection.php");

startUp();

$whereClause = '';

if(!empty($_GET['id']) && !is_numeric($_GET['id'])){
  throw new Exception("Error message: id needs to be a number");
} else {
  $whereClause = ' WHERE `id` = ' . $_GET['id'];
}


$query = "SELECT * FROM `products`" . $whereClause;


$result = $conn->query($query);

if ($result = mysqli_query($conn, $query)) {
  $output = [];


  while ($row = $result->fetch_assoc()) {
    $output[] = $row;
  }
  if (mysqli_num_rows($result) === 0) {
    if (!empty($_GET['id'])){
      throw new Exception('invalid ID: ' . $_GET['id']);
    }
  }
  print(json_encode($output));
} else {
  throw new Exception("Error message: %s\n", mysqli_error($conn));
  exit();
}

?>
