(function () {
  'use strict';

  // ==========================================
  // CONFIG
  // To go live: drop the recording + poster at these paths, or update
  // the paths below to match. To enable the PDF button, set GC_PDF_PATH
  // to the file's path — the section stays hidden until it is set.
  // ==========================================
  var GC_VIDEO_SRC = 'assets/groundculture/groundculture-concept.mp4';
  var GC_VIDEO_POSTER = 'assets/groundculture/groundculture-poster.jpg';
  var GC_PDF_PATH = '';

  // ==========================================
  // CONCEPT VIDEO
  // ==========================================
  var video = document.getElementById('gcVideo');
  var fallback = document.getElementById('gcVideoFallback');
  var downloadLink = document.getElementById('gcVideoDownloadLink');

  if (video) {
    if (downloadLink) downloadLink.setAttribute('href', GC_VIDEO_SRC);

    video.addEventListener('loadedmetadata', function () {
      video.classList.add('is-ready');
      if (fallback) fallback.hidden = true;
    });

    video.addEventListener('error', function () {
      video.classList.remove('is-ready');
      if (fallback) fallback.hidden = false;
    });

    video.setAttribute('poster', GC_VIDEO_POSTER);
    video.src = GC_VIDEO_SRC;
    video.load();

    // autoplay muted once ready; browsers may still block it silently
    video.addEventListener('canplay', function () {
      var playPromise = video.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(function () { /* autoplay blocked — controls remain available */ });
      }
    });
  }

  // ==========================================
  // OPTIONAL PDF DOWNLOAD
  // ==========================================
  if (GC_PDF_PATH) {
    var pdfSection = document.getElementById('gcPdfSection');
    var pdfBtn = document.getElementById('gcPdfBtn');
    if (pdfSection && pdfBtn) {
      pdfBtn.setAttribute('href', GC_PDF_PATH);
      pdfSection.hidden = false;
    }
  }

  // ==========================================
  // REVEAL ANIMATION (restrained — reuses the
  // site's existing split-text / fade-in system)
  // ==========================================
  window.addEventListener('load', function () {
    if (!window.gsap) return;
    gsap.registerPlugin(ScrollTrigger);
    window.__pdAnimsRan = true;

    document.querySelectorAll('.gc-hero-title.split-text .word').forEach(function (word, i) {
      gsap.to(word, { y: 0, opacity: 1, duration: 0.9, delay: 0.25 + i * 0.08, ease: 'power3.out' });
    });
    gsap.to('.gc-hero .eyebrow.split-text .word', { y: 0, opacity: 1, duration: 0.7, delay: 0.05, ease: 'power3.out' });
    gsap.to('.gc-hero-sub', { opacity: 1, y: 0, duration: 0.8, delay: 0.45, ease: 'power2.out' });

    document.querySelectorAll('.section-title.split-text .word, .gc-section-title.split-text .word, .gc-closing-title.split-text .word').forEach(function (word) {
      gsap.to(word, {
        y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: word.closest('.split-text'), start: 'top 88%' }
      });
    });

    document.querySelectorAll('.fade-in').forEach(function (el, i) {
      gsap.to(el, {
        opacity: 1, y: 0, duration: 0.7, delay: (i % 3) * 0.08, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 90%' }
      });
    });

    document.querySelectorAll('.gc-area').forEach(function (el, i) {
      gsap.from(el, {
        opacity: 0, y: 20, duration: 0.6, delay: (i % 2) * 0.08, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 92%' }
      });
    });

    document.querySelectorAll('.gc-principle').forEach(function (el) {
      gsap.from(el, {
        opacity: 0, y: 16, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 90%' }
      });
    });
  });

  // Footer year
  var yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();

})();
