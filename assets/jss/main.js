
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

/**
 * Smooth scroll to a section
 * @param {string} sectionId - ID of the section to scroll to
 */
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean}
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Format date to readable string
 * @param {Date|string} date - Date to format
 * @returns {string}
 */
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
}

/**
 * Debounce function for performance optimization
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function}
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/* ===================================
   BACKGROUND ANIMATION FUNCTIONS
   =================================== */

/**
 * Create flowing line animation in background
 * @param {HTMLElement} particleContainer - Container for particles
 */
function createFlowLine(particleContainer) {
    const line = document.createElement('div');
    line.className = 'flow-line';
    line.style.width = Math.random() * 300 + 200 + 'px';
    line.style.top = Math.random() * 100 + '%';
    line.style.animationDuration = (Math.random() * 4 + 6) + 's';
    line.style.animationDelay = Math.random() * 5 + 's';
    particleContainer.appendChild(line);
    
    setTimeout(() => line.remove(), 10000);
}

/**
 * Create ripple effect animation
 * @param {HTMLElement} particleContainer - Container for particles
 * @param {number} x - X coordinate
 * @param {number} y - Y coordinate
 */
function createRipple(particleContainer, x, y) {
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    particleContainer.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 6000);
}

/* ===================================
   GLOBAL INITIALIZATION
   =================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    /**
     * Mobile Menu Toggle
     */
    const toggle = document.getElementById('mobileToggle');
    if (toggle) {
        toggle.addEventListener('click', () => {
            const menu = document.getElementById('mobileMenu');
            if (menu) {
                menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
            }
        });
    }

    /**
     * Background Particle Animations
     */
    const particleContainer = document.getElementById('particleContainer');
    if (particleContainer) {
        
        // Create initial flow lines
        for (let i = 0; i < 5; i++) {
            setTimeout(() => createFlowLine(particleContainer), i * 2000);
        }
        
        // Continue creating flow lines
        setInterval(() => createFlowLine(particleContainer), 3000);
        
        // Create ripples
        setInterval(() => {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            createRipple(particleContainer, x, y);
        }, 4000);
    }

    /**
     * Geometric Shape Animation
     */
    const geometricContainer = document.getElementById('geometric');
    if (geometricContainer) {
        for (let i = 0; i < 8; i++) {
            const shape = document.createElement('div');
            shape.className = 'geometric-shape';
            const size = Math.random() * 100 + 50;
            shape.style.width = size + 'px';
            shape.style.height = size + 'px';
            shape.style.top = Math.random() * 100 + '%';
            shape.style.left = '-100px';
            shape.style.animationDelay = Math.random() * 15 + 's';
            shape.style.animationDuration = (Math.random() * 10 + 15) + 's';
            geometricContainer.appendChild(shape);
        }
    }

    /**
     * Gradient Orb Mouse Interaction
     */
    const orbs = document.querySelectorAll('.gradient-orb');
    if (orbs.length > 0) {
        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            
            orbs.forEach((orb) => {
                const rect = orb.getBoundingClientRect();
                const orbX = rect.left + rect.width / 2;
                const orbY = rect.top + rect.height / 2;
                
                const deltaX = (mouseX - orbX) * 0.02;
                const deltaY = (mouseY - orbY) * 0.02;
                
                orb.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
            });
        });
    }

    /**
     * Parallax Scroll Effect
     */
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                
                // Geometric shapes parallax
                const shapes = document.querySelectorAll('.geometric-shape');
                shapes.forEach((shape, index) => {
                    const speed = 0.5 + (index % 3) * 0.2;
                    shape.style.transform = `translateY(${scrolled * speed * 0.1}px)`;
                });
                
                // Gradient orbs parallax
                const scrollOrbs = document.querySelectorAll('.gradient-orb');
                scrollOrbs.forEach((orb, index) => {
                    const speed = 0.3 + (index * 0.1);
                    const currentTransform = orb.style.transform || '';
                    if (!currentTransform.includes('translate')) {
                        orb.style.transform = `translateY(${scrolled * speed * 0.05}px)`;
                    }
                });
                
                ticking = false;
            });
            ticking = true;
        }
    });
});