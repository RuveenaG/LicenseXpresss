<?php
session_start();
require_once("../../database/database.php");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $db = new Database();
    $conn = $db->getConnection();

    if (!$conn) {
        $_SESSION['error'] = "Database connection failed.";
        header("Location: ../login.php");
        exit();
    }

    $nic = $conn->real_escape_string(trim($_POST['nic']));
    $password = trim($_POST['password']); 

    
    $sql = "SELECT * FROM users WHERE nic = '$nic' LIMIT 1";
    $result = $conn->query($sql);

    if ($result && $result->num_rows === 1) {
        $user = $result->fetch_assoc();

        
        if (password_verify($password, $user['password_hash'])) {
            
            $_SESSION['user_id'] = $user['user_id'];
            $_SESSION['full_name'] = $user['full_name'];
            $_SESSION['nic'] = $user['nic'];
            $_SESSION['email'] = $user['email'];

            
            header("Location: ../dashboard.php");
            exit();
        } else {
            $_SESSION['error'] = "Incorrect password. Please try again.";
            header("Location: ../login.php");
            exit();
        }
    } else {
        $_SESSION['error'] = "NIC not found. Please register first.";
        header("Location: ../registration.php");
        exit();
    }

    $conn->close();
} else {
    $_SESSION['error'] = "Invalid request method.";
    header("Location: ../login.php");
    exit();
}


?>