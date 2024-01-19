<?php
// PHP code to retrieve the user's profile data from the MySQL database

// Start the session
session_start();

// Check if the user is logged in
if (!isset($_SESSION['user_id'])) {
  // Handle the case when the user is not logged in
  // Redirect to the login page or display an error message
  header('Location: login.php');
  exit();
}

// Replace the following lines with your own database connection code
$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$dbname = "mystic";

try {
  // Connect to the database
  $pdo = new PDO("mysql:host=localhost;dbname=mystic", $user_name, $password);

  // Set the PDO error mode to exception
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  // Prepare the SQL statement
  $stmt = $pdo->prepare("SELECT uuser_name, user_id FROM users WHERE id = :user_id");

  // Bind the user_id parameter
  $stmt->bindParam(':user_id', $_SESSION['user_id']);

  // Execute the query
  $stmt->execute();

  // Fetch the profile data
  $profile = $stmt->fetch(PDO::FETCH_ASSOC);

  // Return the profile data as JSON
  header('Content-Type: application/json');
  echo json_encode($profile);
} catch (PDOException $e) {
  // Handle any database errors
  echo 'Error: ' . $e->getMessage();
}
?>
