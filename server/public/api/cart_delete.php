<?php

require_once('functions.php');

startUp();

if (!defined('INTERNAL')) {
  print('not allowing 1. direct access');
  exit();
}

$body = getBodyData();
$body = json_decode($body);
if (!$body->productID) {
  throw new Exception('no id');
}

$id = $body->productID;

$cartID = $_SESSION['cartId'];

$getCartItemsQuery = "SELECT *
FROM cartItems AS cI
JOIN cart AS c
    ON c.cartID = cI.cartID
JOIN products AS p
    ON p.id = cI.productID
WHERE p.id = {$id} AND cI.cartID = {$cartID}";

$result = mysqli_query($conn, $getCartItemsQuery);

if (!$result) {
  throw new Exception("Error message: %s\n" . mysqli_error($conn));
}

$output;

while ($row = mysqli_fetch_assoc($result)) {
  $output = $row;
}

$productData = $output;

$startTransQuery = mysqli_query($conn, "START TRANSACTION");

if($productData['count'] <= 1) {
  $cartItemsQuery = "DELETE FROM cartItems WHERE productID = " . $id . " AND cartID = ". $cartID;
  $output['count'] = $output['count'] - 1;
} else {
  $cartItemsQuery = "UPDATE cartItems SET count = count - 1 WHERE productID = " . $id . " AND cartID = " . $cartID;
  $output['count'] = $output['count'] - 1;
}

$resultfinal = mysqli_query($conn, $cartItemsQuery);
if (mysqli_affected_rows($conn) < 1) {
  mysqli_query($conn, "ROLLBACK");
  throw new Exception('invalid ID: ' . $id);
}

$commitQuery = mysqli_query($conn, "COMMIT");
print(json_encode($output));



?>
