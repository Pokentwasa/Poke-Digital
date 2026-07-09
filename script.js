/* ============================================
   POKE DIGITAL — DESIGN TOKENS
   ============================================ */
:root {
  --black: #0A0A0A;
  --white: #FFFFFF;
  --border-light: rgba(0, 0, 0, 0.1);
  --border-dark: rgba(255, 255, 255, 0.15);
  --text-dim-onlight: rgba(0, 0, 0, 0.6);
  --text-dim-ondark: rgba(255, 255, 255, 0.65);
  --text-dimmer-ondark: rgba(255, 255, 255, 0.4);

  --font-display: 'Archivo', sans-serif;
  --font-body: 'Inter', sans-serif;

  --nav-height: 76px;
  --container: 1240px;
  --radius: 8px;

  --ease: cubic-bezier(0.16, 1, 0.3, 1);
}

/* ============================================
   RESET
   ============================================ */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

body {
  background: var(--white);
  color: var(--black);
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

a { color: inherit; text-decoration: none; }
ul, ol { list-style: none; }
button { font: inherit; cursor: pointer; background: none; border: none; color: inherit; }
input, select, textarea { font: inherit; color: inherit; }
img { max-width: 100%; display: block; }

:focus-visible { outline: 2px solid currentColor; outline-offset: 3px; }

/* ============================================
   HELPERS
   ============================================ */
.eyebrow {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-dimmer-ondark);
  margin-bottom: 16px;
}

.section-head { max-width: 640px; margin: 0 auto 56px; padding: 0 32px; text-align: center; }
.section-head--left {
  max-width: var(--container);
  margin: 0 auto 48px;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 20px;
}

.section-title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(28px, 4vw, 44px);
  line-height: 1.15;
}

.view-all { font-size: 14px; font-weight: 600; border-bottom: 1px solid var(--border-light); padding-bottom: 2px; }

.btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 32px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 15px;
  transition: transform 0.3s var(--ease), background 0.3s var(--ease);
  white-space: nowrap;
}
.btn-primary { background: var(--black); color: var(--white); }
.btn-primary:hover { transform: translateY(-2px); }
.btn-ghost { border: 1px solid var(--border-light); color: currentColor; }
.btn-ghost:hover { border-color: currentColor; }
.btn-small { padding: 11px 22px; font-size: 14px; }
.btn-full { width: 100%; justify-content: center; }
.arrow { transition: transform 0.3s var(--ease); }
.btn:hover .arrow { transform: translateX(4px); }

/* dark sections need inverted button colors */
.features .btn-primary, .contact .btn-primary { background: var(--white); color: var(--black); }

/* ============================================
   REVEAL ANIMATION
   ============================================ */
.reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.7s var(--ease), transform 0.7s var(--ease); }
.reveal.is-visible { opacity: 1; transform: translateY(0); }

/* ============================================
   NAV
   ============================================ */
.nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  height: var(--nav-height);
  display: flex;
  align-items: center;
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.75);
  border-bottom: 1px solid var(--border-light);
}
.nav-inner {
  width: 100%;
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
}
.nav-logo { font-family: var(--font-display); font-weight: 700; font-size: 18px; }
.nav-links { display: flex; gap: 32px; font-size: 14px; font-weight: 500; margin-left: auto; margin-right: 32px; }
.nav-links a { color: var(--text-dim-onlight); transition: color 0.2s var(--ease); }
.nav-links a:hover { color: var(--black); }
.nav-toggle { display: none; flex-direction: column; gap: 5px; width: 24px; }
.nav-toggle span { height: 2px; background: var(--black); transition: transform 0.3s var(--ease); }

/* ============================================
   HERO (light)
   ============================================ */
.hero { padding: calc(var(--nav-height) + 140px) 32px 100px; text-align: center; }
.hero-inner { max-width: 860px; margin: 0 auto; }
.hero-title {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(36px, 6.5vw, 72px);
  line-height: 1.08;
  letter-spacing: -0.02em;
}
.hero-sub { margin: 28px auto 40px; max-width: 560px; font-size: 18px; line-height: 1.6; color: var(--text-dim-onlight); }
.hero-ctas { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }

/* ============================================
   FEATURES (dark)
   ============================================ */
.features { background: var(--black); color: var(--white); padding: 100px 32px; text-align: center; }
.features-inner { max-width: 720px; margin: 0 auto; }
.features .eyebrow { justify-content: center; display: flex; }
.features-title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(28px, 4.5vw, 46px);
  line-height: 1.2;
  margin-bottom: 20px;
}
.features-sub { color: var(--text-dim-ondark); font-size: 17px; line-height: 1.6; max-width: 560px; margin: 0 auto; }

.features-grid {
  margin-top: 56px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid var(--border-dark);
  border-left: 1px solid var(--border-dark);
}
.feature-item {
  padding: 24px 16px;
  border-right: 1px solid var(--border-dark);
  border-bottom: 1px solid var(--border-dark);
  font-size: 13px;
  font-weight: 600;
  color: var(--text-dim-ondark);
}
.feature-item span { display: block; font-size: 12px; color: var(--text-dimmer-ondark); margin-bottom: 8px; }

.features-badge {
  margin-top: 40px;
  display: inline-block;
  padding: 8px 18px;
  border-radius: 999px;
  border: 1px solid var(--border-dark);
  font-size: 13px;
  color: var(--text-dim-ondark);
}

/* ============================================
   WORK (light)
   ============================================ */
.work { padding: 100px 32px; }
.work-grid { max-width: var(--container); margin: 0 auto; display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
.work-card { cursor: pointer; }
.work-media {
  aspect-ratio: 4 / 3;
  border-radius: var(--radius);
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.5s var(--ease);
}
.work-card:hover .work-media { transform: scale(1.015); }
.work-media--a { background: linear-gradient(135deg, #e8e8e8, #f5f5f5); }
.work-media--b { background: linear-gradient(135deg, #111, #000); }
.work-media--c { background: linear-gradient(160deg, #d8d8d8, #ececec); }
.work-media--d { background: radial-gradient(circle at 70% 40%, #1c1c1c, #000); }
.work-overlay { font-family: var(--font-display); font-weight: 700; font-size: 22px; color: var(--white); text-transform: uppercase; letter-spacing: 0.02em; }
.work-media--c .work-overlay { color: var(--black); }

.work-meta { display: flex; justify-content: space-between; align-items: baseline; margin-top: 16px; }
.work-meta h3 { font-family: var(--font-display); font-weight: 700; font-size: 18px; }
.work-meta p { color: var(--text-dim-onlight); font-size: 13px; }

/* ============================================
   PROCESS (light)
   ============================================ */
.process { padding: 100px 32px; border-top: 1px solid var(--border-light); }
.process-inner { max-width: var(--container); margin: 0 auto; }
.process-sub { max-width: 420px; color: var(--text-dim-onlight); font-size: 16px; line-height: 1.6; }

.process-list { display: flex; flex-direction: column; }
.process-item {
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 24px;
  padding: 32px 0;
  border-top: 1px solid var(--border-light);
}
.process-item:last-child { border-bottom: 1px solid var(--border-light); }
.process-num { font-family: var(--font-display); font-weight: 700; font-size: 15px; color: var(--text-dim-onlight); }
.process-item h3 { font-family: var(--font-display); font-weight: 700; font-size: 20px; margin-bottom: 8px; }
.process-item p { color: var(--text-dim-onlight); font-size: 15px; line-height: 1.6; max-width: 560px; }

/* ============================================
   CONTACT (dark)
   ============================================ */
.contact { background: var(--black); color: var(--white); padding: 100px 32px 120px; }
.contact-inner { max-width: var(--container); margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
.contact-copy h2 { font-family: var(--font-display); font-weight: 900; font-size: clamp(32px, 4.5vw, 52px); line-height: 1.1; margin-bottom: 24px; }
.contact-copy p { color: var(--text-dim-ondark); font-size: 17px; line-height: 1.6; margin-bottom: 16px; max-width: 420px; }
.contact-note { font-size: 13px !important; color: var(--text-dimmer-ondark) !important; text-transform: uppercase; letter-spacing: 0.06em; }

.contact-form { border: 1px solid var(--border-dark); border-radius: 12px; padding: 36px; display: flex; flex-direction: column; gap: 18px; }
.form-row { display: flex; flex-direction: column; gap: 8px; }
.form-row label { font-size: 13px; color: var(--text-dim-ondark); }
.form-row input, .form-row select, .form-row textarea {
  background: transparent;
  border: 1px solid var(--border-dark);
  border-radius: var(--radius);
  padding: 12px 14px;
  font-size: 14px;
  color: var(--white);
  transition: border-color 0.2s var(--ease);
}
.form-row select option { color: var(--black); }
.form-row input:focus, .form-row select:focus, .form-row textarea:focus { border-color: var(--white); outline: none; }
.form-row textarea { resize: vertical; min-height: 90px; }
.form-status { font-size: 13px; color: var(--text-dim-ondark); min-height: 18px; }

/* ============================================
   FOOTER (dark)
   ============================================ */
.footer { background: var(--black); color: var(--white); border-top: 1px solid var(--border-dark); padding: 40px 32px 0; }
.footer-inner { max-width: var(--container); margin: 0 auto; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px; padding-bottom: 32px; }
.footer-logo { font-family: var(--font-display); font-weight: 700; font-size: 16px; }
.footer-links { display: flex; gap: 24px; font-size: 14px; color: var(--text-dim-ondark); }
.footer-links a:hover { color: var(--white); }
.footer-contact { display: flex; align-items: center; gap: 20px; font-size: 14px; }
.footer-cta { border: 1px solid var(--border-dark); padding: 8px 16px; border-radius: 999px; }
.footer-bottom {
  max-width: var(--container);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  padding: 20px 0;
  border-top: 1px solid var(--border-dark);
  font-size: 12px;
  color: var(--text-dimmer-ondark);
}

/* ============================================
   RESPONSIVE
   ============================================ */
@media (max-width: 900px) {
  .work-grid { grid-template-columns: 1fr; }
  .contact-inner { grid-template-columns: 1fr; gap: 48px; }
  .features-grid { grid-template-columns: repeat(2, 1fr); }
  .process-item { grid-template-columns: 1fr; gap: 8px; }
}

@media (max-width: 720px) {
  .nav-links { display: none; }
  .nav-toggle { display: flex; }
  .btn-small { display: none; }
  .nav.is-open .nav-links {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: var(--nav-height);
    left: 0; right: 0;
    background: var(--white);
    border-bottom: 1px solid var(--border-light);
    padding: 24px 32px;
    gap: 20px;
    margin: 0;
  }
  .hero { padding-top: calc(var(--nav-height) + 64px); }
  .section-head--left { flex-direction: column; align-items: flex-start; }
}
