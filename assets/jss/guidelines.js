/**
 * Guidelines Page JavaScript
 * Path: assets/js/guidelines.js
 * 
 * Contains functionality specific to the Guidelines page
 * Works alongside main.js (global functionality)
 */

/* ===================================
   LANGUAGE SWITCHING (VIDEOS)
   =================================== */

/**
 * Switch between language videos
 * @param {string} language - Language to switch to ('sinhala', 'english', 'tamil')
 */
function changeLanguage(language) {
    const videos = {
        sinhala: document.getElementById('sinhalaVideo'),
        english: document.getElementById('englishVideo'),
        tamil: document.getElementById('tamilVideo')
    };

    // Hide all videos and pause them
    Object.values(videos).forEach(video => {
        if (!video) return;
        video.pause();
        video.classList.remove('active');
        video.currentTime = 0;
    });

    // Update button states
    const buttons = document.querySelectorAll('.language-buttons .btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Find and activate the clicked button
    buttons.forEach(btn => {
        const btnText = btn.textContent.toLowerCase();
        if (btnText === language) {
            btn.classList.add('active');
        }
    });

    // Show and play the selected video
    const selectedVideo = videos[language];
    if (selectedVideo) {
        selectedVideo.classList.add('active');
        
        // Try to play (may be blocked by browser autoplay policy)
        const playPromise = selectedVideo.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log('Autoplay prevented:', error);
                // Show a toast message to inform user
                if (typeof toast === 'function') {
                    toast('Click the video to start playback');
                }
            });
        }
    }

    // Show toast notification
    if (typeof toast === 'function') {
        const languageNames = {
            sinhala: 'Sinhala',
            english: 'English',
            tamil: 'Tamil'
        };
        toast(`Switched to ${languageNames[language]} video`);
    }
}

/* ===================================
   VIDEO INTERACTION ENHANCEMENTS
   =================================== */

/**
 * Add keyboard controls to videos
 */
function setupVideoKeyboardControls() {
    const videos = document.querySelectorAll('.video');
    
    videos.forEach(video => {
        video.addEventListener('keydown', (e) => {
            switch(e.key) {
                case ' ': // Space bar
                case 'k': // K key (YouTube-style)
                    e.preventDefault();
                    if (video.paused) {
                        video.play();
                    } else {
                        video.pause();
                    }
                    break;
                case 'ArrowLeft':
                    e.preventDefault();
                    video.currentTime = Math.max(0, video.currentTime - 5);
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    video.currentTime = Math.min(video.duration, video.currentTime + 5);
                    break;
                case 'm':
                    e.preventDefault();
                    video.muted = !video.muted;
                    break;
                case 'f':
                    e.preventDefault();
                    if (video.requestFullscreen) {
                        video.requestFullscreen();
                    }
                    break;
            }
        });
    });
}

/**
 * Track video completion
 */
function setupVideoTracking() {
    const videos = document.querySelectorAll('.video');
    
    videos.forEach(video => {
        let hasWatched75Percent = false;
        
        video.addEventListener('timeupdate', () => {
            const percentWatched = (video.currentTime / video.duration) * 100;
            
            // Trigger when user watches 75% of the video
            if (percentWatched >= 75 && !hasWatched75Percent) {
                hasWatched75Percent = true;
                if (typeof toast === 'function') {
                    toast('Great progress! You\'re almost done with the video.');
                }
            }
        });
        
        video.addEventListener('ended', () => {
            if (typeof toast === 'function') {
                toast('Video completed! Ready to proceed?');
            }
        });
    });
}

/* ===================================
   STEP CARDS INTERACTION
   =================================== */

/**
 * Add click interaction to step cards
 */
function setupStepCards() {
    const stepCards = document.querySelectorAll('.step-card');
    
    stepCards.forEach((card, index) => {
        // Add staggered animation
        card.style.animationDelay = `${index * 0.1}s`;
        
        // Add click feedback
        card.addEventListener('click', () => {
            // Visual feedback
            card.style.transform = 'scale(0.98)';
            setTimeout(() => {
                card.style.transform = '';
            }, 150);
            
            // Optional: Show detailed info
            const stepNumber = card.querySelector('.step-number').textContent;
            if (typeof toast === 'function') {
                toast(`Step ${stepNumber} - Check the video guide for details`);
            }
        });
    });
}

/* ===================================
   SCROLL ANIMATIONS
   =================================== */

/**
 * Animate elements on scroll into view
 */
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe step cards
    const stepCards = document.querySelectorAll('.step-card');
    stepCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

/* ===================================
   MOBILE MENU CLOSE ON LINK CLICK
   =================================== */

/**
 * Close mobile menu when a link is clicked
 */
function setupMobileMenuLinks() {
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileLinks = document.querySelectorAll('#mobileMenu a');
    
    if (!mobileMenu || !mobileToggle) return;
    
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.style.display = 'none';
            mobileMenu.setAttribute('aria-hidden', 'true');
            mobileToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

/* ===================================
   INITIALIZATION
   =================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // Setup video enhancements
    setupVideoKeyboardControls();
    setupVideoTracking();
    
    // Setup step cards interaction
    setupStepCards();
    
    // Setup scroll animations
    setupScrollAnimations();
    
    // Setup mobile menu links
    setupMobileMenuLinks();
    
    // Auto-play first video (if browser allows)
    const firstVideo = document.getElementById('sinhalaVideo');
    if (firstVideo && firstVideo.classList.contains('active')) {
        const playPromise = firstVideo.play();
        if (playPromise !== undefined) {
            playPromise.catch(() => {
                // Autoplay blocked - user will need to click play
                console.log('Autoplay blocked by browser');
            });
        }
    }
    
    // Add keyboard shortcut info
    console.log('Video Keyboard Controls:');
    console.log('- Space/K: Play/Pause');
    console.log('- Arrow Left: Rewind 5s');
    console.log('- Arrow Right: Forward 5s');
    console.log('- M: Mute/Unmute');
    console.log('- F: Fullscreen');
});

/* ===================================
   ACCESSIBILITY ENHANCEMENTS
   =================================== */

// Add focus visible styles for keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});