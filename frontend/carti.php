<?php 
// PHP code to handle the cart functionality

// Start the session
session_start();

// Function to get the cart items from the session storage
function getCartItems() {
  if (isset($_SESSION['cart'])) {
    return $_SESSION['cart'];
  }
  return [];
}

// Function to add a product to the cart
function addToCart($productId, $productName, $productPrice) {
  // Create an associative array to represent the product
  $product = [
    'id' => $productId,
    'name' => $productName,
    'price' => $productPrice
  ];
  
  // Get the cart items from the session storage
  $cart = getCartItems();
  
  // Add the product to the cart array
  $cart[] = $product;
  
  // Store the updated cart back to the session storage
  $_SESSION['cart'] = $cart;
}

// Usage example:
addToCart('123', 'Product Name', 9.99);


?>