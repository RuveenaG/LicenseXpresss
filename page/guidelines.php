<?php

$page_title = "Guidelines";
$base_url = "../"; 
$page_css = "guidelines"; 



include '../includes/header.php';
?>
<link rel="stylesheet" href="../assets/css/guidelines.css">
  
  <main class="guidelines-container" role="main">
    <section class="guidelines-hero">
      <h1 class="guidelines-title">Driving License Guidelines</h1>
      <p class="guidelines-subtitle">Select your preferred language to watch the video guide on how to apply for your driving license.</p>

      <div class="language-buttons">
        <button class="btn active" onclick="changeLanguage('sinhala')">Sinhala</button>
        <button class="btn" onclick="changeLanguage('english')">English</button>
        <button class="btn" onclick="changeLanguage('tamil')">Tamil</button>
      </div>

      <div class="video-container">
        <video id="sinhalaVideo" class="video active" controls>
          <source src="<?php echo $base_url; ?>assets/videos/sinhala.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video id="englishVideo" class="video" controls>
          <source src="<?php echo $base_url; ?>assets/videos/english.mp4" type="video/mp4" />
        </video>
        <video id="tamilVideo" class="video" controls>
          <source src="<?php echo $base_url; ?>assets/videos/tamil.mp4" type="video/mp4" />
        </video>
      </div>
    </section>

    <section class="guidelines-steps">
      <h2 class="section-title">Step-by-Step Guidelines</h2>
      <div class="steps-grid">
        <div class="step-card">
          <div class="step-number">01</div>
          <h3>Register Account</h3>
          <p>Register or sign in to your License Express account.</p>
        </div>
        <div class="step-card">
          <div class="step-number">02</div>
          <h3>Fill Details</h3>
          <p>Fill in your personal and license details.</p>
        </div>
        <div class="step-card">
          <div class="step-number">03</div>
          <h3>Upload Documents</h3>
          <p>Upload required documents and make your payment.</p>
        </div>
        <div class="step-card">
          <div class="step-number">04</div>
          <h3>Submit Application</h3>
          <p>Submit your application and wait for confirmation.</p>
        </div>
      </div>
    </section>
  </main>

<?php

include '../includes/footer.php';
?>


<script src="<?php echo $base_url; ?>assets/jss/guidelines.js"></script>