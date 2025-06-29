let countdown;

function startTimer() {
  const input = document.getElementById("minutesInput").value;
  const totalSeconds = input * 60;
  let timeLeft = totalSeconds;

  clearInterval(countdown); // Stop previous timer

  countdown = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById("timer").textContent = 
      `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    if (timeLeft <= 0) {
      clearInterval(countdown);
      alert("Time's up!");
    }

    timeLeft--;
  }, 1000);
}
