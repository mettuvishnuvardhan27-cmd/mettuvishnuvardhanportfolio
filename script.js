const header = document.querySelector('.nav');
const btn = document.querySelector('.menu-btn');
const menu = document.getElementById('menu');

function setMenu(open) {
  header.classList.toggle('menu-open', open);
  btn.setAttribute('aria-expanded', String(open));
  btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  document.body.classList.toggle('locked', open);
}
btn?.addEventListener('click', () => setMenu(!header.classList.contains('menu-open')));
menu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

// Hero headline: a soft spotlight follows the pointer
const title = document.getElementById('hero-title');
const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
if (title && !calm) {
  const hero = title.closest('.hero');
  hero.addEventListener('pointermove', e => {
    const r = title.getBoundingClientRect();
    title.style.setProperty('--x', (e.clientX - r.left) + 'px');
    title.style.setProperty('--y', (e.clientY - r.top) + 'px');
  });
}

// ---- extra energy ----
const fine = matchMedia('(hover:hover) and (pointer:fine)').matches;

// scroll progress
const bar = document.querySelector('.progress');
const onScroll = () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  bar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
};
addEventListener('scroll', onScroll, { passive: true }); onScroll();

// hero dot-grid that lights up around the pointer
const cv = document.getElementById('grid');
if (cv) {
  const ctx = cv.getContext('2d');
  const hero = cv.parentElement;
  let w, h, dpr, cols, rows, running = true;
  const gap = 30, m = { x: -999, y: -999, tx: -999, ty: -999 };
  const size = () => {
    dpr = Math.min(devicePixelRatio || 1, 2);
    w = hero.clientWidth; h = hero.clientHeight;
    cv.width = w * dpr; cv.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    cols = Math.ceil(w / gap) + 1; rows = Math.ceil(h / gap) + 1;
  };
  const draw = t => {
    if (!running) return;
    m.x += (m.tx - m.x) * .12; m.y += (m.ty - m.y) * .12;
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) {
      const x = i * gap, y = j * gap;
      const d = Math.hypot(x - m.x, y - m.y);
      const near = Math.max(0, 1 - d / 220);
      const wave = calm ? 0 : (Math.sin(t / 900 + i * .35 + j * .25) + 1) * .5;
      const r = 1 + wave * .6 + near * 2.6;
      const a = .14 + wave * .08 + near * .85;
      ctx.fillStyle = `rgba(255,255,255,${a})`;
      ctx.beginPath(); ctx.arc(x, y, r, 0, 6.283); ctx.fill();
    }
    if (!calm) requestAnimationFrame(draw);
  };
  size(); addEventListener('resize', size);
  hero.addEventListener('pointermove', e => {
    const r = hero.getBoundingClientRect();
    m.tx = e.clientX - r.left; m.ty = e.clientY - r.top;
  });
  hero.addEventListener('pointerleave', () => { m.tx = m.ty = -999; });
  new IntersectionObserver(([e]) => {
    const was = running; running = e.isIntersecting;
    if (running && !was && !calm) requestAnimationFrame(draw);
  }).observe(hero);
  requestAnimationFrame(draw);
}

if (fine && !calm) {
  // soft cursor dot
  const dot = document.querySelector('.cursor');
  let cx = 0, cy = 0, tx = 0, ty = 0;
  addEventListener('pointermove', e => { tx = e.clientX; ty = e.clientY; dot.classList.add('on'); });
  document.addEventListener('pointerleave', () => dot.classList.remove('on'));
  (function loop() {
    cx += (tx - cx) * .2; cy += (ty - cy) * .2;
    dot.style.transform = `translate(${cx}px,${cy}px)`;
    requestAnimationFrame(loop);
  })();
  document.querySelectorAll('a,button').forEach(el => {
    el.addEventListener('pointerenter', () => dot.classList.add('big'));
    el.addEventListener('pointerleave', () => dot.classList.remove('big'));
  });

  // tilt on project panels
  document.querySelectorAll('.project').forEach(card => {
    card.addEventListener('pointermove', e => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - .5, py = (e.clientY - r.top) / r.height - .5;
      card.style.setProperty('--ry', (px * 5).toFixed(2) + 'deg');
      card.style.setProperty('--rx', (-py * 5).toFixed(2) + 'deg');
    });
    card.addEventListener('pointerleave', () => { card.style.setProperty('--rx', '0deg'); card.style.setProperty('--ry', '0deg'); });
  });

  // magnetic buttons
  document.querySelectorAll('.button, .nav-cta').forEach(b => {
    b.addEventListener('pointermove', e => {
      const r = b.getBoundingClientRect();
      b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .25}px,${(e.clientY - r.top - r.height / 2) * .35}px)`;
    });
    b.addEventListener('pointerleave', () => { b.style.transform = ''; });
  });
}
