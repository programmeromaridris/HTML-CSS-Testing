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

document.addEventListener('DOMContentLoaded', () => {
  const sojiro = document.getElementById('sojiro');
  const dialogue = document.getElementById('dialogue-box');

  // Slide in
  sojiro.classList.add('slide-in');
  dialogue.classList.add('slide-in');

  // After 3 seconds, fade out dialogue first, then sojiro
  setTimeout(() => {
    dialogue.classList.add('fade-out');
    document.getElementById('dialogue').classList.add('fade-out');

    setTimeout(() => {
      sojiro.classList.add('fade-out');
    }, 800); // sojiro fades 0.8s after dialogue starts fading
  }, 3000); // wait 3s before fading starts
});

function typeWriter(elementId, text, speed = 50) {
  const el = document.getElementById(elementId);
  let i = 0;
  const interval = setInterval(() => {
    el.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, speed);
}

document.addEventListener('DOMContentLoaded', () => {   
  typeWriter('dialogue', "Ah, you're back.", 50);
});