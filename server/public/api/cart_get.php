<?php
require_once('functions.php');

startUp();

if (!defined('INTERNAL')) {
  print('not allowing 1. direct access');
  exit();
}

getBodyData();

if (empty($_SESSION['cartId'])){
  print(json_encode([]));
  exit();
};


$cartID = $_SESSION['cartId'];

$query = "SELECT *
  FROM cartItems AS cI
  JOIN products AS p
    ON cI.productID = p.id
  JOIN `cart` AS c
      ON c.cartID = cI.cartID
      WHERE cI.cartID = " . $cartID;

$result = mysqli_query($conn, $query);
$output = [];

while ($row = mysqli_fetch_assoc($result)) {
  $id = $row['id'];
  $output[] = $row;
}

// if (mysqli_num_rows($result) < 1) {
//   throw new Exception('no items in cart');
// }

$productData = $output;

print(json_encode($productData));
?>
