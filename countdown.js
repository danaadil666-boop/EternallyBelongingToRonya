const startDate = new Date(2025, 0, 22);

const daysCountElem = document.getElementById("daysCount");
const liveTimerElem = document.getElementById("liveTimer");
const unlockButton = document.getElementById("unlockButton");
const passwordInput = document.getElementById("passwordInput");

const loadingScreen = document.getElementById("loadingScreen");

const correctPassword = "RonyaLovesDanaAndDanaLovesRonya";

// DAYS COUNTER
function updateDays() {
  const now = new Date();
  const diffTime = now - startDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  daysCountElem.textContent = diffDays;
}

// LIVE TIMER
function updateLiveTimer() {
  const now = new Date();
  let diff = now - startDate;

  const totalSeconds = Math.floor(diff / 1000);

  const seconds = totalSeconds % 60;
  const totalMinutes = Math.floor(totalSeconds / 60);

  const minutes = totalMinutes % 60;
  const totalHours = Math.floor(totalMinutes / 60);

  const hours = totalHours % 24;
  const totalDays = Math.floor(totalHours / 24);

  const months = Math.floor(totalDays / 30);
  const days = totalDays % 30;

  liveTimerElem.textContent = `${months} months ${days} days ${hours}h ${minutes}m ${seconds}s`;
}

updateDays();
updateLiveTimer();

setInterval(() => {
  updateDays();
  updateLiveTimer();
}, 1000);

// PASSWORD → LOADING SCREEN → RECAP PAGE
unlockButton.addEventListener("click", () => {
  const input = passwordInput.value.trim();

  if (input === correctPassword) {
    loadingScreen.style.display = "flex";

    setTimeout(() => {
      window.location.href = "recap.html";
    }, 2000); // 2 seconds loading screen
  } else {
    alert("Wrong password 💔");
  }
});
