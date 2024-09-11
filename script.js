function updateTime() {
    const timeElement = document.getElementById('time');
    const amPmElement = document.getElementById('amPm');
    const dateElement = document.getElementById('date');
    const dayElement = document.getElementById('day');
    const greetingElement = document.getElementById('greeting');

    const currentTime = new Date();
    let hours = currentTime.getHours();
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    const seconds = String(currentTime.getSeconds()).padStart(2, '0');
    const day = String(currentTime.getDate()).padStart(2, '0');
    const month = String(currentTime.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = currentTime.getFullYear();

    // AM/PM logic
    const isAm = hours < 12;
    const amPm = isAm ? 'AM' : 'PM';

    // 12-hour format logic
    hours = hours % 12 || 12;
    hours = String(hours).padStart(2, '0');

    // Greeting based on time of day
    let greeting = '';
    if (hours < 12 && amPm === 'AM') {
        greeting = 'Good Morning';
    } else if (hours < 6 && amPm === 'PM') {
        greeting = 'Good Afternoon';
    } else {
        greeting = 'Good Evening';
    }

    // Update time and date
    const timeString = `${hours}:${minutes}:${seconds}`;
    const dateString = `${day}/${month}/${year}`;

    // Day of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[currentTime.getDay()];

    // Update elements
    timeElement.textContent = timeString;
    amPmElement.textContent = amPm;
    dateElement.textContent = dateString;
    dayElement.textContent = dayOfWeek;
    greetingElement.textContent = greeting;

    // Background change based on time (Day/Night)
    const body = document.querySelector('body');
    if (isAm) {
        body.style.background = 'linear-gradient(to right, #FFEFBA, #FFFFFF)';
    } else {
        body.style.background = 'linear-gradient(to right, #355C7D, #6C5B7B)';
    }
}

// Toggle between light and dark themes
let isLightTheme = true;
document.getElementById('themeToggle').addEventListener('click', () => {
    const body = document.querySelector('body');
    if (isLightTheme) {
        body.style.background = 'linear-gradient(to right, #00c6ff, #0072ff)';
        isLightTheme = false;
    } else {
        body.style.background = 'linear-gradient(to right, #fbc2eb, #a6c1ee)';
        isLightTheme = true;
    }
});

// Update the time every second
setInterval(updateTime, 1000);
updateTime();  // Initialize clock immediately