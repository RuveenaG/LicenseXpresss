<?php
require_once "database.php";

session_start();


if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $db = new Database();
    $conn = $db->getConnection();

    if (!$conn) {
        die("❌ Database connection failed: " . mysqli_connect_error());
    }

    $fullName = $conn->real_escape_string(trim($_POST['fullName']));
    $nic = $conn->real_escape_string(trim($_POST['nic']));
    $contact = $conn->real_escape_string(trim($_POST['phone']));
    $email = $conn->real_escape_string(trim($_POST['email']));
    $password = $_POST['password']; 
    $confirmPassword = $_POST['confirmPassword']; 

    $passwordHash = password_hash($password, PASSWORD_DEFAULT);

    // Check email and nic
    $checkQuery = "SELECT * FROM users WHERE email = '$email' OR nic = '$nic'";
    $checkResult = $conn->query($checkQuery);

    if ($checkResult->num_rows > 0) {
        die("❌ Email or NIC already registered.");
    }

    // Insert to database
    $insertQuery = "INSERT INTO users (full_name, nic, phone, email, password_hash, created_at, updated_at)
                    VALUES ('$fullName', '$nic', '$contact', '$email', '$passwordHash', NOW(), NOW())";

    if ($conn->query($insertQuery) === TRUE) {
        header("Location: login.php");
        exit();
    } else {
    echo "❌ Registration failed: " . $conn->error;
}

    $conn->close();

} else {
    echo "❌ Invalid request method.";
}
?>
