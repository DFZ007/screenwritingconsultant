// Mobile menu
const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    })
  );
}

// Demo forms: no backend on GitHub Pages, so show what would happen instead.
document.querySelectorAll('form[data-demo]').forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const status = form.querySelector('.form-status');
    if (status) status.textContent = form.dataset.demo;
  });
});

// Blog category filters
const chips = document.querySelectorAll('.chip');
const cards = document.querySelectorAll('.post-card');
chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    chips.forEach((c) => c.setAttribute('aria-pressed', 'false'));
    chip.setAttribute('aria-pressed', 'true');
    const cat = chip.dataset.cat;
    cards.forEach((card) => {
      card.hidden = cat !== 'all' && card.dataset.cat !== cat;
    });
  });
});

// Current year in footer
document.querySelectorAll('[data-year]').forEach((el) => (el.textContent = new Date().getFullYear()));

// Rotating quote hero
(function () {
  const root = document.querySelector('.quote-hero');
  if (!root) return;
  const slides = [...root.querySelectorAll('.qh-slide')];
  const dots = [...root.querySelectorAll('.qh-dot')];
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let i = 0, timer = null;

  function show(n) {
    i = (n + slides.length) % slides.length;
    slides.forEach((s, k) => { s.classList.toggle('is-active', k === i); s.setAttribute('aria-hidden', k === i ? 'false' : 'true'); });
    dots.forEach((d, k) => d.setAttribute('aria-current', k === i ? 'true' : 'false'));
  }
  function start(first) {
    stop();
    if (reduce) return;
    timer = setTimeout(function tick() { show(i + 1); timer = setTimeout(tick, 4000); }, first ? 2500 : 4000);
  }
  function stop() { clearTimeout(timer); timer = null; }
  dots.forEach((d, k) => d.addEventListener('click', () => { show(k); start(); }));
  root.addEventListener('focusin', stop);
  root.addEventListener('focusout', start);
  show(0);
  start(true);
})();

// Black & white to color, linked to scroll position
(function () {
  const imgs = [...document.querySelectorAll('.titlecard__poster, .fp img, .teach-photo__img img')];
  if (!imgs.length) return;
  document.documentElement.classList.add('bw-scroll');
  let ticking = false;
  function update() {
    const vh = window.innerHeight;
    imgs.forEach((img) => {
      const r = img.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      // 0 when the image's top enters at the bottom of the screen, 1 when its center reaches the middle
      // Fully black and white until the image's top passes 85% of the screen height;
      // fully in color once its center reaches 40% of the screen height. Eased so it stays grayer longer.
      const startTop = vh * 0.85;
      const endTop = vh * 0.4 - r.height / 2;
      let p = (startTop - r.top) / (startTop - endTop);
      p = Math.min(1, Math.max(0, p));
      p = p * p;
      img.style.filter = 'grayscale(' + (1 - p).toFixed(3) + ')';
    });
    ticking = false;
  }
  function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  window.addEventListener('hashchange', () => setTimeout(update, 50));
  update();
})();
