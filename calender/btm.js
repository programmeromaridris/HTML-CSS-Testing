// Spacebar to toggle music
document.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    e.preventDefault();
    const music = document.getElementById('bgMusic');
    music.volume = 0.4;
    if (music.paused) {
      music.play();
    } else {
      music.pause();
    }
  }
});



