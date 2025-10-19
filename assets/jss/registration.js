// Registration Form JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Form elements
    const form = document.getElementById('registerForm');
    const fullNameInput = document.getElementById('fullName');
    const nicInput = document.getElementById('nic');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const termsCheckbox = document.getElementById('terms');
    const submitBtn = document.getElementById('submitBtn');
    
    // Error message elements
    const nameError = document.getElementById('nameError');
    const nicError = document.getElementById('nicError');
    const contactError = document.getElementById('contactError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    
    // Password toggle buttons
    const togglePassword = document.getElementById('togglePassword');
    const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
    
    // Password strength bar
    const strengthBar = document.getElementById('strengthBar');
    
    // ===== PASSWORD VISIBILITY TOGGLE =====
    togglePassword.addEventListener('click', function() {
        const type = passwordInput.type === 'password' ? 'text' : 'password';
        passwordInput.type = type;
        this.textContent = type === 'password' ? '👁️' : '🙈';
    });
    
    toggleConfirmPassword.addEventListener('click', function() {
        const type = confirmPasswordInput.type === 'password' ? 'text' : 'password';
        confirmPasswordInput.type = type;
        this.textContent = type === 'password' ? '👁️' : '🙈';
    });
    
    // ===== PASSWORD STRENGTH CHECKER =====
    passwordInput.addEventListener('input', function() {
        const password = this.value;
        const strength = calculatePasswordStrength(password);
        
        strengthBar.className = 'password-strength-bar';
        
        if (password.length === 0) {
            strengthBar.style.width = '0';
        } else if (strength < 40) {
            strengthBar.classList.add('strength-weak');
        } else if (strength < 70) {
            strengthBar.classList.add('strength-medium');
        } else {
            strengthBar.classList.add('strength-strong');
        }
    });
    
    function calculatePasswordStrength(password) {
        let strength = 0;
        
        if (password.length >= 8) strength += 25;
        if (password.length >= 12) strength += 15;
        if (/[a-z]/.test(password)) strength += 15;
        if (/[A-Z]/.test(password)) strength += 15;
        if (/[0-9]/.test(password)) strength += 15;
        if (/[^a-zA-Z0-9]/.test(password)) strength += 15;
        
        return strength;
    }
    
    // ===== REAL-TIME VALIDATION =====
    
    // Full Name Validation
    fullNameInput.addEventListener('blur', function() {
        validateFullName();
    });
    
    function validateFullName() {
        const name = fullNameInput.value.trim();
        if (name.length < 3) {
            showError(fullNameInput, nameError, 'Please enter your full name (at least 3 characters)');
            return false;
        }
        hideError(fullNameInput, nameError);
        return true;
    }
    
    // NIC Validation
    nicInput.addEventListener('blur', function() {
        validateNIC();
    });
    
    function validateNIC() {
        const nic = nicInput.value.trim();
        const nicPattern = /^([0-9]{9}[vVxX]|[0-9]{12})$/;
        
        if (!nicPattern.test(nic)) {
            showError(nicInput, nicError, 'Enter valid NIC (9 digits with V/X or 12 digits)');
            return false;
        }
        hideError(nicInput, nicError);
        return true;
    }
    
    // Phone Validation
    phoneInput.addEventListener('blur', function() {
        validatePhone();
    });
    
    function validatePhone() {
        const phone = phoneInput.value.trim();
        const phonePattern = /^0[0-9]{9}$/;
        
        if (!phonePattern.test(phone)) {
            showError(phoneInput, contactError, 'Enter valid phone number (07XXXXXXXX)');
            return false;
        }
        hideError(phoneInput, contactError);
        return true;
    }
    
    // Email Validation
    emailInput.addEventListener('blur', function() {
        validateEmail();
    });
    
    function validateEmail() {
        const email = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailPattern.test(email)) {
            showError(emailInput, emailError, 'Please enter a valid email address');
            return false;
        }
        hideError(emailInput, emailError);
        return true;
    }
    
    // Password Validation
    passwordInput.addEventListener('blur', function() {
        validatePassword();
    });
    
    function validatePassword() {
        const password = passwordInput.value;
        
        if (password.length < 8) {
            showError(passwordInput, passwordError, 'Password must be at least 8 characters');
            return false;
        }
        hideError(passwordInput, passwordError);
        return true;
    }
    
    // Confirm Password Validation
    confirmPasswordInput.addEventListener('blur', function() {
        validateConfirmPassword();
    });
    
    confirmPasswordInput.addEventListener('input', function() {
        if (confirmPasswordInput.value.length > 0) {
            validateConfirmPassword();
        }
    });
    
    function validateConfirmPassword() {
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        
        if (password !== confirmPassword) {
            showError(confirmPasswordInput, confirmPasswordError, 'Passwords do not match');
            return false;
        }
        hideError(confirmPasswordInput, confirmPasswordError);
        return true;
    }
    
    // ===== HELPER FUNCTIONS =====
    function showError(input, errorElement, message) {
        input.classList.add('error');
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
    
    function hideError(input, errorElement) {
        input.classList.remove('error');
        errorElement.style.display = 'none';
    }
    
    // ===== FORM SUBMISSION =====
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate all fields
        const isFullNameValid = validateFullName();
        const isNICValid = validateNIC();
        const isPhoneValid = validatePhone();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isConfirmPasswordValid = validateConfirmPassword();
        const isTermsAccepted = termsCheckbox.checked;
        
        if (!isTermsAccepted) {
            alert('Please accept the Terms & Conditions and Privacy Policy');
            return;
        }
        
        // Check if all validations passed
        if (isFullNameValid && isNICValid && isPhoneValid && isEmailValid && 
            isPasswordValid && isConfirmPasswordValid) {
            
            // Disable submit button to prevent double submission
            submitBtn.disabled = true;
            submitBtn.textContent = 'Creating Account...';
            
            // Submit the form
            form.submit();
        } else {
            // Scroll to first error
            const firstError = document.querySelector('.form-input.error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                firstError.focus();
            }
        }
    });
    
    // ===== AUTO-FORMAT PHONE NUMBER =====
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
        if (value.length > 10) {
            value = value.slice(0, 10);
        }
        e.target.value = value;
    });
    
    // ===== AUTO-FORMAT NIC =====
    nicInput.addEventListener('input', function(e) {
        let value = e.target.value.toUpperCase();
        // Allow only numbers and V/X
        value = value.replace(/[^0-9VX]/g, '');
        
        // Limit length based on format
        if (value.includes('V') || value.includes('X')) {
            if (value.length > 10) value = value.slice(0, 10);
        } else {
            if (value.length > 12) value = value.slice(0, 12);
        }
        
        e.target.value = value;
    });
    
});

// ===== TOAST NOTIFICATION (if needed) =====
function toast(message) {
    const toastDiv = document.createElement('div');
    toastDiv.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 95, 115, 0.95);
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        font-size: 14px;
        animation: toastSlide 0.3s ease-out;
    `;
    toastDiv.textContent = message;
    document.body.appendChild(toastDiv);
    
    setTimeout(() => {
        toastDiv.style.animation = 'toastOut 0.3s ease-out';
        setTimeout(() => toastDiv.remove(), 300);
    }, 3000);
}