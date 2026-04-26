
const container = document.getElementById('petals');

const petalColors = [
  'rgba(242,196,196,0.7)',   // blush pink
  'rgba(232,160,160,0.6)',   // soft rose
  'rgba(245,233,217,0.8)',   // warm beige
  'rgba(212,160,168,0.65)',  // muted pink
  'rgba(253,246,238,0.9)',   // lightest beige
];


function createPetal() {
  const petal = document.createElement('span');
  petal.classList.add('petal');
  const startX = Math.random() * 100;

  const duration = 6 + Math.random() * 8;

  const delay = Math.random() * 10;

  const size = 8 + Math.random() * 10;

  const color = petalColors[Math.floor(Math.random() * petalColors.length)];

  petal.style.left            = startX + '%';
  petal.style.width           = size + 'px';
  petal.style.height          = (size * 1.3) + 'px';
  petal.style.background      = color;
  petal.style.animationDuration = duration + 's';
  petal.style.animationDelay  = delay + 's';

  if (Math.random() < 0.5) {
    petal.style.transform = 'scaleX(-1)';
  }
  container.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, (duration + delay) * 1000);
}

for (let i = 0; i < 18; i++) {
  createPetal();
}

setInterval(createPetal, 600);
const lines = document.querySelectorAll('.verse p');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.2 }
);

lines.forEach((line) => {
  line.style.opacity   = '0';
  line.style.transform = 'translateY(10px)';
  line.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

  observer.observe(line);
});

const styleObserver = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === 'attributes' && 
        mutation.attributeName === 'class') {
      const el = mutation.target;
      if (el.classList.contains('visible')) {
        el.style.opacity   = '1';
        el.style.transform = 'translateY(0)';
      }
    }
  });
});

lines.forEach((line) => {
  styleObserver.observe(line, { attributes: true });
});