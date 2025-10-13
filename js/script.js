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

    // Detect mobile platform
    const ua = navigator.userAgent || navigator.vendor || window.opera;
    console.log(ua)
    console.log(navigator.platform)
    console.log(navigator.maxTouchPoints)
    const isAndroid = /Android/i.test(ua);
    const isIOS = (/iPad|iPhone|iPod/.test(ua) || navigator.platform === 'MacIntel');
    const deviceOS = isAndroid ? 'android' : (isIOS ? 'ios' : 'other');
    // Example: console.log('Device OS:', deviceOS);


    document.getElementById('download-dots').setAttribute('href', isIOS ? 'https://apps.apple.com/es/app/dots-memories-%C3%A1lbum-de-fotos/id6449039420' : 'https://play.google.com/store/apps/details?id=social.onelife&hl=es&pli=1')

    let audio = document.getElementById('background-audio');
    let playButton = document.getElementById('audio-button');

    function toggleAudio() {
        if (audio.paused) {
            audio.play();
            playButton.innerHTML = '<i class="fa-solid fa-pause"></i>'; // Change to pause icon
        } else {
            audio.pause();
            playButton.innerHTML = '<i class="fa-solid fa-play"></i>'; // Change to play icon
        }
    }
    playButton.addEventListener('click', toggleAudio);

    function setAudioTime() {
        const timeline = document.getElementById('track-timeline');
        const newTime = (timeline.value / 100) * audio.duration;
        audio.currentTime = newTime;
    }
    document.getElementById('track-timeline').addEventListener('input', setAudioTime);

    // Update timeline slider as audio plays
    audio.addEventListener('timeupdate', function() {
        const timeline = document.getElementById('track-timeline');
        if (audio.duration) {
            const progress = (audio.currentTime / audio.duration) * 100;
            timeline.value = progress;
        }
    });

    // Initialize button state based on autoplay
    if (!audio.paused) {
        playButton.textContent = '<i class="fa-solid fa-pause"></i>'; // Change to pause icon
    }
})();
