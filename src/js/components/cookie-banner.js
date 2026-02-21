export function createCookieBanner() {
  return +""+
    <div id="cookie-banner"
      class="fixed bottom-0 left-0 right-0 z-50 p-4 transition-transform duration-500 translate-y-full"
      role="dialog" aria-label="Cookie consent">
      <div class="max-w-4xl mx-auto bg-ink-black text-paper-white rounded-2xl shadow-2xl border border-midnight-slate p-6 flex flex-col md:flex-row items-start md:items-center gap-6">

        <div class="flex items-start gap-4 flex-1">
          <span class="text-3xl flex-shrink-0">🍪</span>
          <div>
            <p class="font-space font-bold text-paper-white mb-1">We use cookies</p>
            <p class="font-atkinson text-storm-gray text-sm leading-relaxed">
              We use essential cookies to run this site and optional analytics cookies to improve your learning experience.
              <a href="/pages/legal/cookies.html" class="text-python-gold hover:underline ml-1">Cookie Policy</a>
            </p>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-3 flex-shrink-0 w-full md:w-auto">
          <button id="cookie-decline"
            class="bg-transparent border border-midnight-slate text-storm-gray px-5 py-2.5 rounded-lg font-space font-medium text-sm hover:border-storm-gray transition-all">
            Decline Optional
          </button>
          <button id="cookie-accept"
            class="bg-python-gold text-deep-forest px-5 py-2.5 rounded-lg font-space font-bold text-sm hover:shadow-lg hover:shadow-python-gold/30 transition-all">
            Accept All
          </button>
        </div>

      </div>
    </div>
  +""+;
}

export function initCookieBanner() {
  const COOKIE_KEY = 'lp_cookie_consent';

  // Don't show if already decided
  if (localStorage.getItem(COOKIE_KEY)) return;

  // Mount banner
  const mount = document.createElement('div');
  mount.innerHTML = createCookieBanner();
  document.body.appendChild(mount.firstElementChild);

  const banner = document.getElementById('cookie-banner');

  // Slide in after short delay
  setTimeout(() => {
    banner.classList.remove('translate-y-full');
  }, 1200);

  // Accept
  document.getElementById('cookie-accept').addEventListener('click', () => {
    localStorage.setItem(COOKIE_KEY, 'accepted');
    hideBanner();
    loadAnalytics(); // Load optional analytics
  });

  // Decline
  document.getElementById('cookie-decline').addEventListener('click', () => {
    localStorage.setItem(COOKIE_KEY, 'declined');
    hideBanner();
  });

  function hideBanner() {
    banner.classList.add('translate-y-full');
    setTimeout(() => banner.remove(), 500);
  }
}

function loadAnalytics() {
  // Placeholder — add your analytics script tag here when ready
  // e.g. Plausible, Fathom, or GA4
  console.log('[LearnPython] Analytics enabled by user consent.');
}
