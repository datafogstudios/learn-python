import { SITE_CONFIG } from '../../data/site-config.js';

export function createHeader() {
  return \
    <header id=\"site-header\" class=\"fixed top-0 w-full z-50 bg-paper-white/95 backdrop-blur-xl transition-all duration-300\">
      <div class=\"max-w-7xl mx-auto px-6 py-4\">
        <div class=\"flex items-center justify-between\">
          <!-- Logo -->
          <a href=\"/\" class=\"flex items-center gap-3 group\">
            <div class=\"w-10 h-10 bg-python-gold rounded-full flex items-center justify-center\">
              <span class=\"text-2xl\">🐍</span>
            </div>
            <span class=\"font-jetbrains font-bold text-xl text-deep-forest\">
              Learn Python
            </span>
          </a>

          <!-- Desktop Navigation -->
          <nav class=\"hidden md:flex items-center gap-8\">
            <a href=\"#course\" class=\"font-space font-medium text-storm-gray hover:text-python-gold transition-colors\">Course</a>
            <a href=\"#features\" class=\"font-space font-medium text-storm-gray hover:text-python-gold transition-colors\">Features</a>
            <a href=\"#community\" class=\"font-space font-medium text-storm-gray hover:text-python-gold transition-colors\">Community</a>
            <a href=\"#about\" class=\"font-space font-medium text-storm-gray hover:text-python-gold transition-colors\">About</a>
          </nav>

          <!-- Action Buttons -->
          <div class=\"hidden md:flex items-center gap-3\">
            <a href=\"/pages/donate.html\" class=\"bg-gradient-to-r from-syntax-green to-variable-blue text-paper-white px-6 py-2 rounded-full font-space font-bold text-sm hover:shadow-xl transition-all hover:-translate-y-1\">
              Support Us 💚
            </a>
            <button class=\"bg-transparent border-2 border-fog-gray text-storm-gray px-6 py-2 rounded-lg font-space font-medium text-sm hover:border-python-gold hover:text-python-gold transition-all\">
              Sign In
            </button>
            <button class=\"bg-python-gold text-deep-forest px-6 py-2 rounded-lg font-space font-bold text-sm shadow-lg shadow-python-gold/40 hover:shadow-xl hover:-translate-y-1 transition-all\">
              Start Free
            </button>
          </div>

          <!-- Mobile Menu Button -->
          <button id=\"mobile-menu-btn\" class=\"md:hidden p-2 text-deep-forest\">
            <svg class=\"w-6 h-6\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">
              <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 12h16M4 18h16\"></path>
            </svg>
          </button>
        </div>

        <!-- Mobile Menu -->
        <div id=\"mobile-menu\" class=\"hidden md:hidden mt-4 pb-4 border-t border-fog-gray pt-4\">
          <nav class=\"flex flex-col gap-4\">
            <a href=\"#course\" class=\"font-space font-medium text-storm-gray\">Course</a>
            <a href=\"#features\" class=\"font-space font-medium text-storm-gray\">Features</a>
            <a href=\"#community\" class=\"font-space font-medium text-storm-gray\">Community</a>
            <a href=\"#about\" class=\"font-space font-medium text-storm-gray\">About</a>
          </nav>
          <div class=\"flex flex-col gap-3 mt-4\">
            <a href=\"/pages/donate.html\" class=\"bg-gradient-to-r from-syntax-green to-variable-blue text-paper-white px-6 py-2 rounded-full font-space font-bold text-sm text-center\">
              Support Us 💚
            </a>
            <button class=\"bg-transparent border-2 border-fog-gray text-storm-gray px-6 py-2 rounded-lg font-space font-medium text-sm w-full\">
              Sign In
            </button>
            <button class=\"bg-python-gold text-deep-forest px-6 py-2 rounded-lg font-space font-bold text-sm w-full\">
              Start Free
            </button>
          </div>
        </div>
      </div>
    </header>
  \;
}

// Initialize header functionality
export function initHeader() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const header = document.getElementById('site-header');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Add shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('shadow-lg');
    } else {
      header.classList.remove('shadow-lg');
    }
  });
}
