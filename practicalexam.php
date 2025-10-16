<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Practical Exam Schedule - License Express</title>
  <link rel="stylesheet" href="practicalexam.css" />
  
</head>
<body>
  <div class="container">
    <div class="exam-card">
      <div class="success-badge">✓ Written Test Passed</div>
      <h1>Congratulations! 🎉</h1>
      <p>You have successfully passed your written test. Your practical exam has been automatically scheduled.</p>

      <div class="exam-info">
        <div class="info-item">
          <div class="info-label">Written Test Date</div>
          <div class="info-value" id="writtenTestDate">-</div>
        </div>
        <div class="info-item">
          <div class="info-label">NIC Number</div>
          <div class="info-value">200013512345</div>
        </div>
        <div class="info-item">
          <div class="info-label">Test Score</div>
          <div class="info-value">85/100</div>
        </div>
      </div>

      <div class="scheduled-date">
        <h2>Your Practical Exam is Scheduled On</h2>
        <div class="date-display" id="practicalExamDate">-</div>
      </div>

      <div style="text-align: center; margin-top: 20px;">
        <button class="btn" onclick="openCalendar()">📅 Reschedule Date</button>
      </div>
    </div>
  </div>

  <!-- Calendar Modal -->
  <div class="calendar-modal" id="calendarModal">
    <div class="calendar-container">
      <div class="calendar-header">
        <h3>Select New Practical Exam Date</h3>
        <button class="close-btn" onclick="closeCalendar()">✕</button>
      </div>
      <div id="calendarGrid"></div>

      <div class="calendar-actions">
        <button class="btn btn-secondary" onclick="closeCalendar()">Cancel</button>
        <button class="btn" onclick="confirmReschedule()">Confirm Reschedule</button>
      </div>
    </div>
  </div>

  <script src="practicalexam.js"></script>
</body>
</html>
