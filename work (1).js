(function () {
  'use strict';

  // ==========================================
  // GSAP ANIMATIONS
  // ==========================================
  window.addEventListener('load', () => {
    gsap.registerPlugin(ScrollTrigger);

    // Hero title
    document.querySelectorAll('.work-hero-title .word').forEach((w, i) => {
      gsap.to(w, { y: '0%', duration: 1.2, delay: 0.2 + i * 0.1, ease: 'power4.out' });
    });
    gsap.from('.work-hero-sub', { opacity: 0, y: 20, duration: 0.8, delay: 0.6, ease: 'power2.out' });
    gsap.from('.work-hero .eyebrow', { opacity: 0, y: 10, duration: 0.6, delay: 0.1, ease: 'power2.out' });

    // Work items stagger on scroll
    document.querySelectorAll('.work-item').forEach((item) => {
      gsap.from(item.querySelector('.work-media'), {
        opacity: 0, y: 50, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: item, start: 'top 85%' }
      });
      gsap.from(item.querySelector('.work-info'), {
        opacity: 0, y: 30, duration: 0.8, delay: 0.15, ease: 'power2.out',
        scrollTrigger: { trigger: item, start: 'top 85%' }
      });
    });

    // CTA title
    document.querySelectorAll('.work-cta .word').forEach((w) => {
      gsap.to(w, {
        y: '0%', duration: 1.1, ease: 'power4.out',
        scrollTrigger: { trigger: '.work-cta', start: 'top 85%' }
      });
    });

    // Year
    const yr = document.getElementById('year');
    if (yr) yr.textContent = new Date().getFullYear();
  });

  // ==========================================
  // SCREENSHOT CAROUSELS
  // ==========================================
  document.querySelectorAll('.work-carousel').forEach((carousel) => {
    const track = carousel.querySelector('.carousel-track');
    const slides = carousel.querySelectorAll('.carousel-slide');
    const dotsContainer = carousel.querySelector('.carousel-dots');
    const prevBtn = carousel.querySelector('.carousel-btn--prev');
    const nextBtn = carousel.querySelector('.carousel-btn--next');

    if (!track || !slides.length) return;

    let current = 0;
    let autoTimer = null;

    // Build dots
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot' + (i === 0 ? ' is-active' : '');
      dot.setAttribute('aria-label', `Slide ${i + 1}`);
      dot.addEventListener('click', () => { goTo(i); resetAuto(); });
      dotsContainer.appendChild(dot);
    });

    function goTo(index) {
      current = (index + slides.length) % slides.length;
      track.style.transform = `translateX(-${current * 100}%)`;
      dotsContainer.querySelectorAll('.carousel-dot').forEach((d, i) => {
        d.classList.toggle('is-active', i === current);
      });
    }

    function startAuto() {
      autoTimer = setInterval(() => goTo(current + 1), 3500);
    }
    function resetAuto() { clearInterval(autoTimer); startAuto(); }

    prevBtn.addEventListener('click', () => { goTo(current - 1); resetAuto(); });
    nextBtn.addEventListener('click', () => { goTo(current + 1); resetAuto(); });

    // Pause on hover
    carousel.addEventListener('mouseenter', () => clearInterval(autoTimer));
    carousel.addEventListener('mouseleave', startAuto);

    // Touch swipe
    let touchStartX = 0;
    carousel.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
    carousel.addEventListener('touchend', (e) => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) { goTo(diff > 0 ? current + 1 : current - 1); resetAuto(); }
    });

    startAuto();
  });

  // ==========================================
  // CASE STUDY DATA
  // ==========================================
  const caseData = {
    smshd: {
      title: 'SMSHD',
      year: '2026',
      industry: 'Food & Beverage',
      services: 'UI/UX Design, Web Development, Brand Identity',
      liveUrl: 'https://smshd.vercel.app',
      video: 'assets/work/smshd.mp4',
      poster: 'assets/work/SMSHD.png',
      screenshots: ['assets/work/SMSHD.png','assets/work/SMSHD (2).png','assets/work/SMSHD (3).png','assets/work/SMSHD (4).png','assets/work/SMSHD (5).png','assets/work/SMSHD (6).png','assets/work/SMSHD (7).png','assets/work/SMSHD (8).png'],
      brief: 'A premium smash burger brand needed a digital identity that matched their street-style, high-energy aesthetic — something that felt more Joy Rush than fast food chain.',
      approach: 'We built a Joy Rush-inspired flat-design experience — massive Syne 800 typography, neon yellow and tomato red palette, continuous ticker marquees, and interactive menu cards that physically expand to reveal full flavour profiles on click. The about page features a wide cinematic process hero (Source → Ball → Smash → Stack) with dietary badges across every menu item. Google Reviews and Instagram Gallery sections add the social proof layer.',
      result: 'A portfolio piece that shows high-energy F&B design capability — interactive, bold, and fully responsive across all breakpoints. The dietary badge system and menu expand interaction demonstrate product-thinking beyond pure aesthetics.',
    },
    lumina: {
      title: 'LUMINA Architects',
      year: '2026',
      industry: 'Architecture & Interior Design',
      services: 'Cinematic UI, GSAP Animation, Web Development',
      liveUrl: 'https://lumina-architects.vercel.app',
      video: 'assets/work/lumina.mp4',
      poster: 'assets/work/lumina-poster.jpg',
      screenshots: ['assets/work/lumina-1.jpg','assets/work/lumina-2.jpg','assets/work/lumina-3.jpg','assets/work/lumina-4.jpg'],
      brief: 'A premium architecture studio needed a site as considered and cinematic as the spaces they design — dark, immersive, with motion that feels expensive.',
      approach: 'Modelled on Yodezeen.com\'s cinematic language. Hero Ken Burns zoom on scroll, text lines masked behind overflow containers that slide upward on power4.out easing, a GSAP ScrollTrigger pinned horizontal gallery (the signature move — scroll down, cards travel sideways), and a custom cursor that expands with contextual labels. The about page includes a Yodezeen-style "5 Reasons" section and a split "Let\'s / Talk" footer CTA. Four individual case study pages chain into each other with "Next Project" full-bleed transitions.',
      result: 'Seven pages of cinematic dark-luxury architecture content. The horizontal gallery pin is the hero interaction — it\'s the kind of thing clients screenshot and send saying "we want this."',
    },
    valt: {
      title: 'VALT Property Studio',
      year: '2026',
      industry: 'Real Estate',
      services: 'UI/UX Design, Web Development, Lead Generation',
      liveUrl: 'https://valt-property.vercel.app',
      video: 'assets/work/valt.mp4',
      poster: 'assets/work/valt-poster.jpg',
      screenshots: ['assets/work/valt-1.jpg','assets/work/valt-2.jpg','assets/work/valt-3.jpg','assets/work/valt-4.jpg'],
      brief: 'A premium Cape Town property studio needed more than a brochure site — they needed a full conversion engine with pricing, lead capture, and individual development pages.',
      approach: 'Hero carousel with 4 developments, each showing price from the first frame. Active development cards with availability badges (Available Now / Launching 2026 / Investment). Four dedicated property pages — each with a full photo gallery, unit type and pricing table with availability status, neighbourhood location section, and a property-specific enquiry form with WhatsApp direct link. Register Interest section for off-plan developments. Full lead capture form in the footer with development selector.',
      result: 'The most conversion-complete property site in the portfolio — everything a serious buyer needs to qualify themselves and make contact, without ever leaving the site.',
    },
    kanuka: {
      title: 'AA Kanuka Financial',
      year: '2026',
      industry: 'Financial Services',
      services: 'Corporate Design, Lenis Smooth Scroll, Web Development',
      liveUrl: 'https://aa-kanuka.vercel.app',
      video: 'assets/work/kanuka.mp4',
      poster: 'assets/work/kanuka-poster.jpg',
      screenshots: ['assets/work/kanuka-1.jpg','assets/work/kanuka-2.jpg','assets/work/kanuka-3.jpg','assets/work/kanuka-4.jpg'],
      brief: 'An established Eastern Cape financial services firm needed a site that projected institutional credibility while remaining approachable to the SME owners they serve.',
      approach: 'Rhetores.fr-inspired corporate luxury aesthetic — white `#FAFAFA` background, silver `#ABABAB` accents, warm dark gradient for key sections (vision quote, stats band, footer). Lenis smooth scroll creates buttery momentum. GSAP ScrollTrigger proxy correctly wired to Lenis so all animations fire at the right scroll position. Real company data throughout: Ayanda and Aphumelela Kanuka, 082 402 5113, 2834 Phambo Street, Queenstown. Magnetic cursor snap on all interactive elements.',
      result: 'A professional financial services site that punches well above the typical Eastern Cape SME web presence — and proves Poke Digital can handle corporate, not just consumer brands.',
    },
    noir: {
      title: 'NØIR Fashion Label',
      year: '2026',
      industry: 'Fashion',
      services: 'Editorial Design, WebGL Fabric, Web Development',
      liveUrl: 'https://noir-fashion.vercel.app',
      video: 'assets/work/noir.mp4',
      poster: 'assets/work/noir-poster.jpg',
      screenshots: ['assets/work/noir-1.jpg','assets/work/noir-2.jpg','assets/work/noir-3.jpg','assets/work/noir-4.jpg'],
      brief: 'An avant-garde fashion label needed a digital presence as considered and uncompromising as their collections — pure, editorial, and impossible to ignore.',
      approach: 'Pure black `#000000` + pure white `#FFFFFF`, zero accent colours. Cormorant Garamond 300-weight at extreme scale (up to 200px). The hero features a Three.js silk fabric wave that ripples outward from the cursor position — moving the mouse across the page creates physical drag through the fabric. Horizontal-scroll lookbook triggered by scroll. The nav uses `mix-blend-mode: difference` so it reads regardless of what it floats over.',
      result: 'The most distinctive site in the portfolio — immediately positions Poke Digital in the high-fashion editorial space.',
    },
    nexus: {
      title: 'NEXUS Esports Guild',
      year: '2026',
      industry: 'Gaming / Esports',
      services: 'Cyber-Industrial UI, Three.js Particles, Web Development',
      liveUrl: 'https://nexus-guild.vercel.app',
      video: 'assets/work/nexus.mp4',
      poster: 'assets/work/nexus-poster.jpg',
      screenshots: ['assets/work/nexus-1.jpg','assets/work/nexus-2.jpg','assets/work/nexus-3.jpg','assets/work/nexus-4.jpg'],
      brief: 'A next-gen esports collective needed a digital home that matched the intensity and precision of competitive gaming culture.',
      approach: 'Dark `#080A0F` canvas with neon green `#00FF88` and cyan accents. The centrepiece is a 4,000-point Three.js particle sphere that deforms toward the cursor as you move — the points pull magnetically in the direction of mouse movement. Scroll down and the background particles accelerate into warp speed before releasing. CRT scanline overlay adds the cyber authenticity. JetBrains Mono throughout for the tactical monospace data-panel feel.',
      result: 'Shows Poke Digital\'s capability at the loud end of the spectrum — just as considered as the minimal work, just different rules.',
    },
    clarent: {
      title: 'Clarent FinTech SaaS',
      year: '2026',
      industry: 'FinTech / SaaS',
      services: 'Swiss Minimalism, Three.js WebGL, SaaS Design',
      liveUrl: 'https://clarent-fintech.vercel.app',
      video: 'assets/work/clarent.mp4',
      poster: 'assets/work/clarent-poster.jpg',
      screenshots: ['assets/work/clarent-1.jpg','assets/work/clarent-2.jpg','assets/work/clarent-3.jpg','assets/work/clarent-4.jpg'],
      brief: 'A financial intelligence SaaS platform needed a site that communicated precision, clarity, and technical credibility without feeling cold or inaccessible.',
      approach: 'Elite Swiss typography — Inter only, strict 8-column grid, stark white `#FAFAFA` with electric green `#00C853` accent. The Three.js torus knot is the centrepiece: it starts as a complex mathematical form and progressively morphs — vertices flatten, curves simplify — as you scroll through the features section, visually representing data fluidity. Features grid, 3-tier pricing table, and a SOC 2 security CTA section complete the conversion flow.',
      result: 'The B2B SaaS entry in the portfolio — proves Poke Digital understands conversion architecture, not just visual design.',
    },
    aurelia: {
      title: 'Aurelia Boutique Hotel',
      year: '2026',
      industry: 'Hospitality',
      services: 'Editorial Minimalism, Three.js Ribbon, Hospitality Design',
      liveUrl: 'https://aurelia-hotel.vercel.app',
      video: 'assets/work/aurelia.mp4',
      poster: 'assets/work/aurelia-poster.jpg',
      screenshots: ['assets/work/aurelia-1.jpg','assets/work/aurelia-2.jpg','assets/work/aurelia-3.jpg','assets/work/aurelia-4.jpg'],
      brief: 'A boutique hotel in the Franschhoek Valley needed a digital experience that felt as slow and considered as the stay itself — the anti-Booking.com.',
      approach: 'Aman and Six Senses as reference. Warm sand `#F9F8F6` background, Playfair Display serif, DM Mono for eyebrow labels. The Three.js scene features a large ribbon wave with rippling vertices and a floating architectural torus ring. GSAP camera fly-through creates the sensation of physically moving into a space as you scroll past each section. Whisper-quiet easing — `power3.out` at 1.2s — everywhere.',
      result: 'The luxury hospitality piece. Shows the restraint and editorial sensitivity required for premium travel brands.',
    },
  };

  // ==========================================
  // CASE STUDY PANEL
  // ==========================================
  const panel = document.getElementById('casePanel');
  const panelContent = document.getElementById('caseContent');
  const closeBtn = document.getElementById('caseClose');

  document.querySelectorAll('.btn-work-case').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const key = btn.dataset.case;
      const data = caseData[key];
      if (!data) return;
      openPanel(data);
    });
  });

  function openPanel(data) {
    panelContent.innerHTML = `
      <div class="cs-panel-hero">
        <video autoplay muted loop playsinline poster="${data.poster}">
          <source src="${data.video}" type="video/mp4">
          <img src="${data.poster}" alt="${data.title}">
        </video>
      </div>
      <div class="cs-panel-body">
        <div class="cs-panel-header">
          <h1 class="cs-panel-title">${data.title}</h1>
          <div class="cs-panel-meta">
            <span><strong>${data.year}</strong>Year</span>
            <span><strong>${data.industry}</strong>Industry</span>
            <span><strong>${data.services}</strong>Services</span>
          </div>
        </div>
        <div class="cs-panel-gallery">
          ${data.screenshots.map((s, i) => `<img src="${s}" alt="${data.title} screenshot ${i+1}" loading="lazy">`).join('')}
        </div>
        <div class="cs-panel-section">
          <h3>The Brief</h3>
          <p>${data.brief}</p>
        </div>
        <div class="cs-panel-section">
          <h3>Our Approach</h3>
          <p>${data.approach}</p>
        </div>
        <div class="cs-panel-section">
          <h3>The Result</h3>
          <p>${data.result}</p>
        </div>
        <div class="cs-panel-cta">
          <a href="${data.liveUrl}" target="_blank" rel="noopener" class="btn-work-live">View Live Site →</a>
          <a href="index.html#contact" class="btn-work-case">Start Your Project</a>
        </div>
      </div>
    `;

    panel.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    panel.scrollTop = 0;

    // Animate panel content in
    gsap.from('.cs-panel-hero', { opacity: 0, duration: 0.6, ease: 'power2.out' });
    gsap.from('.cs-panel-title', { opacity: 0, y: 30, duration: 0.7, delay: 0.2, ease: 'power3.out' });
    gsap.from('.cs-panel-meta', { opacity: 0, y: 20, duration: 0.5, delay: 0.35, ease: 'power2.out' });
    gsap.from('.cs-panel-gallery', { opacity: 0, y: 40, duration: 0.7, delay: 0.45, ease: 'power2.out' });
    gsap.from('.cs-panel-section', { opacity: 0, y: 20, duration: 0.5, stagger: 0.1, delay: 0.5, ease: 'power2.out' });
  }

  function closePanel() {
    panel.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closePanel);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closePanel(); });

  // ==========================================
  // CURSOR (shared with main site)
  // ==========================================
  const cursorDot = document.getElementById('cursorDot');
  const cursorRing = document.getElementById('cursorRing');
  const isFine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  if (isFine && cursorDot && cursorRing) {
    let mx = 0, my = 0, rx = 0, ry = 0;
    window.addEventListener('mousemove', (e) => {
      mx = e.clientX; my = e.clientY;
      cursorDot.style.left = mx + 'px';
      cursorDot.style.top = my + 'px';
    });
    (function tick() {
      rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
      cursorRing.style.left = rx + 'px'; cursorRing.style.top = ry + 'px';
      requestAnimationFrame(tick);
    })();
    document.querySelectorAll('[data-cursor]').forEach((el) => {
      el.addEventListener('mouseenter', () => cursorRing.classList.add('is-active'));
      el.addEventListener('mouseleave', () => cursorRing.classList.remove('is-active'));
    });
  }

})();
