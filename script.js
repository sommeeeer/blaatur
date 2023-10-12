const blaaturDay = new Date('2023-11-04T10:00:00+01:00');
const countdownHeading = document.getElementById('countdown');

function updateCountdown() {
  const currentDate = new Date();

  const timeDifference = blaaturDay - currentDate;

  if (timeDifference <= 0) {
    console.log('we doneeee');
  } else {
    const days = Math.floor(timeDifference / 1000 / 60 / 60 / 24);
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    let daysString = '';
    if (days === 1) {
      daysString = '1 dag ';
    } else if (days === 0) {
      daysString = '';
    } else {
      daysString = `${days} dager `;
    }

    let hoursString = '';
    if (hours === 1) {
      hoursString = '1 time ';
    } else if (hours === 0) {
      hoursString = '';
    } else {
      hoursString = `${hours} timer `;
    }

    let minutesString = '';
    if (minutes === 1) {
      minutesString = '1 minutt ';
    } else if (minutes === 0) {
      minutesString = '';
    } else {
      minutesString = `${minutes} minutter `;
    }

    let secondsString = '';
    if (seconds === 1) {
      secondsString = '1 sekund ';
    } else {
      secondsString = `${seconds} sekunder `;
    }

    countdownHeading.textContent = `${daysString}${hoursString}${minutesString}${secondsString}`;
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();
