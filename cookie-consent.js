// ============================================
// POKE DIGITAL — COOKIE CONSENT (POPIA)
// ============================================
(function () {
  'use strict';

  var CONSENT_KEY = 'pd_cookie_consent'; // 'accepted' | 'rejected'
  var GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // TODO: replace with real GA4 Measurement ID

  function loadAnalytics() {
    if (window.__pdAnalyticsLoaded) return;
    window.__pdAnalyticsLoaded = true;

    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID;
    document.head.appendChild(s);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true });
  }

  function getConsent() {
    try { return window.localStorage.getItem(CONSENT_KEY); } catch (e) { return null; }
  }
  function setConsent(value) {
    try { window.localStorage.setItem(CONSENT_KEY, value); } catch (e) {}
  }

  function buildBanner() {
    var banner = document.createElement('div');
    banner.className = 'cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Cookie consent');
    banner.innerHTML =
      '<div class="cookie-banner-inner">' +
        '<p>We use cookies to understand site traffic and improve your experience. Read our <a href="privacy.html">Privacy Policy</a>.</p>' +
        '<div class="cookie-banner-actions">' +
          '<button type="button" class="cookie-btn cookie-btn-reject">Reject</button>' +
          '<button type="button" class="cookie-btn cookie-btn-accept">Accept</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(banner);

    requestAnimationFrame(function () { banner.classList.add('is-visible'); });

    banner.querySelector('.cookie-btn-accept').addEventListener('click', function () {
      setConsent('accepted');
      loadAnalytics();
      dismiss();
    });
    banner.querySelector('.cookie-btn-reject').addEventListener('click', function () {
      setConsent('rejected');
      dismiss();
    });

    function dismiss() {
      banner.classList.remove('is-visible');
      setTimeout(function () { banner.remove(); }, 300);
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    var consent = getConsent();
    if (consent === 'accepted') {
      loadAnalytics();
    } else if (consent === null) {
      buildBanner();
    }
    // if 'rejected', do nothing — no analytics loads
  });
})();
