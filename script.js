// ============================================
// POKE DIGITAL — INTERACTIONS
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------- Mobile nav toggle ----------
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
            // slight stagger for elements that enter together
            setTimeout(() => {
              entry.target.classList.add('is-visible');
            }, i * 60);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach((el) => observer.observe(el));
  } else {
    // fallback: no IntersectionObserver support
    revealEls.forEach((el) => el.classList.add('is-visible'));
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

      // Placeholder submit behavior — wire this up to your backend / form service
      // (e.g. Formspree, Resend, a serverless function) before going live.
      status.textContent = "Thanks — we'll be in touch shortly.";
      form.reset();
    });
  }

});
