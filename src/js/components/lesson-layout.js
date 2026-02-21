import { MODULES } from '../../data/modules.js';

export function createLessonLayout({ moduleId, lessonIndex, title, content }) {
  const mod = MODULES.find(m => m.id === moduleId);
  const totalLessons = mod ? mod.lessons : 8;
  const prevLesson = lessonIndex > 1 ? lessonIndex - 1 : null;
  const nextLesson = lessonIndex < totalLessons ? lessonIndex + 1 : null;
  const progress = Math.round((lessonIndex / totalLessons) * 100);

  return +""+
    <div class="min-h-screen bg-fog-gray flex flex-col">

      <!-- Lesson Top Bar -->
      <div class="bg-deep-forest text-paper-white px-6 py-3 flex items-center justify-between sticky top-[72px] z-40 shadow-lg">
        <div class="flex items-center gap-4">
          <a href="/" class="font-jetbrains text-python-gold font-bold text-sm hover:underline">🐍 Learn Python</a>
          <span class="text-storm-gray">/</span>
          <span class="font-atkinson text-fog-gray text-sm">+""+${mod ? mod.title : 'Module ' + moduleId}</span>
          <span class="text-storm-gray">/</span>
          <span class="font-atkinson text-paper-white text-sm font-medium">+""+${title}</span>
        </div>
        <div class="hidden md:flex items-center gap-3">
          <span class="font-atkinson text-storm-gray text-xs">Lesson +""+${lessonIndex} of +""+${totalLessons}</span>
          <div class="w-32 h-2 bg-midnight-slate rounded-full overflow-hidden">
            <div class="h-full bg-python-gold rounded-full transition-all" style="width:+""+${progress}%"></div>
          </div>
          <span class="font-jetbrains text-python-gold text-xs">+""+${progress}%</span>
        </div>
      </div>

      <!-- Main Layout -->
      <div class="flex flex-1 max-w-7xl mx-auto w-full px-4 py-8 gap-8">

        <!-- Sidebar: Lesson List -->
        <aside class="hidden lg:block w-64 flex-shrink-0">
          <div class="bg-paper-white rounded-2xl border border-fog-gray p-4 sticky top-36">
            <h3 class="font-space font-bold text-deep-forest text-sm mb-4 uppercase tracking-wide">
              +""+${mod ? mod.icon + ' ' + mod.title : 'Module ' + moduleId}
            </h3>
            <nav class="space-y-1" id="lesson-nav">
              <!-- Injected by page script -->
            </nav>
            <div class="mt-6 pt-4 border-t border-fog-gray">
              <a href="/#course" class="font-atkinson text-storm-gray text-xs hover:text-python-gold transition-colors">
                ← All Modules
              </a>
            </div>
          </div>
        </aside>

        <!-- Lesson Content -->
        <article class="flex-1 min-w-0">
          <div class="bg-paper-white rounded-2xl border border-fog-gray p-8 lg:p-12 mb-6">

            <!-- Lesson Header -->
            <div class="mb-8">
              <div class="flex items-center gap-3 mb-4">
                <span class="bg-python-gold/10 text-python-gold font-jetbrains text-xs px-3 py-1 rounded-full font-bold">
                  Lesson +""+${lessonIndex}
                </span>
                <span class="bg-fog-gray text-storm-gray font-atkinson text-xs px-3 py-1 rounded-full">
                  +""+${mod ? mod.title : 'Module ' + moduleId}
                </span>
              </div>
              <h1 class="font-jetbrains font-extrabold text-3xl lg:text-4xl text-deep-forest leading-tight">
                +""+${title}
              </h1>
            </div>

            <!-- Dynamic Content -->
            <div class="lesson-content prose-custom" id="lesson-content">
              +""+${content}
            </div>

          </div>

          <!-- Lesson Navigation -->
          <div class="flex gap-4">
            +""+${prevLesson ? +""+
              <a href="./lesson-+""+${String(prevLesson).padStart(2,'0')}.html"
                class="flex-1 bg-paper-white border-2 border-fog-gray rounded-xl p-4 flex items-center gap-3 hover:border-python-gold transition-all group">
                <span class="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
                <div>
                  <p class="font-atkinson text-storm-gray text-xs">Previous</p>
                  <p class="font-space font-bold text-deep-forest text-sm">Lesson +""+${prevLesson}</p>
                </div>
              </a>
            +""+ : '<div class="flex-1"></div>'}
            +""+${nextLesson ? +""+
              <a href="./lesson-+""+${String(nextLesson).padStart(2,'0')}.html"
                class="flex-1 bg-python-gold rounded-xl p-4 flex items-center justify-end gap-3 hover:shadow-xl hover:-translate-y-0.5 transition-all group">
                <div class="text-right">
                  <p class="font-atkinson text-deep-forest/70 text-xs">Next</p>
                  <p class="font-space font-bold text-deep-forest text-sm">Lesson +""+${nextLesson}</p>
                </div>
                <span class="text-2xl group-hover:translate-x-1 transition-transform">→</span>
              </a>
            +""+ : +""+
              <div class="flex-1 bg-gradient-to-r from-syntax-green to-variable-blue rounded-xl p-4 flex items-center justify-center">
                <p class="font-space font-bold text-paper-white">🎉 Module Complete!</p>
              </div>
            +""+}
          </div>
        </article>

      </div>
    </div>
  +""+;
}

// Lesson content styles (injected once)
export function injectLessonStyles() {
  const style = document.createElement('style');
  style.textContent = +""+
    .lesson-content h2 {
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 700;
      font-size: 1.5rem;
      color: var(--deep-forest);
      margin: 2rem 0 1rem;
    }
    .lesson-content h3 {
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 600;
      font-size: 1.125rem;
      color: var(--midnight-slate);
      margin: 1.5rem 0 0.75rem;
    }
    .lesson-content p {
      font-family: 'Atkinson Hyperlegible', sans-serif;
      color: var(--midnight-slate);
      line-height: 1.8;
      margin-bottom: 1rem;
    }
    .lesson-content pre {
      background: var(--ink-black);
      border-radius: 12px;
      padding: 1.5rem;
      overflow-x: auto;
      margin: 1.5rem 0;
      border: 1px solid rgba(247,255,247,0.1);
    }
    .lesson-content code {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.875rem;
      color: var(--paper-white);
      line-height: 1.7;
    }
    .lesson-content :not(pre) > code {
      background: var(--fog-gray);
      color: var(--deep-forest);
      padding: 0.15rem 0.4rem;
      border-radius: 4px;
      font-size: 0.85em;
    }
    .lesson-content .output-block {
      background: #0D2A1A;
      border-left: 4px solid var(--comment-sage);
      border-radius: 0 12px 12px 0;
      padding: 1rem 1.5rem;
      margin: 1rem 0;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.875rem;
      color: var(--comment-sage);
    }
    .lesson-content .tip-box {
      background: var(--python-gold)/10;
      border: 1px solid var(--python-gold)/30;
      border-radius: 12px;
      padding: 1rem 1.5rem;
      margin: 1.5rem 0;
    }
    .lesson-content .tip-box strong {
      color: var(--python-gold);
    }
    .lesson-content ul {
      margin: 1rem 0 1rem 1.5rem;
      space-y: 0.5rem;
    }
    .lesson-content ul li {
      font-family: 'Atkinson Hyperlegible', sans-serif;
      color: var(--midnight-slate);
      line-height: 1.7;
      list-style: disc;
      margin-bottom: 0.4rem;
    }
    /* Syntax highlight colors */
    .kw  { color: #9B5DE5; }
    .fn  { color: #00B4D8; }
    .st  { color: #4ECDC4; }
    .cm  { color: #90A955; }
    .nm  { color: #FFB627; }
    .op  { color: #FF6B6B; }
  +""+;
  document.head.appendChild(style);
}
