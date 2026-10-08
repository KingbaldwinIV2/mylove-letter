const pages = [...document.querySelectorAll('.letter-page')];
const pageNo = document.getElementById('pageNo');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const dots = document.getElementById('dots');
let current = 0;

pages.forEach((_, i) => {
  const d = document.createElement('button');
  d.className = 'dot';
  d.type = 'button';
  d.setAttribute('aria-label', `Go to page ${i + 1}`);
  d.addEventListener('click', () => goTo(i));
  dots.appendChild(d);
});

function goTo(index) {
  if (index < 0 || index >= pages.length) return;
  pages.forEach((p, i) => {
    p.classList.toggle('active', i === index);
    p.classList.toggle('prev', i < index);
  });
  current = index;
  pageNo.textContent = String(index + 1);
  prev.disabled = index === 0;
  next.disabled = index === pages.length - 1;
  [...dots.children].forEach((d, i) => d.classList.toggle('active', i === index));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

prev.addEventListener('click', () => goTo(current - 1));
next.addEventListener('click', () => goTo(current + 1));

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === ' ') {
    e.preventDefault();
    if (current < pages.length - 1) goTo(current + 1);
  }
  if (e.key === 'ArrowLeft') goTo(current - 1);
});

let touchStartX = null;
document.addEventListener('touchstart', e => {
  touchStartX = e.changedTouches[0].clientX;
}, {passive:true});

document.addEventListener('touchend', e => {
  if (touchStartX == null) return;
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 60) goTo(current + (dx < 0 ? 1 : -1));
  touchStartX = null;
}, {passive:true});

function addHeart(){
  const h = document.createElement('div');
  h.className = 'heart';
  h.textContent = Math.random() > .2 ? '♡' : '♥';
  h.style.left = `${Math.random()*100}%`;
  h.style.setProperty('--drift', `${(Math.random()*120-60)}px`);
  h.style.animationDuration = `${7 + Math.random()*6}s`;
  h.style.fontSize = `${11 + Math.random()*12}px`;
  document.querySelector('.hearts').appendChild(h);
  setTimeout(() => h.remove(), 14000);
}
setInterval(addHeart, 900);
for (let i=0;i<8;i++) setTimeout(addHeart, i*350);

goTo(0);
