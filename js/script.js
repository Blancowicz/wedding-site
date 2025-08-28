// Countdown timer
// This script counts down to the wedding date and updates the DOM every second.
(function() {
    // Target date (14 February 2026). Use locale time to avoid timezone glitches.
    const targetDate = new Date('2026-02-14T00:00:00');

    function updateCountdown() {
        const now = new Date();
        let diff = targetDate.getTime() - now.getTime();
        if (diff < 0) diff = 0;
        // calculate time units
        const seconds = Math.floor(diff / 1000) % 60;
        const minutes = Math.floor(diff / (1000 * 60)) % 60;
        const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        // update DOM elements
        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }
    // initial call
    updateCountdown();
    // update every second
    setInterval(updateCountdown, 1000);
})();