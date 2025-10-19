<?php
session_start();
require_once("../../database/database.php");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $db = new Database();
    $conn = $db->getConnection();

    if (!$conn) {
        $_SESSION['error'] = "Database connection failed.";
        header("Location: ../registration.php");
        exit();
    }

    $fullName = $conn->real_escape_string(trim($_POST['fullName']));
    $nic = $conn->real_escape_string(trim($_POST['nic']));
    $contact = $conn->real_escape_string(trim($_POST['phone']));
    $email = $conn->real_escape_string(trim($_POST['email']));
    $password = $_POST['password'];
    $confirmPassword = $_POST['confirmPassword'];

    if ($password !== $confirmPassword) {
        $_SESSION['error'] = "Passwords do not match.";
        header("Location: ../registration.php");
        exit();
    }

    $checkQuery = "SELECT * FROM users WHERE email = '$email' OR nic = '$nic'";
    $checkResult = $conn->query($checkQuery);

    if ($checkResult->num_rows > 0) {
        $_SESSION['error'] = "Email or NIC is already registered.";
        header("Location: ../registration.php");
        exit();
    }

    $passwordHash = password_hash($password, PASSWORD_DEFAULT);

    $insertQuery = "INSERT INTO users (full_name, nic, phone, email, password_hash, created_at, updated_at)
                    VALUES ('$fullName', '$nic', '$contact', '$email', '$passwordHash', NOW(), NOW())";

    if ($conn->query($insertQuery) === TRUE) {
        header("Location: ../login.php");
        exit();
    } else {
        $_SESSION['error'] = "Registration failed: " . $conn->error;
        header("Location: ../registration.php");
        exit();
    }

    $conn->close();
} else {
    $_SESSION['error'] = "Invalid request method.";
    header("Location: ../registration.php");
    exit();
}
?>
