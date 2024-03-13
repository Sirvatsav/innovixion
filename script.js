function startTimer() {
    const targetTimeInput = document.getElementById('target-time');
    const targetTime = new Date(targetTimeInput.value).getTime();
    
    const timerElement = document.getElementById('timer');
  
    // Update the countdown every 1 second
    const timerInterval = setInterval(function() {
      const now = new Date().getTime();
      const distance = targetTime - now;
  
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  
      // If the countdown is over, stop the timer
      if (distance < 0) {
        clearInterval(timerInterval);
        timerElement.innerHTML = "Time's up!";
      }
    }, 1000);
  }