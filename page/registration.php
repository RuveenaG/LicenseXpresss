<?php
session_start();
$page_title = 'Register';
$current_page = 'registration';
$base_url = '../'; // Adjust based on your folder structure
require_once '../includes/header.php';
?>

<!-- Registration specific styles only -->
<link rel="stylesheet" href="<?php echo $base_url; ?>assets/css/registration.css">

<div class="container">
    <div class="register-wrapper">
        <div class="register-card">

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

            <div class="register-header">
                <div class="register-icon">🚗</div>
                <h1>Create Your Account</h1>
                <p>Start your journey to driving freedom today</p>
            </div>

            <form id="registerForm" method="POST" action="backend/registration_backend.php">

                <div class="form-group">
                    <label class="form-label" for="fullName">Full Name</label>
                    <input 
                        type="text" 
                        id="fullName" 
                        name="fullName"
                        class="form-input" 
                        placeholder="Enter your full name"
                        required
                    >
                    <span class="error-message" id="nameError">Please enter your full name</span>
                </div>

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
                    <label class="form-label" for="phone">Contact Number</label>
                    <input 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        class="form-input" 
                        placeholder="07X XXX XXXX"
                        pattern="^0[0-9]{9}$"
                        title="Enter a valid Sri Lankan phone number"
                        required
                    >
                    <span class="error-message" id="contactError">Please enter a valid contact number</span>
                </div>

                <div class="form-group">
                    <label class="form-label" for="email">Email Address</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email"
                        class="form-input" 
                        placeholder="your.email@example.com"
                        required
                    >
                    <span class="error-message" id="emailError">Please enter a valid email address</span>
                </div>

                <div class="form-group">
                    <label class="form-label" for="password">Password</label>
                    <div class="password-wrapper">
                        <input 
                            type="password" 
                            id="password" 
                            name="password"
                            class="form-input" 
                            placeholder="Create a strong password"
                            minlength="8"
                            required
                        >
                        <button type="button" class="password-toggle" id="togglePassword">👁️</button>
                    </div>
                    <div class="password-strength">
                        <div class="password-strength-bar" id="strengthBar"></div>
                    </div>
                    <p class="password-hint">Use at least 8 characters with letters, numbers & symbols</p>
                    <span class="error-message" id="passwordError">Password must be at least 8 characters</span>
                </div>

                <div class="form-group">
                    <label class="form-label" for="confirmPassword">Confirm Password</label>
                    <div class="password-wrapper">
                        <input 
                            type="password" 
                            id="confirmPassword" 
                            name="confirmPassword"
                            class="form-input" 
                            placeholder="Re-enter your password"
                            required
                        >
                        <button type="button" class="password-toggle" id="toggleConfirmPassword">👁️</button>
                    </div>
                    <span class="error-message" id="confirmPasswordError">Passwords do not match</span>
                </div>

                <div class="checkbox-group">
                    <input type="checkbox" id="terms" name="terms" required>
                    <label for="terms">
                        I agree to the <a href="../pages/terms.php">Terms & Conditions</a> 
                        and <a href="../pages/privacy.php">Privacy Policy</a>
                    </label>
                </div>

                <button type="submit" class="btn" id="submitBtn">
                    Create Account
                </button>
            </form>

            <div class="divider">
                <span>Already have an account?</span>
            </div>

            <div class="login-link">
                <a href="login.php">Sign in to your account →</a>
            </div>
        </div>
    </div>

    
</div>
<?php
require_once '../includes/footer.php';
?>

<script src="../assets/jss/registration.js"></script>

