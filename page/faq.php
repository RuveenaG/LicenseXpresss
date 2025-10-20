<?php

$page_title = 'FAQ';
$base_url = '../';
$current_page = 'faq';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Frequently Asked Questions about LicenseXpress and the license application process">
    <title><?php echo isset($page_title) ? $page_title . ' - LicenseXpress' : 'LicenseXpress – Your Digital Path to Driving Freedom'; ?></title>
    
    
   
    <link rel="stylesheet" href="<?php echo $base_url; ?>assets/css/faq.css">
</head>
<body>
   
    <div class="bg-animation">
        <div class="grid-pattern"></div>
        <div class="floating-particles" id="particleContainer">
            <div class="wave-overlay"></div>
            <div class="gradient-orb"></div>
            <div class="gradient-orb"></div>
            <div class="gradient-orb"></div>
        </div>
    </div>
    
    <div class="geometric-overlay" id="geometric"></div>

    
    <script>
        window.skipHeaderAnimation = true;
    </script>

    
    <?php include '../includes/header.php'; ?>

   <br><br><br><br>
    <main class="container main-content">
        <section class="faq-section">
            <div class="section-header">
                <h1 class="section-title">Frequently Asked Questions</h1>
                <p class="section-subtitle">
                    Find answers to common questions about LicenseXpress and the license application process.
                </p>
            </div>

            <div class="faq-container">
                <div class="faq-item">
                    <div class="faq-question" onclick="toggleAnswer('answer1')">
                        <span>How do I apply for a new driving license online?</span>
                        <button class="faq-toggle">+</button>
                    </div>
                    <div id="answer1" class="faq-answer">
                        To apply, register on LicenseXpress, fill out the application form, upload required documents (NIC, photos, medical reports), and make the payment online. You can then schedule your written and practical tests through your dashboard.
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question" onclick="toggleAnswer('answer2')">
                        <span>Can I track the status of my license application?</span>
                        <button class="faq-toggle">+</button>
                    </div>
                    <div id="answer2" class="faq-answer">
                        Yes, applicants can log in to their dashboard to view real-time updates on document verification, test scheduling, test results, and license approval status. You'll also receive email notifications for important updates.
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question" onclick="toggleAnswer('answer3')">
                        <span>What payment methods are supported?</span>
                        <button class="faq-toggle">+</button>
                    </div>
                    <div id="answer3" class="faq-answer">
                        You can pay using credit/debit cards (Visa, MasterCard), online banking, and mobile payment gateways such as Dialog and Mobitel. All payments are processed through secure, encrypted channels to protect your financial information.
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question" onclick="toggleAnswer('answer4')">
                        <span>Can I reschedule my written or practical test?</span>
                        <button class="faq-toggle">+</button>
                    </div>
                    <div id="answer4" class="faq-answer">
                        Yes, you can reschedule through your LicenseXpress account up to 48 hours before the test date, subject to availability. Note that rescheduling more than twice may incur additional fees.
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question" onclick="toggleAnswer('answer5')">
                        <span>What documents do I need to upload for the application?</span>
                        <button class="faq-toggle">+</button>
                    </div>
                    <div id="answer5" class="faq-answer">
                        You need to upload: (1) A clear copy of your National Identity Card (NIC), (2) Recent passport-size photographs with white background, (3) Medical fitness certificate from an authorized medical officer, and (4) Proof of address (utility bill or bank statement).
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question" onclick="toggleAnswer('answer6')">
                        <span>How long does the license approval process take?</span>
                        <button class="faq-toggle">+</button>
                    </div>
                    <div id="answer6" class="faq-answer">
                        Once you pass both written and practical tests, document verification typically takes 3-5 business days. After approval, your digital license will be available immediately, and the physical license card will be delivered within 7-10 business days.
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question" onclick="toggleAnswer('answer7')">
                        <span>Can I connect with driving schools through LicenseXpress?</span>
                        <button class="faq-toggle">+</button>
                    </div>
                    <div id="answer7" class="faq-answer">
                        Yes! LicenseXpress has a network of certified driving schools across Sri Lanka. You can browse schools in your area, compare prices, read reviews from other learners, and book driving lessons directly through our platform.
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question" onclick="toggleAnswer('answer8')">
                        <span>Is my personal information secure on LicenseXpress?</span>
                        <button class="faq-toggle">+</button>
                    </div>
                    <div id="answer8" class="faq-answer">
                        Absolutely. We use bank-level encryption (256-bit SSL) to protect all your personal data. Our platform complies with international data protection standards and Sri Lankan privacy regulations. Your information is never shared with third parties without your consent.
                    </div>
                </div>
            </div>
        </section>

        <section class="cta-section">
            <div class="cta-content">
                <h2 class="cta-title">Still Have Questions?</h2>
                <p class="cta-desc">
                    Our support team is here to help you 24/7. Contact us for personalized assistance with your license application.
                </p>
                <div style="display: flex; gap: 24px; justify-content: center; flex-wrap: wrap;">
                    <a class="btn large" href="<?php echo $base_url; ?>pages/contactus.php">Contact Support</a>
                    <a class="btn large ghost" href="<?php echo $base_url; ?>pages/guidelines.php">View Guidelines</a>
                </div>
            </div>
        </section>
    </main>

   
    <?php include '../includes/footer.php'; ?>

   
    <script src="<?php echo $base_url; ?>assets/jss/faq.js"></script>
    
    
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const header = document.querySelector('.header');
            if (header) {
              
                header.style.animation = 'none';
                header.style.animationName = 'none';
                
                
                header.style.opacity = '1';
                header.style.visibility = 'visible';
                header.style.transform = 'translateY(0)';
                header.style.transition = 'none';
                
                
                header.style.position = 'fixed';
                header.style.top = '0';
                header.style.left = '0';
                header.style.right = '0';
                header.style.zIndex = '1000';
            }
        });
    </script>
</body>
</html>