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
