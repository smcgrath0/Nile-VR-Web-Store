<?php

require_once('functions.php');

startUp();

if (!defined('INTERNAL')) {
  print('not allowing 1. direct access');
  exit();
}

$body = getBodyData();
$body= json_decode($body);
if ($body->productID < 1) {
  throw new Exception('no id');
}

$id = $body->productID;

if (empty($_SESSION['cartId'])){
  $cartID = false;
} else {
  // print('hi');
  $cartID = $_SESSION['cartId'];

}

$getCartItemsQuery = "SELECT *
FROM cartItems AS cI
JOIN cart AS c
    ON c.cartID = cI.cartID
RIGHT JOIN products AS p
    ON p.id = cI.productID
WHERE p.id = {$id}";

$result = mysqli_query($conn, $getCartItemsQuery);

if (!$result) {
  throw new Exception("Error message: %s\n" . mysqli_error($conn));
}

$output;

while ($row = mysqli_fetch_assoc($result)) {
  $id = $row['id'];
  $output = $row;
}


// if (mysqli_num_rows($result) > 1) {
//   throw new Exception('invalid ID: ' . $_GET['id']);
// }


$productData = $output;

$startTransQuery = mysqli_query($conn, "START TRANSACTION");

// $updateQuery = "UPDATE cartItems SET count=count+1 WHERE productID = " . $id;

// if ($productData['productID']) {
//   $result = mysqli_query($conn, $updateQuery);
//   if (mysqli_affected_rows($conn) < 1) {
//     mysqli_query($conn, "ROLLBACK");
//     throw new Exception('invalid ID: ' . $_GET['id']);
//   }
//   $commitQuery = mysqli_query($conn, "COMMIT");
//   exit();
// }

$cartQuery = "INSERT INTO cart SET created = NOW()";

if(!$cartID){
  $result = mysqli_query($conn, $cartQuery);
  if (mysqli_affected_rows($conn) != 1) {
    throw new Exception('invalid ID: ' . $_GET['id']);
  }
  $cartID = mysqli_insert_id($conn);
  $_SESSION['cartId'] = $cartID;
}

$cartItemsQuery = "INSERT INTO cartItems
                               (productID, count, added, cartID)
                        VALUES (". $id .", 1, NOW(), ".$cartID. ") ON DUPLICATE KEY UPDATE count = count + 1";

$resultfinal = mysqli_query($conn, $cartItemsQuery);
if (mysqli_affected_rows($conn) < 1) {
  mysqli_query($conn, "ROLLBACK");
  throw new Exception('invalid ID: ' . $_GET['id']);
}

$commitQuery = mysqli_query($conn, "COMMIT");
?>
