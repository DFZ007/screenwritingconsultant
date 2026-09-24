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
  function start() { stop(); if (!reduce) timer = setInterval(() => show(i + 1), 4000); }
  function stop() { clearInterval(timer); timer = null; }
  dots.forEach((d, k) => d.addEventListener('click', () => { show(k); start(); }));
  root.addEventListener('mouseenter', stop);
  root.addEventListener('mouseleave', start);
  root.addEventListener('focusin', stop);
  root.addEventListener('focusout', start);
  show(0);
  start();
})();
