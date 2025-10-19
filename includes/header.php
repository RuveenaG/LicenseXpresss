<?php

//this is to get name of the current page for active navigation
$current_page = basename($_SERVER['PHP_SELF'], '.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="LicenseXpress - Your Digital Path to Driving Freedom">
    <title><?php echo isset($page_title) ? $page_title . ' - LicenseXpress' : 'LicenseXpress – Your Digital Path to Driving Freedom'; ?></title>
    
  
    <link rel="stylesheet" href="<?php echo isset($base_url) ? $base_url : ''; ?>assets/css/main.css">
</head>
<body>
    <!-- Logo Splash Screen for homepage -->
    <?php if ($current_page == 'index'): ?>
    <div class="logo-splash" id="logoSplash">
        <div class="logo-reveal">
            <div class="logo-icon">LX</div>
            <div class="logo-text">License<span>Xpress</span></div>
            <div class="tagline">Your Digital Path to Driving Freedom</div>
        </div>
    </div>
    <?php endif; ?>

    
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

    <header class="header">
        <div class="nav">
            <a class="brand" href="<?php echo isset($base_url) ? $base_url : ''; ?>index.php">
                <div class="logo-wrap">LX</div>
                <div style="line-height:1.2">License<br><span style="font-weight:700">Xpress</span></div>
            </a>
            <nav class="nav-links" aria-label="Main Navigation">
                <a href="<?php echo isset($base_url) ? $base_url : ''; ?>index.php" 
                   class="<?php echo $current_page == 'index' ? 'active' : ''; ?>">Home</a>
                <a href="<?php echo isset($base_url) ? $base_url : ''; ?>pages/learner.php" 
                   class="<?php echo $current_page == 'learner' ? 'active' : ''; ?>">Find Schools</a>
                <a href="<?php echo isset($base_url) ? $base_url : ''; ?>pages/about.php" 
                   class="<?php echo $current_page == 'about' ? 'active' : ''; ?>">About Us</a>
                <a href="<?php echo isset($base_url) ? $base_url : ''; ?>pages/contactus.php" 
                   class="<?php echo $current_page == 'contact' ? 'active' : ''; ?>">Contact</a>
                <a href="<?php echo isset($base_url) ? $base_url : ''; ?>pages/faq.php" 
                   class="<?php echo $current_page == 'faq' ? 'active' : ''; ?>">FAQ</a>
                <a href="<?php echo isset($base_url) ? $base_url : ''; ?>pages/guidelines.php" 
                   class="<?php echo $current_page == 'guidelines' ? 'active' : ''; ?>">Guidelines</a>
                <a href="<?php echo isset($base_url) ? $base_url : ''; ?>pages/login.php" class="btn">Sign In</a>
            </nav>
            <button id="mobileToggle" class="mobile-toggle" aria-label="Toggle menu">☰</button>
        </div>
        <div id="mobileMenu" class="mobile-menu" style="display:none">
            <a href="<?php echo isset($base_url) ? $base_url : ''; ?>index.php">Home</a>
            <a href="<?php echo isset($base_url) ? $base_url : ''; ?>pages/learner.php">Find Schools</a>
            <a href="<?php echo isset($base_url) ? $base_url : ''; ?>pages/about.php">About Us</a>
            <a href="<?php echo isset($base_url) ? $base_url : ''; ?>pages/contact.php">Contact</a>
            <a href="<?php echo isset($base_url) ? $base_url : ''; ?>pages/faq.php">FAQ</a>
            <a href="<?php echo isset($base_url) ? $base_url : ''; ?>pages/guidelines.php">Guidelines</a>
            <a href="<?php echo isset($base_url) ? $base_url : ''; ?>pages/login.php">Sign In</a>
        </div>
    </header>