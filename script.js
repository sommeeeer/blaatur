const blaaturDay = new Date('2023-11-04T10:00:00');
const dagerSpan = document.getElementById('dager');
const timerSpan = document.getElementById('timer');
const minutterSpan = document.getElementById('minutter');
const sekunderSpan = document.getElementById('sekunder');
const countdownHeading = document.getElementById('countdown');

const stopSvg = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-stop-filled" width="48" height="48" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
<path d="M17 4h-10a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3 -3v-10a3 3 0 0 0 -3 -3z" stroke-width="0" fill="currentColor"></path>
</svg>`;

const playSvg = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-music" width="48" height="48" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
<path d="M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
<path d="M13 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
<path d="M9 17v-13h10v13"></path>
<path d="M9 8h10"></path>
</svg>`;

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
const svg = document.querySelector('.svg');
svg.addEventListener('click', () => {
  if (audio.paused) {
    audio.currentTime = 0;
    audio.play();
    svg.innerHTML = stopSvg;
  } else {
    audio.pause();
    svg.innerHTML = playSvg;
  }
});