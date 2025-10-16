const writtenTestDate = new Date('2025-08-15');
const practicalExamDate = new Date(writtenTestDate);
practicalExamDate.setMonth(practicalExamDate.getMonth() + 3);
let selectedDate = null;

document.getElementById('writtenTestDate').textContent = writtenTestDate.toDateString();
document.getElementById('practicalExamDate').textContent = practicalExamDate.toDateString();

function openCalendar() {
  document.getElementById('calendarModal').classList.add('active');
  renderFullYearCalendar(new Date().getFullYear());
}

function closeCalendar() {
  document.getElementById('calendarModal').classList.remove('active');
}

function renderFullYearCalendar(year) {
  const grid = document.getElementById('calendarGrid');
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
        };
      }

      daysDiv.appendChild(day);
    }

    monthDiv.appendChild(daysDiv);
    grid.appendChild(monthDiv);
  }
}

function confirmReschedule() {
  if (!selectedDate) {
    alert('⚠ Please select a new date for your practical exam.');
    return;
  }

  document.getElementById('practicalExamDate').textContent = selectedDate.toDateString();
  alert(`✅ Your practical exam has been rescheduled to ${selectedDate.toDateString()}.\n\nA confirmation email has been sent.`);
  closeCalendar();
}
