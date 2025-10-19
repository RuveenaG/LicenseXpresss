<?php
session_start();
$page_title = 'Login';
$current_page = 'login';
$base_url = '../'; 
include_once '../includes/header.php';
?>


<link rel="stylesheet" href="<?php echo $base_url; ?>assets/css/login.css">

<div class="container">
    <div class="login-wrapper">
        
        <div class="welcome-section">
            <div class="welcome-icon">🚗</div>
            <h1>Welcome Back to LicenseXpress</h1>
            <p>
                Sign in to continue your journey towards driving freedom. 
                Access your applications, track progress, and manage everything in one place.
            </p>
            
            <ul class="feature-list">
                <li class="feature-item">
                    <div class="feature-item-icon">⚡</div>
                    <span>Fast & secure login process</span>
                </li>
                <li class="feature-item">
                    <div class="feature-item-icon">📊</div>
                    <span>Track application status in real-time</span>
                </li>
                <li class="feature-item">
                    <div class="feature-item-icon">💳</div>
                    <span>Manage payments & documents</span>
                </li>
                <li class="feature-item">
                    <div class="feature-item-icon">🔒</div>
                    <span>Bank-level security & encryption</span>
                </li>
            </ul>
        </div>

        
        <div class="login-card">
            <?php
            
            if (isset($_SESSION['error'])) {
                echo '<div class="backend-error" style="color:#ff4444; background-color:rgba(255, 68, 68, 0.1); border:1px solid #ff4444; padding:12px; border-radius:8px; margin-bottom:20px; text-align:center; font-size:14px;">' 
                     . htmlspecialchars($_SESSION['error']) . 
                     '</div>';
                unset($_SESSION['error']);
            }
            
            
            if (isset($_SESSION['success'])) {
                echo '<div class="backend-success" style="color:#44ff44; background-color:rgba(68, 255, 68, 0.1); border:1px solid #44ff44; padding:12px; border-radius:8px; margin-bottom:20px; text-align:center; font-size:14px;">' 
                     . htmlspecialchars($_SESSION['success']) . 
                     '</div>';
                unset($_SESSION['success']);
            }
            ?>

            <div class="login-header">
                <h2>Sign In</h2>
                <p>Enter your credentials to access your account</p>
            </div>

            <form id="loginForm" method="POST" action="backend/login_backend.php">
                <div class="form-group">
                    <label class="form-label" for="nic">NIC Number</label>
                    <input 
                        type="text" 
                        id="nic" 
                        name="nic"
                        class="form-input" 
                        placeholder="Enter your NIC number"
                        pattern="^([0-9]{9}[vVxX]|[0-9]{12})$"
                        title="Enter a valid NIC (9 digits with V/X or 12 digits)"
                        required
                    >
                    <span class="error-message" id="nicError">Please enter a valid NIC number</span>
                </div>

                <div class="form-group">
                    <label class="form-label" for="password">Password</label>
                    <div class="password-wrapper">
                        <input 
                            type="password" 
                            id="password" 
                            name="password"
                            class="form-input" 
                            placeholder="Enter your password"
                            required
                        >
                        <button type="button" class="password-toggle" id="togglePassword">👁️</button>
                    </div>
                    <span class="error-message" id="passwordError">Please enter your password</span>
                </div>

                <div class="form-footer">
                    <div class="remember-me">
                        <input type="checkbox" id="remember" name="remember">
                        <label for="remember">Remember me</label>
                    </div>
                    <a href="<?php echo $base_url; ?>pages/forgot-password.php" class="forgot-password">Forgot Password?</a>
                </div>

                <button type="submit" class="btn" id="submitBtn">
                    Sign In
                </button>
            </form>

            <div class="register-link" style="margin-top: 32px;">
                Don't have an account? <a href="<?php echo $base_url; ?>pages/registration.php">Create one now →</a>
            </div>
        </div>
    </div>
</div>


<script src="../assets/jss/login.js"></script>

<?php
include_once '../includes/footer.php';
?>