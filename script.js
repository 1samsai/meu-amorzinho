document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("audio");
    const playButton = document.querySelector(".controls button:nth-child(2)");
    const durationText = document.getElementById("duration");
    const timeTogether = document.getElementById("time-together");

    function updateDuration() {
        durationText.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
    }

    function formatTime(seconds) {
        const min = Math.floor(seconds / 60);
        const sec = Math.floor(seconds % 60);
        return `${min}:${sec < 10 ? "0" : ""}${sec}`;
    }

    function togglePlay() {
        if (audio.paused) {
            audio.play();
            playButton.textContent = "⏸️";
        } else {
            audio.pause();
            playButton.textContent = "▶️";
        }
    }

    function calculateTimeTogether() {
        const startDate = new Date("2024-05-24");
        const now = new Date();
        const diff = now - startDate;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        timeTogether.textContent = `Juntos há ${days} dias 💖`;
    }

    audio.addEventListener("timeupdate", updateDuration);
    calculateTimeTogether();
});
