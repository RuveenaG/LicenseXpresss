
document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.getElementById('loginForm');
    const nicInput = document.getElementById('nic');
    const passwordInput = document.getElementById('password');
    const submitBtn = document.getElementById('submitBtn');
    
    // Error message 
    const nicError = document.getElementById('nicError');
    const passwordError = document.getElementById('passwordError');
    
    // Password toggle 
    const togglePassword = document.getElementById('togglePassword');
    
   
    if (togglePassword) {
        togglePassword.addEventListener('click', function() {
            const type = passwordInput.type === 'password' ? 'text' : 'password';
            passwordInput.type = type;
            this.textContent = type === 'password' ? '👁️' : '🙈';
        });
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
    
    // Password Validation
    passwordInput.addEventListener('blur', function() {
        validatePassword();
    });
    
    function validatePassword() {
        const password = passwordInput.value;
        
        if (password.length === 0) {
            showError(passwordInput, passwordError, 'Please enter your password');
            return false;
        }
        hideError(passwordInput, passwordError);
        return true;
    }
    
    
    function showError(input, errorElement, message) {
        input.classList.add('error');
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
    
    function hideError(input, errorElement) {
        input.classList.remove('error');
        errorElement.style.display = 'none';
    }
    
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        
        const isNICValid = validateNIC();
        const isPasswordValid = validatePassword();
        
        
        if (isNICValid && isPasswordValid) {
            
            submitBtn.disabled = true;
            submitBtn.textContent = 'Signing In...';
            
            
            form.submit();
        } else {
            
            if (!isNICValid) {
                nicInput.focus();
            } else if (!isPasswordValid) {
                passwordInput.focus();
            }
        }
    });
    
    
    nicInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            passwordInput.focus();
        }
    });
    
    passwordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            form.dispatchEvent(new Event('submit'));
        }
    });
    
    
    nicInput.addEventListener('input', function(e) {
        let value = e.target.value.toUpperCase();
        
        value = value.replace(/[^0-9VX]/g, '');
        
        
        if (value.includes('V') || value.includes('X')) {
            if (value.length > 10) value = value.slice(0, 10);
        } else {
            if (value.length > 12) value = value.slice(0, 12);
        }
        
        e.target.value = value;
    });
    
});