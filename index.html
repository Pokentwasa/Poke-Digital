// ============================================
// POKE DIGITAL — IMMERSIVE WEBGL + GSAP ENGINE
// ============================================

(function () {
  'use strict';

  // ===== GLOBALS =====
  const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  let mouseX = 0, mouseY = 0;
  let normalizedMouse = { x: 0, y: 0 };

  // ===== LOADER =====
  const loader = document.getElementById('loader');
  const loaderBar = document.getElementById('loaderBar');
  const loaderPct = document.getElementById('loaderPct');
  let loadProgress = 0;

  function tickLoader() {
    loadProgress += (100 - loadProgress) * 0.08;
    if (loaderBar) loaderBar.style.setProperty('--w', loadProgress + '%');
    if (loaderPct) loaderPct.textContent = Math.round(loadProgress) + '%';
    if (loadProgress < 95) requestAnimationFrame(tickLoader);
  }
  tickLoader();

  // ==========================================
  // THREE.JS — SCENE SETUP
  // ==========================================
  const canvas = document.getElementById('webglCanvas');
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x0a0a0a, 0.035);

  const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 1, 8);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;

  // ===== LIGHTING =====
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.15);
  scene.add(ambientLight);

  const rimLight = new THREE.DirectionalLight(0xe8623d, 0.9);
  rimLight.position.set(5, 3, -2);
  scene.add(rimLight);

  const fillLight = new THREE.DirectionalLight(0xc9c6f7, 0.35);
  fillLight.position.set(-4, 2, 4);
  scene.add(fillLight);

  const pointLight = new THREE.PointLight(0xe8623d, 1.5, 12);
  pointLight.position.set(0, 2, 3);
  scene.add(pointLight);

  // ===== 3D OBJECTS =====
  const group = new THREE.Group();
  scene.add(group);

  // Main torus — hero focal point
  const torusGeo = new THREE.TorusGeometry(1.4, 0.45, 64, 128);
  const torusMat = new THREE.MeshStandardMaterial({
    color: 0x111111,
    metalness: 0.95,
    roughness: 0.12,
    envMapIntensity: 1.2
  });
  const torus = new THREE.Mesh(torusGeo, torusMat);
  torus.position.set(3, 0.5, 0);
  torus.rotation.x = Math.PI * 0.35;
  group.add(torus);

  // Secondary sphere — features section
  const sphereGeo = new THREE.SphereGeometry(0.9, 64, 64);
  const sphereMat = new THREE.MeshStandardMaterial({
    color: 0xe8623d,
    metalness: 0.7,
    roughness: 0.25
  });
  const sphere = new THREE.Mesh(sphereGeo, sphereMat);
  sphere.position.set(-3, -4, -2);
  group.add(sphere);

  // Icosahedron cluster — work section
  const icoGeo = new THREE.IcosahedronGeometry(0.65, 0);
  const icoMat = new THREE.MeshStandardMaterial({
    color: 0xc9c6f7,
    metalness: 0.85,
    roughness: 0.15,
    flatShading: true
  });

  const ico1 = new THREE.Mesh(icoGeo, icoMat);
  ico1.position.set(4, -9, -1);
  group.add(ico1);

  const ico2 = new THREE.Mesh(icoGeo, icoMat.clone());
  ico2.material.color.setHex(0xf5dc6e);
  ico2.position.set(3, -9.8, 0.5);
  ico2.scale.setScalar(0.5);
  group.add(ico2);

  // ===== PARTICLE FIELD =====
  const particleCount = 600;
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 30;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }
  const particlesGeo = new THREE.BufferGeometry();
  particlesGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const particlesMat = new THREE.PointsMaterial({ color: 0xe8623d, size: 0.03, sizeAttenuation: true, transparent: true, opacity: 0.6 });
  const particles = new THREE.Points(particlesGeo, particlesMat);
  scene.add(particles);

  // ===== RESIZE =====
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // ===== MOUSE TRACKING =====
  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    normalizedMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    normalizedMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  });

  // ===== RENDER LOOP =====
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const elapsed = clock.getElapsedTime();

    // Object rotations
    torus.rotation.y = elapsed * 0.15;
    torus.rotation.z = elapsed * 0.08;
    sphere.rotation.y = elapsed * 0.2;
    sphere.rotation.x = elapsed * 0.1;
    ico1.rotation.x = elapsed * 0.25;
    ico1.rotation.y = elapsed * 0.15;
    ico2.rotation.z = elapsed * 0.3;

    // Mouse parallax on group
    group.rotation.y += (normalizedMouse.x * 0.08 - group.rotation.y) * 0.04;
    group.rotation.x += (normalizedMouse.y * 0.04 - group.rotation.x) * 0.04;

    // Particle drift
    particles.rotation.y = elapsed * 0.01;

    // Point light follows mouse gently
    pointLight.position.x += (normalizedMouse.x * 4 - pointLight.position.x) * 0.03;
    pointLight.position.y += (normalizedMouse.y * 3 - pointLight.position.y) * 0.03;

    renderer.render(scene, camera);
  }
  animate();

  // ==========================================
  // GSAP + SCROLLTRIGGER SETUP
  // ==========================================
  window.addEventListener('load', () => {
    // Finish loader
    loadProgress = 100;
    if (loaderBar) loaderBar.style.setProperty('--w', '100%');
    if (loaderPct) loaderPct.textContent = '100%';

    gsap.to(loader, {
      opacity: 0,
      duration: 0.5,
      delay: 0.4,
      onComplete: () => { if (loader) loader.remove(); }
    });

    gsap.registerPlugin(ScrollTrigger);

    // ===== HERO WORD REVEAL =====
    document.querySelectorAll('.hero-title .word').forEach((word, i) => {
      gsap.to(word, {
        y: 0, opacity: 1,
        duration: 1,
        delay: 0.6 + i * 0.12,
        ease: 'power3.out'
      });
    });

    gsap.to('.hero-ctas', { opacity: 1, y: 0, duration: 0.8, delay: 1.2, ease: 'power3.out' });
    gsap.set('.hero-ctas', { opacity: 0, y: 30 });

    gsap.to('.hero .sticker', { opacity: 1, y: 0, duration: 0.6, delay: 0.4, ease: 'power3.out' });
    gsap.set('.hero .sticker', { opacity: 0, y: 20 });

    // ===== SCROLL-TRIGGERED TEXT REVEALS =====
    document.querySelectorAll('.section:not(.hero) .split-text .word').forEach((word) => {
      gsap.to(word, {
        y: 0, opacity: 1,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: word.closest('.split-text'), start: 'top 85%', toggleActions: 'play none none none' }
      });
    });

    // ===== FADE-IN ELEMENTS =====
    document.querySelectorAll('.fade-in').forEach((el, i) => {
      gsap.to(el, {
        opacity: 1, y: 0,
        duration: 0.8,
        delay: i % 4 * 0.08,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' }
      });
    });

    // ===== CAMERA FLY TRANSITIONS =====
    // Hero → Features: camera drifts down and slightly left
    gsap.to(camera.position, {
      y: -2, x: -1, z: 6,
      ease: 'none',
      scrollTrigger: {
        trigger: '[data-section="features"]',
        start: 'top bottom',
        end: 'top top',
        scrub: 1.5
      }
    });

    // Features → Work: camera orbits right
    gsap.to(camera.position, {
      y: -5, x: 2, z: 5,
      ease: 'none',
      scrollTrigger: {
        trigger: '[data-section="work"]',
        start: 'top bottom',
        end: 'center center',
        scrub: 1.5
      }
    });

    // Work → Stats: camera pulls back
    gsap.to(camera.position, {
      y: -8, x: 0, z: 10,
      ease: 'none',
      scrollTrigger: {
        trigger: '[data-section="stats"]',
        start: 'top bottom',
        end: 'top top',
        scrub: 1.5
      }
    });

    // Stats → Process: camera zooms in
    gsap.to(camera.position, {
      y: -11, x: -1.5, z: 4,
      ease: 'none',
      scrollTrigger: {
        trigger: '[data-section="process"]',
        start: 'top bottom',
        end: 'center center',
        scrub: 1.5
      }
    });

    // Process → Contact: camera rises
    gsap.to(camera.position, {
      y: -14, x: 0, z: 7,
      ease: 'none',
      scrollTrigger: {
        trigger: '[data-section="contact"]',
        start: 'top bottom',
        end: 'center center',
        scrub: 1.5
      }
    });

    // ===== 3D OBJECT SCROLL ANIMATIONS =====
    // Sphere grows as features come into view
    gsap.to(sphere.scale, {
      x: 1.4, y: 1.4, z: 1.4,
      scrollTrigger: { trigger: '[data-section="features"]', start: 'top center', end: 'bottom center', scrub: 2 }
    });

    // Torus drifts during hero
    gsap.to(torus.position, {
      x: 5, y: -1,
      scrollTrigger: { trigger: '[data-section="features"]', start: 'top bottom', end: 'top top', scrub: 2 }
    });

    // Icosahedrons rotate faster during work section
    gsap.to(ico1.rotation, {
      z: Math.PI * 2,
      scrollTrigger: { trigger: '[data-section="work"]', start: 'top bottom', end: 'bottom top', scrub: 1 }
    });

    // ===== STICKER REVEALS =====
    document.querySelectorAll('.features-sticker, .features-badge').forEach((el) => {
      gsap.set(el, { opacity: 0, scale: 0.7, y: 20 });
      gsap.to(el, {
        opacity: 1, scale: 1, y: 0,
        duration: 0.6,
        ease: 'back.out(1.7)',
        scrollTrigger: { trigger: el, start: 'top 90%' }
      });
    });

    // ===== COUNT-UP STATS =====
    document.querySelectorAll('.stat-number').forEach((el) => {
      const target = parseInt(el.dataset.count, 10) || 0;
      const suffix = el.dataset.suffix || '+';
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          const duration = 1400;
          const start = performance.now();
          function tick(now) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.round(eased * target) + (progress === 1 ? suffix : '');
            if (progress < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        }
      });
    });

  }); // end window load

  // ==========================================
  // CUSTOM CURSOR
  // ==========================================
  const cursorDot = document.getElementById('cursorDot');
  const cursorRing = document.getElementById('cursorRing');
  const cursorLabel = document.getElementById('cursorLabel');

  if (isFinePointer && cursorDot && cursorRing) {
    document.body.classList.add('has-custom-cursor');
    let ringX = 0, ringY = 0;

    function animateRing() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      cursorDot.style.left = mouseX + 'px';
      cursorDot.style.top = mouseY + 'px';
      cursorRing.style.left = ringX + 'px';
      cursorRing.style.top = ringY + 'px';
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

  // ==========================================
  // MAGNETIC BUTTONS
  // ==========================================
  if (isFinePointer) {
    document.querySelectorAll('.magnetic').forEach((btn) => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
        btn.style.transform = 'translate(' + x + 'px,' + y + 'px)';
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0,0)';
      });
    });
  }

  // ==========================================
  // MOBILE NAV
  // ==========================================
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

  // ==========================================
  // THEMED IMAGE FALLBACKS
  // ==========================================
  document.querySelectorAll('img[data-fallback]').forEach((img) => {
    let stage = 0;
    img.addEventListener('error', () => {
      stage += 1;
      const kw = img.dataset.fallback.split(',')[0].trim().replace(/\s+/g, '-');
      if (stage === 1) img.src = 'https://loremflickr.com/800/600/' + kw;
      else if (stage === 2) img.src = 'https://picsum.photos/800/600?grayscale';
    });
  });

  // ==========================================
  // CONTACT FORM
  // ==========================================
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.name.value.trim() || !form.email.value.trim()) {
        status.textContent = 'Please fill in your name and email.';
        return;
      }
      status.textContent = "Thanks — we'll be in touch shortly.";
      form.reset();
    });
  }

  // Footer year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

})();
