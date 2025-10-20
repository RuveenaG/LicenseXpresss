<?php

?>
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-brand">
                    <h3>LicenseXpress</h3>
                    <p>
                        Revolutionizing the driving license application process with cutting-edge technology 
                        and user-centric design. Your journey to driving freedom starts here.
                    </p>
                </div>
                
                <div class="footer-links">
                    <h4>Services</h4>
                    <a href="<?php echo isset($base_url) ? $base_url : ''; ?>pages/register.php">License Application</a>
                    <a href="<?php echo isset($base_url) ? $base_url : ''; ?>pages/learner.php">Driving Schools</a>
                    <a href="<?php echo isset($base_url) ? $base_url : ''; ?>pages/guidelines.php">Test Scheduling</a>
                    <a href="<?php echo isset($base_url) ? $base_url : ''; ?>pages/about.php">Document Upload</a>
                </div>
                
                <div class="footer-links">
                    <h4>Support</h4>
                    <a href="<?php echo isset($base_url) ? $base_url : ''; ?>pages/faq.php">FAQ</a>
                    <a href="<?php echo isset($base_url) ? $base_url : ''; ?>pages/guidelines.php">Guidelines</a>
                    <a href="<?php echo isset($base_url) ? $base_url : ''; ?>pages/contact.php">Contact Us</a>
                    <a href="#" onclick="toast('Help documentation coming soon!')">Help Center</a>
                </div>
                
                <div class="footer-links">
                    <h4>Company</h4>
                    <a href="<?php echo isset($base_url) ? $base_url : ''; ?>pages/about.php">About Us</a>
                    <a href="#" onclick="toast('Privacy policy coming soon!')">Privacy Policy</a>
                    <a href="#" onclick="toast('Terms of service coming soon!')">Terms of Service</a>
                    <a href="<?php echo isset($base_url) ? $base_url : ''; ?>pages/contact.php">Careers</a>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; <?php echo date('Y'); ?> LicenseXpress. All rights reserved. | Empowering drivers with digital innovation.</p>
            </div>
        </div>
    </footer>

    
    <script src="<?php echo isset($base_url) ? $base_url : ''; ?>assets/js/main.js"></script>
</body>
</html>