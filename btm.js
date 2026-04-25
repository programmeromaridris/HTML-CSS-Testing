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
  const name = document.getElementById('name')
  const dialogueBox = document.getElementById('dialogue-box');
  const dialogueText = document.getElementById('dialogue');

  // Slide in
  sojiro.classList.add('slide-in');
  dialogueBox.classList.add('slide-in');
  name.classList.add('slide-in');

  // Typewriter effect, then fade out after text is done
  typeWriter('dialogue', "Ah, you're back..", 50, () => {
    setTimeout(() => {
      dialogueBox.classList.add('fade-out');
      dialogueText.classList.add('fade-out');
      name.classList.add('fade-out')
      setTimeout(() => {
        sojiro.classList.add('fade-out');
      }, 800);
    }, 1000); // 1s after typewriter finishes
  });

function typeWriter(elementId, text, speed = 50, callback) {
  const el = document.getElementById(elementId);
  el.textContent = '';
  let i = 0;
  const interval = setInterval(() => {
    el.textContent += text[i];
    i++;
    if (i >= text.length) {
      clearInterval(interval);
      if (typeof callback === 'function') callback();
    }
  }, speed);
}
})
