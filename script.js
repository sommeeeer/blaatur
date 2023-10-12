const blaaturDay = new Date('2023-11-04T10:00:00');
const dagerSpan = document.getElementById('dager');
const timerSpan = document.getElementById('timer');
const minutterSpan = document.getElementById('minutter');
const sekunderSpan = document.getElementById('sekunder');
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
    dagerSpan.textContent = days;
    timerSpan.textContent = hours;
    minutterSpan.textContent = minutes;
    sekunderSpan.textContent = seconds;
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();

const audio = document.getElementById('audio');
const svg = document.querySelector('svg');
svg.addEventListener('click', () => {
  audio.currentTime = 0;
  audio.play();
});
// document.addEventListener('DOMContentLoaded', () => {
//   audio.play();
// });
