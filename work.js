(function () {
  'use strict';

  // ==========================================
  // GSAP
  // ==========================================
  window.addEventListener('load', () => {
    gsap.registerPlugin(ScrollTrigger);

    document.querySelectorAll('.work-hero-title .word').forEach((w, i) => {
      gsap.to(w, { y: '0%', duration: 1.2, delay: 0.2 + i * 0.1, ease: 'power4.out' });
    });
    gsap.from('.work-hero .eyebrow', { opacity: 0, y: 10, duration: 0.6, delay: 0.1, ease: 'power2.out' });

    document.querySelectorAll('.work-card').forEach((card) => {
      gsap.from(card, {
        opacity: 0, y: 50, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: card, start: 'top 88%' }
      });
    });

    document.querySelectorAll('.work-cta .word').forEach((w) => {
      gsap.to(w, { y: '0%', duration: 1.1, ease: 'power4.out',
        scrollTrigger: { trigger: '.work-cta', start: 'top 85%' }
      });
    });

    const yr = document.getElementById('year');
    if (yr) yr.textContent = new Date().getFullYear();
  });

  // ==========================================
  // CASE STUDY DATA
  // ==========================================
  const caseData = {
    smshd: {
      title: 'SMSHD',
      year: '2026', industry: 'Food & Beverage', services: 'UI/UX Design, Web Development, Brand Identity',
      video: 'assets/work/smshd.mp4',
      poster: 'assets/work/smshd-1.png',
      slides: ['assets/work/smshd-2.png','assets/work/smshd-3.png','assets/work/smshd-4.png','assets/work/smshd-5.png','assets/work/smshd-6.png','assets/work/smshd-7.png','assets/work/smshd-8.png'],
      brief: 'A premium smash burger brand needed a digital identity that matched their street-style, high-energy aesthetic — something that felt more Joy Rush than fast food chain.',
      approach: 'Joy Rush-inspired flat design — massive Syne 800 typography, neon yellow and tomato red palette, continuous ticker marquees, and interactive menu cards that expand on click to reveal full flavour profiles. The about page features a wide cinematic process hero with dietary badges across every menu item. Google Reviews and Instagram Gallery sections add social proof.',
      result: 'A portfolio piece that shows high-energy F&B design capability — interactive, bold, and fully responsive. The dietary badge system and menu expand interaction demonstrate product-thinking beyond pure aesthetics.',
    },
    lumina: {
      title: 'LUMINA Architects',
      year: '2026', industry: 'Architecture', services: 'Cinematic UI, GSAP Animation, Web Development',
      video: 'assets/work/lumina.mp4', poster: 'assets/work/lumina-poster.jpg',
      slides: ['assets/work/lumina-1.jpg','assets/work/lumina-2.jpg','assets/work/lumina-3.jpg','assets/work/lumina-4.jpg','assets/work/lumina-5.jpg'],
      brief: 'A premium architecture studio needed a site as considered and cinematic as the spaces they design.',
      approach: 'Modelled on Yodezeen.com. Hero Ken Burns zoom, text lines masked behind overflow containers, GSAP ScrollTrigger pinned horizontal gallery, and a custom cursor with contextual labels. Four case study pages chain with "Next Project" full-bleed transitions.',
      result: 'Seven pages of cinematic dark-luxury architecture content. The horizontal gallery pin is the hero interaction.',
    },
    valt: {
      title: 'VALT Property Studio',
      year: '2026', industry: 'Real Estate', services: 'UI/UX Design, Web Development, Lead Generation',
      video: 'assets/work/valt.mp4', poster: 'assets/work/valt-poster.jpg',
      slides: ['assets/work/valt-1.jpg','assets/work/valt-2.jpg','assets/work/valt-3.jpg','assets/work/valt-4.jpg','assets/work/valt-5.jpg'],
      brief: 'A premium Cape Town property studio needed a full conversion engine with pricing, lead capture, and individual development pages.',
      approach: 'Hero carousel with 4 developments showing price from the first frame. Four dedicated property pages with photo galleries, unit pricing tables, neighbourhood location sections, and enquiry forms with WhatsApp.',
      result: 'The most conversion-complete property site in the portfolio.',
    },
    kanuka: {
      title: 'AA Kanuka Financial',
      year: '2026', industry: 'Financial Services', services: 'Corporate Design, Lenis Smooth Scroll, Web Development',
      video: 'assets/work/kanuka.mp4', poster: 'assets/work/kanuka-poster.jpg',
      slides: ['assets/work/kanuka-1.jpg','assets/work/kanuka-2.jpg','assets/work/kanuka-3.jpg','assets/work/kanuka-4.jpg','assets/work/kanuka-5.jpg'],
      brief: 'An Eastern Cape financial services firm needed institutional credibility while remaining approachable.',
      approach: 'Rhetores-inspired corporate luxury — white background, silver accents, warm dark gradient sections. Lenis smooth scroll with GSAP ScrollTrigger proxy. Real company data throughout.',
      result: 'A professional financial services site that punches well above the typical Eastern Cape SME web presence.',
    },
    noir: {
      title: 'NØIR Fashion Label',
      year: '2026', industry: 'Fashion', services: 'Editorial Design, WebGL Fabric, Web Development',
      video: 'assets/work/noir.mp4', poster: 'assets/work/noir-poster.jpg',
      slides: ['assets/work/noir-1.jpg','assets/work/noir-2.jpg','assets/work/noir-3.jpg','assets/work/noir-4.jpg','assets/work/noir-5.jpg'],
      brief: 'An avant-garde fashion label needed a digital presence as uncompromising as their collections.',
      approach: 'Pure black + pure white. Cormorant Garamond at extreme scale. Three.js silk fabric wave rippling from cursor. Horizontal-scroll lookbook. mix-blend-mode: difference nav.',
      result: 'The most distinctive site in the portfolio — immediately positions Poke Digital in high-fashion editorial.',
    },
    nexus: {
      title: 'NEXUS Esports Guild',
      year: '2026', industry: 'Gaming / Esports', services: 'Cyber-Industrial UI, Three.js Particles, Web Development',
      video: 'assets/work/nexus.mp4', poster: 'assets/work/nexus-poster.jpg',
      slides: ['assets/work/nexus-1.jpg','assets/work/nexus-2.jpg','assets/work/nexus-3.jpg','assets/work/nexus-4.jpg','assets/work/nexus-5.jpg'],
      brief: 'A next-gen esports collective needed a digital home matching the intensity of competitive gaming.',
      approach: '4,000-point Three.js particle sphere deforming toward cursor. Background particles warp on scroll. CRT scanline overlay. JetBrains Mono throughout.',
      result: 'Shows Poke Digital\'s capability at the loud end of the spectrum.',
    },
    clarent: {
      title: 'Clarent FinTech SaaS',
      year: '2026', industry: 'FinTech / SaaS', services: 'Swiss Minimalism, Three.js WebGL, SaaS Design',
      video: 'assets/work/clarent.mp4', poster: 'assets/work/clarent-poster.jpg',
      slides: ['assets/work/clarent-1.jpg','assets/work/clarent-2.jpg','assets/work/clarent-3.jpg','assets/work/clarent-4.jpg','assets/work/clarent-5.jpg'],
      brief: 'A financial intelligence SaaS platform needed precision and technical credibility.',
      approach: 'Swiss typography, strict grid, stark white with electric green. Three.js torus knot morphs as you scroll. Features grid, 3-tier pricing, SOC 2 section.',
      result: 'The B2B SaaS entry — proves Poke Digital understands conversion architecture.',
    },
    aurelia: {
      title: 'Aurelia Boutique Hotel',
      year: '2026', industry: 'Hospitality', services: 'Editorial Minimalism, Three.js Ribbon, Hospitality Design',
      video: 'assets/work/aurelia.mp4', poster: 'assets/work/aurelia-poster.jpg',
      slides: ['assets/work/aurelia-1.jpg','assets/work/aurelia-2.jpg','assets/work/aurelia-3.jpg','assets/work/aurelia-4.jpg','assets/work/aurelia-5.jpg'],
      brief: 'A Franschhoek boutique hotel needed a digital experience as considered as the stay itself.',
      approach: 'Aman/Six Senses reference. Warm sand, Playfair Display. Three.js ribbon wave with floating torus ring. GSAP camera fly-through on scroll.',
      result: 'The luxury hospitality piece — editorial sensitivity for premium travel brands.',
    },
  };

  // ==========================================
  // CASE STUDY PANEL
  // ==========================================
  const panel = document.getElementById('casePanel');
  const panelContent = document.getElementById('caseContent');
  const closeBtn = document.getElementById('caseClose');

  document.querySelectorAll('.work-card').forEach((card) => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const data = caseData[card.dataset.case];
      if (!data) return;
      openCase(data);
    });
  });

  function openCase(data) {
    panelContent.innerHTML = `
      <div class="cs-video-hero">
        <video autoplay muted loop playsinline poster="${data.poster}">
          <source src="${data.video}" type="video/mp4">
          <img src="${data.poster}" alt="${data.title}">
        </video>
      </div>
      <div class="cs-body">
        <div class="cs-header">
          <h1 class="cs-title">${data.title}</h1>
          <div class="cs-meta">
            <div class="cs-meta-item"><span>Year</span><span>${data.year}</span></div>
            <div class="cs-meta-item"><span>Industry</span><span>${data.industry}</span></div>
            <div class="cs-meta-item"><span>Services</span><span>${data.services}</span></div>
          </div>
        </div>
        <div class="cs-strip-pin" id="csStripPin">
          <div class="cs-strip-sticky" id="csStripSticky">
            <div class="cs-strip" id="csStrip">
              ${data.slides.map((s, i) => `<div class="cs-strip-slide"><img src="${s}" alt="${data.title} screenshot ${i + 1}" loading="lazy"></div>`).join('')}
            </div>
            <div class="cs-strip-text">
              <div class="cs-section"><h3>The Brief</h3><p>${data.brief}</p></div>
              <div class="cs-section"><h3>Our Approach</h3><p>${data.approach}</p></div>
              <div class="cs-section"><h3>The Result</h3><p>${data.result}</p></div>
              <div class="cs-cta"><a href="index.html#contact">Start Your Project →</a></div>
            </div>
          </div>
        </div>
      </div>`;

    panel.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    panel.scrollTop = 0;

    // Wait for DOM to paint, then init scroll-driven strip
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        initScrollStrip();
      });
    });

    gsap.from('.cs-video-hero', { opacity: 0, duration: 0.5, ease: 'power2.out' });
    gsap.from('.cs-title', { opacity: 0, y: 30, duration: 0.7, delay: 0.15, ease: 'power3.out' });
  }

  function closeCase() {
    panel.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeCase);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeCase(); });

  // ==========================================
  // SCROLL-DRIVEN STRIP CAROUSEL
  // Scroll down = slides move left seamlessly
  // ==========================================
  function initScrollStrip() {
    const pin = document.getElementById('csStripPin');
    const sticky = document.getElementById('csStripSticky');
    const track = document.getElementById('csStrip');
    if (!pin || !track || !sticky) return;

    const slides = track.querySelectorAll('.cs-strip-slide');
    if (!slides.length) return;

    // Calculate total scroll distance needed
    const slideWidth = slides[0].offsetWidth + 16; // slide width + gap
    const totalTravel = (slides.length - 1) * slideWidth;
    const viewWidth = sticky.offsetWidth;

    // Set the pin section tall enough to scroll through all slides
    // Each slide gets ~60vh of scroll space
    const scrollHeight = slides.length * window.innerHeight * 0.6;
    pin.style.height = scrollHeight + 'px';

    // Sticky container stays in view while we scroll
    // We use the panel itself as the scroll container
    let ticking = false;

    function onPanelScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const pinRect = pin.getBoundingClientRect();
        const panelRect = panel.getBoundingClientRect();

        // How far the pin top has scrolled past the panel top
        const scrolled = panelRect.top - pinRect.top;

        // Clamp between 0 and total scroll height
        const progress = Math.max(0, Math.min(scrolled / (scrollHeight - window.innerHeight), 1));

        // Move the track
        const translateX = -(progress * totalTravel);
        track.style.transform = 'translateX(' + translateX + 'px)';

        // Sticky positioning — keep strip visible while scrolling through pin
        if (scrolled >= 0 && scrolled <= scrollHeight - window.innerHeight) {
          sticky.style.position = 'sticky';
          sticky.style.top = '0';
        }

        ticking = false;
      });
    }

    panel.addEventListener('scroll', onPanelScroll, { passive: true });

    // Initial position
    onPanelScroll();
  }

  // ==========================================
  // CURSOR
  // ==========================================
  const cursorDot = document.getElementById('cursorDot');
  const cursorRing = document.getElementById('cursorRing');
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches && cursorDot) {
    let mx = 0, my = 0, rx = 0, ry = 0;
    window.addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; cursorDot.style.left = mx + 'px'; cursorDot.style.top = my + 'px'; });
    (function tick() { rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12; cursorRing.style.left = rx + 'px'; cursorRing.style.top = ry + 'px'; requestAnimationFrame(tick); })();
    document.querySelectorAll('[data-cursor]').forEach((el) => {
      el.addEventListener('mouseenter', () => cursorRing.classList.add('is-active'));
      el.addEventListener('mouseleave', () => cursorRing.classList.remove('is-active'));
    });
  }

})();
