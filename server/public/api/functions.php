<?php

function startUp(){
  header( "Content-type:application/json");
}

function error_handler($error){
  $output = ["success"=>false, "error"=>$error->getMessage()];
  http_response_code(500);
  $json_output = json_encode($output);
  print($json_output);
  exit();
}

function getBodyData() {
  $result = file_get_contents('php://input');

  $result = json_decode($result);
  // if(!empty($_SESSION['cartId'])){
  //   $_SESSION['cartId'] = $result->cartID;
  // }

  return json_encode($result);
}

?>
