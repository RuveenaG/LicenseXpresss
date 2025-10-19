<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register - LicenseXpress</title>
<<<<<<< Updated upstream
    <link rel="stylesheet" href="../assets/css/registration.css">

=======
    <link rel="stylesheet" href="registration.css">
>>>>>>> Stashed changes

    
</head>
<body>
    <div class="bg-animation">
        <div class="gradient-orb"></div>
        <div class="gradient-orb"></div>
    </div>

    <header class="header">
        <div class="nav">
            <a class="brand" href="index.html">
                <div class="logo-wrap">LX</div>
                <div style="line-height:1.2">License<br><span style="font-weight:700">Xpress</span></div>
            </a>
            <nav class="nav-links">
                <a href="index.html">Home</a>
                <a href="about.html">About Us</a>
                <a href="contact.html">Contact</a>
                <a href="login.html">Sign In</a>
            </nav>
        </div>
    </header>

    <div class="container">
        <div class="register-wrapper">
            <div class="register-card">
                <div class="register-header">
                    <div class="register-icon">🚗</div>
                    <h1>Create Your Account</h1>
                    <p>Start your journey to driving freedom today</p>
                </div>

                <form id="registerForm" method="POST" action="registration_backend.php">

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
                            required
                        >
                        <span class="error-message" id="nicError">Please enter a valid NIC number</span>
                    </div>

                    <div class="form-group">
                        <label class="form-label" for="contact">Contact Number</label>
                        <input 
                            type="tel" 
                            id="phone" 
                            name="phone"
                            class="form-input" 
                            placeholder="07X XXX XXXX"
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
                            I agree to the <a href="#" onclick="toast('Terms & Conditions coming soon!')">Terms & Conditions</a> 
                            and <a href="#" onclick="toast('Privacy Policy coming soon!')">Privacy Policy</a>
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
                    <a href="login.html">Sign in to your account →</a>
                </div>
            </div>
        </div>
    </div>

<<<<<<< Updated upstream
    <script src="../assests/jss/registration.js"></script>
=======
    <script src="registration.js"></script>
>>>>>>> Stashed changes
</body>
</html>