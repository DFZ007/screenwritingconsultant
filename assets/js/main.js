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

// Open the matching FAQ answer when a question link is clicked
(function () {
  function openFromHash() {
    const id = decodeURIComponent(location.hash.slice(1));
    if (!id) return;
    const el = document.getElementById(id);
    if (el && el.tagName === 'DETAILS') {
      el.open = true;
      el.classList.add('is-flash');
      setTimeout(() => el.classList.remove('is-flash'), 1600);
    }
  }
  window.addEventListener('hashchange', openFromHash);
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a.what__q');
    if (a) setTimeout(openFromHash, 0);
  });
  openFromHash();
})();

// Service cards: clicking moves the highlight and preselects the service in the inquiry form
(function () {
  const cards = [...document.querySelectorAll('.service[data-option]')];
  if (!cards.length) return;
  const select = document.getElementById('service');
  function choose(card) {
    cards.forEach((c) => {
      const on = c === card;
      c.classList.toggle('is-selected', on);
      c.setAttribute('aria-current', on ? 'true' : 'false');
      const btn = c.querySelector('.btn');
      if (btn) { btn.classList.toggle('btn--primary', on); btn.classList.toggle('btn--ghost', !on); }
    });
    if (select) select.selectedIndex = Number(card.dataset.option);
  }
  cards.forEach((card) => {
    card.addEventListener('click', () => choose(card));
    card.addEventListener('keydown', (e) => {
      if ((e.key === 'Enter' || e.key === ' ') && e.target === card) { e.preventDefault(); choose(card); }
    });
  });
})();

// Brand lockup: stretch "SCREENWRITING CONSULTANT" to exactly the width of "MATT TABAK" with whatever font loads
(function () {
  function fit() {
    document.querySelectorAll('.brand').forEach((brand) => {
      const name = brand.querySelector('.brand__name');
      const kicker = brand.querySelector('.brand__kicker');
      if (!name || !kicker) return;
      const nameLS = parseFloat(getComputedStyle(name).letterSpacing) || 0;
      const target = name.getBoundingClientRect().width - nameLS;
      kicker.style.letterSpacing = '0px';
      kicker.style.marginRight = '0px';
      kicker.style.display = 'inline-block';
      const base = kicker.getBoundingClientRect().width;
      const chars = kicker.textContent.trim().length;
      if (chars < 2 || target <= 0) return;
      const ls = Math.max(0, (target - base) / (chars - 1));
      kicker.style.letterSpacing = ls.toFixed(2) + 'px';
      kicker.style.marginRight = (-ls).toFixed(2) + 'px';
    });
  }
  fit();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
  window.addEventListener('resize', fit);
  window.addEventListener('load', fit);
})();
