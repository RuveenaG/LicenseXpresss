function toggleAnswer(id) {
    const answer = document.getElementById(id);
    const faqItem = answer.closest('.faq-item');
    const allFaqItems = document.querySelectorAll('.faq-item');
    const allAnswers = document.querySelectorAll('.faq-answer');
    
   
    allAnswers.forEach(item => {
        if (item.id !== id) {
            item.classList.remove('show');
        }
    });
    
    
    allFaqItems.forEach(item => {
        if (item !== faqItem) {
            item.classList.remove('active');
        }
    });
    
    
    answer.classList.toggle('show');
    faqItem.classList.toggle('active');
}


document.addEventListener('DOMContentLoaded', () => {
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            if (mobileMenu.style.display === 'flex') {
                mobileMenu.style.display = 'none';
            } else {
                mobileMenu.style.display = 'flex';
            }
        });
    }
    
    
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.style.display = 'none';
        });
    });
    
    
    document.addEventListener('click', (e) => {
        if (!mobileToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenu.style.display = 'none';
        }
    });
});