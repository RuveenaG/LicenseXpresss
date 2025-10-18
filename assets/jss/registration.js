// Form validation 
const form = document.getElementById('registerForm');
const inputs = {
    fullName: document.getElementById('fullName'),
    nic: document.getElementById('nic'),
    contact: document.getElementById('contact'),
    email: document.getElementById('email'),
    password: document.getElementById('password'),
    confirmPassword: document.getElementById('confirmPassword'),
    terms: document.getElementById('terms')
};

// Password toggle 
document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordInput = inputs.password;
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
    this.textContent = type === 'password' ? '👁️' : '🙈';
});

document.getElementById('toggleConfirmPassword').addEventListener('click', function () {
    const confirmPasswordInput = inputs.confirmPassword;
    const type = confirmPasswordInput.type === 'password' ? 'text' : 'password';
    confirmPasswordInput.type = type;
    this.textContent = type === 'password' ? '👁️' : '🙈';
});

// Password strength bar
inputs.password.addEventListener('input', function () {
    const password = this.value;
    const strengthBar = document.getElementById('strengthBar');

    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++;
    if (password.match(/[0-9]/)) strength++;
    if (password.match(/[^a-zA-Z0-9]/)) strength++;

    strengthBar.className = 'password-strength-bar';
    if (strength === 1 || strength === 2) {
        strengthBar.classList.add('strength-weak');
    } else if (strength === 3) {
        strengthBar.classList.add('strength-medium');
    } else if (strength >= 4) {
        strengthBar.classList.add('strength-strong');
    }
});

//validation
inputs.fullName.addEventListener('blur', function () {
    validateField(this, this.value.trim().length >= 2, 'nameError');
});

inputs.nic.addEventListener('blur', function () {
    const nicPattern = /^([0-9]{9}[vVxX]|[0-9]{12})$/;
    validateField(this, nicPattern.test(this.value), 'nicError');
});

inputs.phone.addEventListener('blur', function () {
    const contactPattern = /^0[0-9]{9}$/;
    validateField(this, contactPattern.test(this.value.replace(/\s/g, '')), 'contactError');
});

inputs.email.addEventListener('blur', function () {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    validateField(this, emailPattern.test(this.value), 'emailError');
});

inputs.password.addEventListener('blur', function () {
    validateField(this, this.value.length >= 8, 'passwordError');
});

inputs.confirmPassword.addEventListener('blur', function () {
    validateField(this, this.value === inputs.password.value, 'confirmPasswordError');
});

function validateField(input, condition, errorId) {
    const errorElement = document.getElementById(errorId);
    if (!condition) {
        input.classList.add('error');
        errorElement.style.display = 'block';
        return false;
    } else {
        input.classList.remove('error');
        errorElement.style.display = 'none';
        return true;
    }
}


form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Validate fields
    const isNameValid = validateField(inputs.fullName, inputs.fullName.value.trim().length >= 2, 'nameError');
    const nicPattern = /^([0-9]{9}[vVxX]|[0-9]{12})$/;
    const isNicValid = validateField(inputs.nic, nicPattern.test(inputs.nic.value), 'nicError');
    const contactPattern = /^0[0-9]{9}$/;
    const isContactValid = validateField(inputs.contact, contactPattern.test(inputs.contact.value.replace(/\s/g, '')), 'contactError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = validateField(inputs.email, emailPattern.test(inputs.email.value), 'emailError');
    const isPasswordValid = validateField(inputs.password, inputs.password.value.length >= 8, 'passwordError');
    const isConfirmPasswordValid = validateField(inputs.confirmPassword, inputs.confirmPassword.value === inputs.password.value, 'confirmPasswordError');

    if (!inputs.terms.checked) {
        toast('Please accept the Terms & Conditions');
        return;
    }

    if (isNameValid && isNicValid && isContactValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
        const submitBtn = document.getElementById('submitBtn');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Creating Account...';

        
        setTimeout(() => {
            toast('Account created successfully! Redirecting...');
            setTimeout(() => {
                window.location.href = 'login.php';
            }, 1500);
        }, 1500);
    } else {
        toast('Please fill in all fields correctly');
    }
});


function toast(msg) {
    const t = document.createElement('div');
    t.textContent = msg;
    Object.assign(t.style, {
        position: 'fixed',
        bottom: '32px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'linear-gradient(135deg, #0A9396, #94D3A2)',
        color: '#fff',
        padding: '16px 28px',
        borderRadius: '16px',
        boxShadow: '0 16px 64px rgba(10, 147, 150, 0.4)',
        zIndex: '9999',
        fontWeight: '600',
        fontSize: '15px',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        opacity: '0',
        animation: 'toastSlide 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards'
    });

    document.body.appendChild(t);

    setTimeout(() => {
        t.style.animation = 'toastOut 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards';
        setTimeout(() => t.remove(), 400);
    }, 2600);
}


const orbs = document.querySelectorAll('.gradient-orb');
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    orbs.forEach((orb, index) => {
        const rect = orb.getBoundingClientRect();
        const orbX = rect.left + rect.width / 2;
        const orbY = rect.top + rect.height / 2;

        const deltaX = (mouseX - orbX) * 0.02;
        const deltaY = (mouseY - orbY) * 0.02;

        orb.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    });
});