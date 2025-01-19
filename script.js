// script.js
document.addEventListener('DOMContentLoaded', () => {
    const videoPlayer = document.getElementById('videoPlayer');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    const volumeControl = document.getElementById('volumeControl');
    const themeIcon = document.getElementById('themeIcon');
    const body = document.body;

    const urlParams = new URLSearchParams(window.location.search);
    const videoSrc = urlParams.get('url');
    if (videoSrc) {
        videoPlayer.src = videoSrc;
    } else {
        Swal.fire('Error', 'No video URL provided', 'error');
    }

    playPauseBtn.addEventListener('click', () => {
        if (videoPlayer.paused) {
            videoPlayer.play();
            playPauseBtn.innerHTML = '<span class="material-icons">pause</span>';
        } else {
            videoPlayer.pause();
            playPauseBtn.innerHTML = '<span class="material-icons">play_arrow</span>';
        }
    });

    fullscreenBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            videoPlayer.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    });

    volumeControl.addEventListener('input', (event) => {
        videoPlayer.volume = event.target.value;
    });

    themeIcon.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        themeIcon.textContent = body.classList.contains('dark-mode') ? 'dark_mode' : 'light_mode';
    });
});
