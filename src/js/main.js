import { createHeader, initHeader } from './components/header.js';
import { createFooter } from './components/footer.js';
import { MODULES } from '../data/modules.js';
import { initCookieBanner } from './components/cookie-banner.js';

// ─── Mount Header & Footer ───────────────────────────────────────
const headerMount = document.getElementById('header-mount');
const footerMount = document.getElementById('footer-mount');

if (headerMount) headerMount.innerHTML = createHeader();
if (footerMount) footerMount.innerHTML = createFooter();
initHeader();

// ─── Render Feature Cards ─────────────────────────────────────────
const FEATURES = [
  { icon: '🎯', title: 'Structured Curriculum', desc: 'A carefully designed path from absolute beginner to advanced Python developer. No filler, no fluff.' },
  { icon: '💻', title: 'Interactive Lessons', desc: 'Code along in every lesson. Exercises are built-in so you practice as you learn, not after.' },
  { icon: '🚀', title: 'Real Projects', desc: 'Build 20+ real Python projects. Portfolio-ready work that actually shows employers what you can do.' },
  { icon: '🤝', title: 'Community Support', desc: 'Never get stuck. 10,000+ learners and mentors on Discord to help you through every challenge.' },
  { icon: '📱', title: 'Learn Anywhere', desc: 'Fully responsive. Learn on your phone, tablet, or desktop — wherever you have a few minutes.' },
  { icon: '🆓', title: 'Always Free', desc: 'No paywalls, no premium tiers. Every lesson, every project, every resource — 100% free.' },
];

const featuresGrid = document.getElementById('features-grid');
if (featuresGrid) {
  featuresGrid.innerHTML = FEATURES.map(f => +""+
    <div class="bg-paper-white rounded-2xl p-8 border border-fog-gray hover:border-python-gold hover:shadow-xl transition-all group">
      <div class="w-14 h-14 bg-fog-gray rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-python-gold/10 transition-colors">
        +""+${f.icon}
      </div>
      <h3 class="font-space font-bold text-xl text-deep-forest mb-3">+""+${f.title}</h3>
      <p class="font-atkinson text-storm-gray leading-relaxed">+""+${f.desc}</p>
    </div>
  +""+).join('');
}

// ─── Render Module Cards ──────────────────────────────────────────
const modulesGrid = document.getElementById('modules-grid');
if (modulesGrid) {
  modulesGrid.innerHTML = MODULES.map((mod) => +""+
    <div class="bg-paper-white rounded-2xl overflow-hidden border border-fog-gray hover:shadow-xl transition-all group cursor-pointer"
         onclick="window.location='/public/lessons/module+""+${mod.id}/index.html'">

      <div class="h-2" style="background-color: +""+${mod.color}"></div>

      <div class="p-6">
        <div class="flex items-center justify-between mb-4">
          <span class="text-3xl">+""+${mod.icon}</span>
          <span class="font-jetbrains text-xs text-storm-gray bg-fog-gray px-3 py-1 rounded-full">
            Module +""+${mod.id}
          </span>
        </div>

        <h3 class="font-space font-bold text-xl text-deep-forest mb-3 group-hover:text-python-gold transition-colors">
          +""+${mod.title}
        </h3>
        <p class="font-atkinson text-storm-gray text-sm leading-relaxed mb-5">
          +""+${mod.description}
        </p>

        <ul class="space-y-1 mb-5">
          +""+${mod.topics.map(t => +""+
            <li class="flex items-center gap-2 font-atkinson text-sm text-midnight-slate">
              <span class="w-1.5 h-1.5 rounded-full flex-shrink-0" style="background-color:+""+${mod.color}"></span>
              +""+${t}
            </li>
          +""+).join('')}
        </ul>

        <div class="flex items-center justify-between pt-4 border-t border-fog-gray">
          <span class="font-atkinson text-xs text-storm-gray">+""+${mod.lessons} lessons · +""+${mod.duration}h</span>
          <span class="font-space font-bold text-sm group-hover:translate-x-1 transition-transform" style="color:+""+${mod.color}">
            Start →
          </span>
        </div>
      </div>
    </div>
  +""+).join('');
}

// ─── Scroll Animations ────────────────────────────────────────────
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('[data-animate]').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// ─── Smooth Scroll ────────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

console.log('%c🐍 Learn Python', 'color: #FFB627; font-size: 24px; font-weight: bold;');
console.log('%cBuilt by DataFog Studios', 'color: #4ECDC4; font-size: 12px;');

// ─── Cookie Banner ───────────────────────────────────────────────
initCookieBanner();