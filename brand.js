/* Brand design section — click a board to open it full size.
   Uses the native <dialog> (focus trap + Esc built in). */
(function () {
  var grid = document.getElementById('brandGrid');
  var dlg = document.getElementById('brandLightbox');
  if (!grid || !dlg || typeof dlg.showModal !== 'function') return;
  var tiles = Array.prototype.slice.call(grid.querySelectorAll('.bg-tile'));
  var img = dlg.querySelector('img');
  var cap = dlg.querySelector('figcaption');
  var i = 0;

  function show(n) {
    i = (n + tiles.length) % tiles.length;
    var t = tiles[i], s = t.querySelector('img');
    img.src = s.getAttribute('src');
    img.alt = s.getAttribute('alt');
    cap.innerHTML = t.querySelector('.bg-cap').innerHTML;
  }
  function open(n) {
    show(n);
    document.documentElement.classList.add('bl-open');
    dlg.showModal();
  }
  tiles.forEach(function (t, n) { t.addEventListener('click', function () { open(n); }); });
  dlg.querySelector('.bl-prev').addEventListener('click', function () { show(i - 1); });
  dlg.querySelector('.bl-next').addEventListener('click', function () { show(i + 1); });
  dlg.querySelector('.bl-close').addEventListener('click', function () { dlg.close(); });
  dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); }); // backdrop click
  dlg.addEventListener('close', function () {
    document.documentElement.classList.remove('bl-open');
    tiles[i].focus();
  });
  dlg.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') show(i - 1);
    if (e.key === 'ArrowRight') show(i + 1);
  });
})();
