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

  setTimeout(() => {
    triggerPersonaCartwheel('starry');
    setTimeout(() => triggerPersonaCartwheel('study-button'), 200);
  }, 5000); 

  function triggerPersonaCartwheel(elementId) {
  const el = document.getElementById(elementId);
  if (!el) return;

  const p5Keyframes = [
    { 
      transform: 'translate(-120vw, 100px) rotate(-540deg) scale(0.5) skewX(30deg)', 
      opacity: 0,
      offset: 0 
    },
    { 
      transform: 'translate(15vw, -20px) rotate(20deg) scale(1.3) skewX(-20deg)', 
      opacity: 1,
      offset: 0.6,
      easing: 'steps(3, end)' // This creates the "Jagged" anime look
    },
    { 
      transform: 'translate(-2vw, 5px) rotate(-10deg) scale(0.9)', 
      offset: 0.8,
      easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)' 
    },
    { 
      transform: 'translate(0, 0) rotate(0deg) scale(1)', 
      opacity: 1,
      offset: 1 
    }
  ];

  el.animate(p5Keyframes, {
    duration: 900,
    fill: 'forwards'
  });
}

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
