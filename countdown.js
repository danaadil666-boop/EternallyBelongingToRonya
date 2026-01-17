const startDate = new Date(2025, 0, 22);

const daysCountElem = document.getElementById("daysCount");
const liveTimerElem = document.getElementById("liveTimer");
const unlockButton = document.getElementById("unlockButton");
const passwordInput = document.getElementById("passwordInput");

const correctPassword = "RonyaLovesDanaAndDanaLovesRonya";

function updateDays() {
  const now = new Date();
  const diffTime = now - startDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  daysCountElem.textContent = diffDays;
}

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

unlockButton.addEventListener("click", () => {
  const input = passwordInput.value.trim();

  if (input === correctPassword) {
    window.location.href = "recap.html";
  } else {
    alert("Wrong password 💔");
  }
});
