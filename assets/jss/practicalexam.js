




const writtenTestDate = new Date('2025-08-15');
const practicalExamDate = new Date(writtenTestDate);
practicalExamDate.setMonth(practicalExamDate.getMonth() + 3);
let selectedDate = null;


function initPracticalExam() {
  
  const writtenDateEl = document.getElementById('writtenTestDate');
  const practicalDateEl = document.getElementById('practicalExamDate');
  
  if (writtenDateEl) {
    writtenDateEl.textContent = writtenTestDate.toDateString();
  }
  
  if (practicalDateEl) {
    practicalDateEl.textContent = practicalExamDate.toDateString();
  }
  
  
  createParticles();
  
  console.log('Practical Exam page initialized');
}


function createParticles() {
  const particlesContainer = document.getElementById('particleContainer');
  if (!particlesContainer) return;
  
  const particleCount = 50;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 6 + 's';
    particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
    particlesContainer.appendChild(particle);
  }
}


function openCalendar() {
  const modal = document.getElementById('calendarModal');
  if (!modal) {
    console.error('Calendar modal not found');
    return;
  }
  
  modal.classList.add('active');
  renderFullYearCalendar(new Date().getFullYear());
  
  console.log('Calendar opened');
}


function closeCalendar() {
  const modal = document.getElementById('calendarModal');
  if (!modal) return;
  
  modal.classList.remove('active');
  console.log('Calendar closed');
}


function renderFullYearCalendar(year) {
  const grid = document.getElementById('calendarGrid');
  if (!grid) {
    console.error('Calendar grid not found');
    return;
  }
  
  grid.innerHTML = '';
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  for (let m = 0; m < 12; m++) {
    const monthDiv = document.createElement('div');
    monthDiv.classList.add('month');
    
    const monthName = document.createElement('div');
    monthName.classList.add('month-name');
    monthName.textContent = `${monthNames[m]} ${year}`;
    monthDiv.appendChild(monthName);

    const daysDiv = document.createElement('div');
    daysDiv.classList.add('days');

    const firstDay = new Date(year, m, 1).getDay();
    const daysInMonth = new Date(year, m + 1, 0).getDate();

    
    for (let i = 0; i < firstDay; i++) {
      const empty = document.createElement('div');
      empty.textContent = '';
      daysDiv.appendChild(empty);
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    
    for (let d = 1; d <= daysInMonth; d++) {
      const day = document.createElement('div');
      day.classList.add('day');
      day.textContent = d;

      const currentDate = new Date(year, m, d);
      currentDate.setHours(0, 0, 0, 0);

      
      if (currentDate < today) {
        day.classList.add('unavailable');
      } else {
        
        day.onclick = () => {
          document.querySelectorAll('.day').forEach(el => el.classList.remove('selected'));
          day.classList.add('selected');
          selectedDate = currentDate;
          console.log('Selected date:', selectedDate.toDateString());
        };
      }

      daysDiv.appendChild(day);
    }

    monthDiv.appendChild(daysDiv);
    grid.appendChild(monthDiv);
  }
  
  console.log('Calendar rendered for year:', year);
}


function confirmReschedule() {
  if (!selectedDate) {
    alert('⚠️ Please select a new date for your practical exam.');
    return;
  }

  const practicalDateEl = document.getElementById('practicalExamDate');
  if (practicalDateEl) {
    practicalDateEl.textContent = selectedDate.toDateString();
  }
  
  
  if (typeof toast === 'function') {
    toast(`✅ Your practical exam has been rescheduled to ${selectedDate.toDateString()}`);
  } else {
    alert(`✅ Your practical exam has been rescheduled to ${selectedDate.toDateString()}.\n\nA confirmation email has been sent.`);
  }
  
  closeCalendar();
  console.log('Exam rescheduled to:', selectedDate.toDateString());
}


document.addEventListener('DOMContentLoaded', () => {
  initPracticalExam();
});


window.openCalendar = openCalendar;
window.closeCalendar = closeCalendar;
window.confirmReschedule = confirmReschedule;