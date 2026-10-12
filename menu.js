/* Mobile menu — one shared controller for every page.
   Locks page scroll while open, closes on Esc / link tap / resize to desktop,
   and keeps aria-expanded in sync. Runs immediately (no load wait). */
(function () {
  var nav = document.getElementById('nav');
  var btn = document.getElementById('navToggle');
  if (!nav || !btn) return;
  var mq = window.matchMedia('(max-width: 720px)');

  function set(open) {
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  btn.addEventListener('click', function () { set(!nav.classList.contains('is-open')); });
  nav.querySelectorAll('.nav-links a').forEach(function (a) {
    a.addEventListener('click', function () { set(false); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) { set(false); btn.focus(); }
  });
  function onChange(e) { if (!e.matches) set(false); }
  if (mq.addEventListener) mq.addEventListener('change', onChange); else mq.addListener(onChange);

  var y = document.getElementById('year');
  if (y && !y.textContent) y.textContent = new Date().getFullYear();
})();
