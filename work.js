(function () {
  'use strict';

  // ==========================================
  // GSAP ANIMATIONS
  // ==========================================
  window.addEventListener('load', () => {
    gsap.registerPlugin(ScrollTrigger);

    document.querySelectorAll('.work-hero-title .word').forEach((w, i) => {
      gsap.to(w, { y: '0%', duration: 1.2, delay: 0.2 + i * 0.1, ease: 'power4.out' });
    });
    gsap.from('.work-hero-sub', { opacity: 0, y: 20, duration: 0.8, delay: 0.6, ease: 'power2.out' });
    gsap.from('.work-hero .eyebrow', { opacity: 0, y: 10, duration: 0.6, delay: 0.1, ease: 'power2.out' });

    document.querySelectorAll('.work-item').forEach((item) => {
      gsap.from(item.querySelector('.work-media'), {
        opacity: 0, y: 60, duration: 0.9, ease: 'power2.out',
        scrollTrigger: { trigger: item, start: 'top 85%' }
      });
      gsap.from(item.querySelector('.work-info'), {
        opacity: 0, y: 30, duration: 0.8, delay: 0.15, ease: 'power2.out',
        scrollTrigger: { trigger: item, start: 'top 85%' }
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
  // HORIZONTAL STRIP — drag + click nav
  // ==========================================
  document.querySelectorAll('.work-strip').forEach((strip) => {
    const track = strip.querySelector('.strip-track');
    const cards = strip.querySelectorAll('.strip-card');
    if (!track || !cards.length) return;

    let current = 0;
    let isDragging = false;
    let startX = 0;
    let startTranslate = 0;
    let currentTranslate = 0;

    // Build dots
    const dotsWrap = document.createElement('div');
    dotsWrap.className = 'strip-dots';
    cards.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'strip-dot' + (i === 0 ? ' is-active' : '');
      dot.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(dot);
    });
    strip.appendChild(dotsWrap);

    function getCardWidth() {
      return cards[0].offsetWidth + 16; // card width + gap
    }

    function goTo(index) {
      current = Math.max(0, Math.min(index, cards.length - 1));
      currentTranslate = -(current * getCardWidth());
      track.style.transform = `translateX(${currentTranslate}px)`;
      dotsWrap.querySelectorAll('.strip-dot').forEach((d, i) => {
        d.classList.toggle('is-active', i === current);
      });
    }

    // Mouse drag
    strip.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.clientX;
      startTranslate = currentTranslate;
      track.style.transition = 'none';
      strip.style.cursor = 'grabbing';
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const diff = e.clientX - startX;
      track.style.transform = `translateX(${startTranslate + diff}px)`;
    });

    window.addEventListener('mouseup', (e) => {
      if (!isDragging) return;
      isDragging = false;
      strip.style.cursor = 'grab';
      track.style.transition = '';
      const diff = e.clientX - startX;
      if (Math.abs(diff) > 60) {
        goTo(diff < 0 ? current + 1 : current - 1);
      } else {
        goTo(current); // snap back
      }
    });

    // Touch drag
    strip.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      startTranslate = currentTranslate;
      track.style.transition = 'none';
    }, { passive: true });

    strip.addEventListener('touchmove', (e) => {
      const diff = e.touches[0].clientX - startX;
      track.style.transform = `translateX(${startTranslate + diff}px)`;
    }, { passive: true });

    strip.addEventListener('touchend', (e) => {
      track.style.transition = '';
      const diff = e.changedTouches[0].clientX - startX;
      if (Math.abs(diff) > 50) {
        goTo(diff < 0 ? current + 1 : current - 1);
      } else {
        goTo(current);
      }
    });
  });

  // ==========================================
  // CASE STUDY DATA
  // ==========================================
  const caseData = {
    smshd: {
      title: 'SMSHD',
      year: '2026', industry: 'Food & Beverage', services: 'UI/UX Design, Web Development, Brand Identity',
      poster: 'assets/work/smshd-poster.jpg',
      screenshots: ['assets/work/smshd-1.jpg','assets/work/smshd-2.jpg','assets/work/smshd-3.jpg','assets/work/smshd-4.jpg','assets/work/smshd-5.jpg'],
      brief: 'A premium smash burger brand needed a digital identity that matched their street-style, high-energy aesthetic — something that felt more Joy Rush than fast food chain.',
      approach: 'Joy Rush-inspired flat design — massive Syne 800 typography, neon yellow and tomato red palette, continuous ticker marquees, and interactive menu cards that expand on click to reveal full flavour profiles. The about page features a wide cinematic process hero (Source → Ball → Smash → Stack) with dietary badges across every menu item. Google Reviews and Instagram Gallery sections add the social proof layer.',
      result: 'A portfolio piece that shows high-energy F&B design capability — interactive, bold, and fully responsive. The dietary badge system and menu expand interaction demonstrate product-thinking beyond pure aesthetics.',
    },
    lumina: {
      title: 'LUMINA Architects',
      year: '2026', industry: 'Architecture', services: 'Cinematic UI, GSAP, Web Development',
      poster: 'assets/work/lumina-poster.jpg',
      screenshots: ['assets/work/lumina-1.jpg','assets/work/lumina-2.jpg','assets/work/lumina-3.jpg','assets/work/lumina-4.jpg','assets/work/lumina-5.jpg'],
      brief: 'A premium architecture studio needed a site as considered and cinematic as the spaces they design — dark, immersive, with motion that feels expensive.',
      approach: 'Modelled on Yodezeen.com\'s cinematic language. Hero Ken Burns zoom, text lines masked behind overflow containers sliding up on power4.out easing, GSAP ScrollTrigger pinned horizontal gallery (scroll down, cards travel sideways), and a custom cursor with contextual labels. Four individual case study pages chain with "Next Project" full-bleed transitions.',
      result: 'Seven pages of cinematic dark-luxury architecture content. The horizontal gallery pin is the hero interaction — it\'s the kind of thing clients screenshot and send saying "we want this."',
    },
    valt: {
      title: 'VALT Property Studio',
      year: '2026', industry: 'Real Estate', services: 'UI/UX Design, Web Development, Lead Generation',
      poster: 'assets/work/valt-poster.jpg',
      screenshots: ['assets/work/valt-1.jpg','assets/work/valt-2.jpg','assets/work/valt-3.jpg','assets/work/valt-4.jpg','assets/work/valt-5.jpg'],
      brief: 'A premium Cape Town property studio needed more than a brochure site — they needed a full conversion engine with pricing, lead capture, and individual development pages.',
      approach: 'Hero carousel with 4 developments, each showing price from the first frame. Four dedicated property pages — each with a full photo gallery, unit type and pricing table with availability status, neighbourhood location section, and a property-specific enquiry form with WhatsApp direct link. Register Interest section for off-plan developments.',
      result: 'The most conversion-complete property site in the portfolio — everything a serious buyer needs to qualify and make contact without leaving the site.',
    },
    kanuka: {
      title: 'AA Kanuka Financial',
      year: '2026', industry: 'Financial Services', services: 'Corporate Design, Lenis Smooth Scroll, Web Development',
      poster: 'assets/work/kanuka-poster.jpg',
      screenshots: ['assets/work/kanuka-1.jpg','assets/work/kanuka-2.jpg','assets/work/kanuka-3.jpg','assets/work/kanuka-4.jpg','assets/work/kanuka-5.jpg'],
      brief: 'An Eastern Cape financial services firm needed a site that projected institutional credibility while remaining approachable to the SME owners they serve.',
      approach: 'Rhetores.fr-inspired corporate luxury — white background, silver accents, warm dark gradient for key sections. Lenis smooth scroll with GSAP ScrollTrigger proxy correctly wired. Real company data throughout: Ayanda and Aphumelela Kanuka, 082 402 5113, 2834 Phambo Street, Queenstown. Magnetic cursor snap on all interactive elements.',
      result: 'A professional financial services site that punches well above the typical Eastern Cape SME web presence.',
    },
    noir: {
      title: 'NØIR Fashion Label',
      year: '2026', industry: 'Fashion', services: 'Editorial Design, WebGL Fabric, Web Development',
      poster: 'assets/work/noir-poster.jpg',
      screenshots: ['assets/work/noir-1.jpg','assets/work/noir-2.jpg','assets/work/noir-3.jpg','assets/work/noir-4.jpg','assets/work/noir-5.jpg'],
      brief: 'An avant-garde fashion label needed a digital presence as uncompromising as their collections.',
      approach: 'Pure black + pure white, zero accent colours. Cormorant Garamond 300-weight at extreme scale. Three.js silk fabric wave that ripples from cursor position. Horizontal-scroll lookbook triggered by scroll. Nav uses mix-blend-mode: difference so it reads over any background.',
      result: 'The most distinctive site in the portfolio — immediately positions Poke Digital in the high-fashion editorial space.',
    },
    nexus: {
      title: 'NEXUS Esports Guild',
      year: '2026', industry: 'Gaming / Esports', services: 'Cyber-Industrial UI, Three.js Particles, Web Development',
      poster: 'assets/work/nexus-poster.jpg',
      screenshots: ['assets/work/nexus-1.jpg','assets/work/nexus-2.jpg','assets/work/nexus-3.jpg','assets/work/nexus-4.jpg','assets/work/nexus-5.jpg'],
      brief: 'A next-gen esports collective needed a digital home that matched the intensity of competitive gaming culture.',
      approach: '4,000-point Three.js particle sphere that deforms toward the cursor. Background particles accelerate into warp speed on scroll. CRT scanline overlay. JetBrains Mono throughout for the tactical data-panel feel.',
      result: 'Shows Poke Digital\'s capability at the loud end of the spectrum — just as considered as the minimal work, just different rules.',
    },
    clarent: {
      title: 'Clarent FinTech SaaS',
      year: '2026', industry: 'FinTech / SaaS', services: 'Swiss Minimalism, Three.js WebGL, SaaS Design',
      poster: 'assets/work/clarent-poster.jpg',
      screenshots: ['assets/work/clarent-1.jpg','assets/work/clarent-2.jpg','assets/work/clarent-3.jpg','assets/work/clarent-4.jpg','assets/work/clarent-5.jpg'],
      brief: 'A financial intelligence SaaS platform needed a site communicating precision and technical credibility.',
      approach: 'Elite Swiss typography, strict grid, stark white with electric green accent. Three.js torus knot morphs — vertices flatten and curves simplify as you scroll through features, visualising data fluidity. Features grid, 3-tier pricing table, SOC 2 security section.',
      result: 'The B2B SaaS entry — proves Poke Digital understands conversion architecture, not just visual design.',
    },
    aurelia: {
      title: 'Aurelia Boutique Hotel',
      year: '2026', industry: 'Hospitality', services: 'Editorial Minimalism, Three.js Ribbon, Hospitality Design',
      poster: 'assets/work/aurelia-poster.jpg',
      screenshots: ['assets/work/aurelia-1.jpg','assets/work/aurelia-2.jpg','assets/work/aurelia-3.jpg','assets/work/aurelia-4.jpg','assets/work/aurelia-5.jpg'],
      brief: 'A boutique hotel in Franschhoek needed a digital experience that felt as slow and considered as the stay itself.',
      approach: 'Aman and Six Senses as reference. Warm sand background, Playfair Display serif. Three.js ribbon wave with rippling vertices and floating architectural torus ring. GSAP camera fly-through creates the sensation of moving into a space as you scroll.',
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
    btn.addEventListener('click', () => {
      const data = caseData[btn.dataset.case];
      if (!data) return;

      panelContent.innerHTML = `
        <div class="cs-panel-hero">
          <img src="${data.poster}" alt="${data.title}">
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
          <div class="cs-panel-strip">
            ${data.screenshots.map(s => `<img src="${s}" alt="${data.title} screenshot" loading="lazy">`).join('')}
          </div>
          <div class="cs-panel-section"><h3>The Brief</h3><p>${data.brief}</p></div>
          <div class="cs-panel-section"><h3>Our Approach</h3><p>${data.approach}</p></div>
          <div class="cs-panel-section"><h3>The Result</h3><p>${data.result}</p></div>
          <div class="cs-panel-cta">
            <a href="index.html#contact" class="btn-work-case" style="display:inline-flex">Start Your Project →</a>
          </div>
        </div>`;

      panel.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      panel.scrollTop = 0;

      gsap.from('.cs-panel-hero', { opacity: 0, duration: 0.5, ease: 'power2.out' });
      gsap.from('.cs-panel-title', { opacity: 0, y: 30, duration: 0.7, delay: 0.2, ease: 'power3.out' });
      gsap.from('.cs-panel-section', { opacity: 0, y: 20, stagger: 0.1, duration: 0.5, delay: 0.35, ease: 'power2.out' });
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => { panel.classList.remove('is-open'); document.body.style.overflow = ''; });
  }
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && panel.classList.contains('is-open')) { panel.classList.remove('is-open'); document.body.style.overflow = ''; } });

  // ==========================================
  // CURSOR
  // ==========================================
  const cursorDot = document.getElementById('cursorDot');
  const cursorRing = document.getElementById('cursorRing');
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches && cursorDot) {
    let mx = 0, my = 0, rx = 0, ry = 0;
    window.addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; cursorDot.style.left = mx + 'px'; cursorDot.style.top = my + 'px'; });
    (function tick() { rx += (mx-rx)*0.12; ry += (my-ry)*0.12; cursorRing.style.left = rx+'px'; cursorRing.style.top = ry+'px'; requestAnimationFrame(tick); })();
    document.querySelectorAll('[data-cursor]').forEach((el) => {
      el.addEventListener('mouseenter', () => cursorRing.classList.add('is-active'));
      el.addEventListener('mouseleave', () => cursorRing.classList.remove('is-active'));
    });
  }

})();
