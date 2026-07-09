// ============================================
// POKE DIGITAL — INTERACTIONS
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // ---------- Page-load wipe cleanup ----------
  const loader = document.getElementById('loader');
  if (loader) {
    loader.addEventListener('animationend', () => loader.remove());
    setTimeout(() => loader.remove(), 1400); // fallback if animationend doesn't fire
  }

  // ---------- Kinetic hero word stagger ----------
  document.querySelectorAll('.hero-title .word').forEach((word, i) => {
    word.style.animationDelay = `${0.15 + i * 0.05}s`;
  });

  // ---------- Mobile nav ----------
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---------- Scroll reveal ----------
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('is-visible'), i * 60);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  // ---------- Count-up stats ----------
  const statEls = document.querySelectorAll('.stat-number');
  if (statEls.length && 'IntersectionObserver' in window) {
    const statObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = parseInt(el.dataset.count, 10) || 0;
          const suffix = el.dataset.suffix || '+';
          const duration = 1400;
          const start = performance.now();

          function tick(now) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.round(eased * target) + (progress === 1 ? suffix : '');
            if (progress < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
          statObserver.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    statEls.forEach((el) => statObserver.observe(el));
  }

  // ---------- Custom cursor ----------
  const cursorDot = document.getElementById('cursorDot');
  const cursorRing = document.getElementById('cursorRing');
  const cursorLabel = document.getElementById('cursorLabel');
  const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  if (isFinePointer && cursorDot && cursorRing) {
    document.body.classList.add('has-custom-cursor');

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    });

    function animateRing() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      cursorRing.style.left = `${ringX}px`;
      cursorRing.style.top = `${ringY}px`;
      requestAnimationFrame(animateRing);
    }
    animateRing();

    document.querySelectorAll('[data-cursor]').forEach((el) => {
      el.addEventListener('mouseenter', () => {
        const label = el.dataset.cursor;
        if (label) {
          cursorRing.classList.add('is-label');
          cursorLabel.textContent = label;
        } else {
          cursorRing.classList.add('is-hover');
        }
      });
      el.addEventListener('mouseleave', () => {
        cursorRing.classList.remove('is-hover', 'is-label');
        cursorLabel.textContent = '';
      });
    });
  } else {
    if (cursorDot) cursorDot.style.display = 'none';
    if (cursorRing) cursorRing.style.display = 'none';
  }

  // ---------- Magnetic buttons ----------
  if (isFinePointer) {
    document.querySelectorAll('.magnetic').forEach((btn) => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
        btn.style.transform = `translate(${x}px, ${y}px)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0)';
      });
    });
  }

  // ---------- Contact form ----------
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      if (!name || !email) {
        status.textContent = 'Please fill in your name and email.';
        return;
      }
      // Placeholder — wire up to Formspree, Resend, or a serverless function before going live.
      status.textContent = "Thanks — we'll be in touch shortly.";
      form.reset();
    });
  }

});
