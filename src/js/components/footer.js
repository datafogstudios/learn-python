import { SITE_CONFIG } from '../../data/site-config.js';

export function createFooter() {
  const year = SITE_CONFIG.copyright.getCurrentYear();
  return \
    <footer class=\"bg-ink-black text-paper-white\">

      <!-- Main Footer -->
      <div class=\"max-w-7xl mx-auto px-6 py-16\">
        <div class=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12\">

          <!-- Brand Column -->
          <div class=\"lg:col-span-1\">
            <a href=\"/\" class=\"flex items-center gap-3 mb-6\">
              <div class=\"w-10 h-10 bg-python-gold rounded-full flex items-center justify-center\">
                <span class=\"text-2xl\">🐍</span>
              </div>
              <span class=\"font-jetbrains font-bold text-xl text-paper-white\">Learn Python</span>
            </a>
            <p class=\"font-atkinson text-storm-gray text-sm leading-relaxed mb-6\">
              Master Python programming through interactive lessons, real-world projects, and a thriving community.
            </p>
            <!-- Social Links -->
            <div class=\"flex gap-4\">
              <a href=\"\\" target=\"_blank\" rel=\"noopener\" class=\"w-9 h-9 bg-midnight-slate rounded-lg flex items-center justify-center hover:bg-python-gold hover:text-deep-forest transition-all\" aria-label=\"Twitter\">
                <svg class=\"w-4 h-4\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><path d=\"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.261 5.632 5.902-5.632Zm-1.161 17.52h1.833L7.084 4.126H5.117z\"/></svg>
              </a>
              <a href=\"\\" target=\"_blank\" rel=\"noopener\" class=\"w-9 h-9 bg-midnight-slate rounded-lg flex items-center justify-center hover:bg-python-gold hover:text-deep-forest transition-all\" aria-label=\"GitHub\">
                <svg class=\"w-4 h-4\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><path d=\"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z\"/></svg>
              </a>
              <a href=\"\\" target=\"_blank\" rel=\"noopener\" class=\"w-9 h-9 bg-midnight-slate rounded-lg flex items-center justify-center hover:bg-python-gold hover:text-deep-forest transition-all\" aria-label=\"Discord\">
                <svg class=\"w-4 h-4\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><path d=\"M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z\"/></svg>
              </a>
              <a href=\"\\" target=\"_blank\" rel=\"noopener\" class=\"w-9 h-9 bg-midnight-slate rounded-lg flex items-center justify-center hover:bg-python-gold hover:text-deep-forest transition-all\" aria-label=\"YouTube\">
                <svg class=\"w-4 h-4\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><path d=\"M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z\"/></svg>
              </a>
            </div>
          </div>

          <!-- Course Column -->
          <div>
            <h3 class=\"font-space font-bold text-paper-white mb-5 text-sm uppercase tracking-widest\">Course</h3>
            <ul class=\"space-y-3\">
              <li><a href=\"/#course\" class=\"font-atkinson text-storm-gray hover:text-python-gold transition-colors text-sm\">Python Basics</a></li>
              <li><a href=\"/#course\" class=\"font-atkinson text-storm-gray hover:text-python-gold transition-colors text-sm\">Control Flow</a></li>
              <li><a href=\"/#course\" class=\"font-atkinson text-storm-gray hover:text-python-gold transition-colors text-sm\">Data Structures</a></li>
              <li><a href=\"/#course\" class=\"font-atkinson text-storm-gray hover:text-python-gold transition-colors text-sm\">Functions</a></li>
              <li><a href=\"/#course\" class=\"font-atkinson text-storm-gray hover:text-python-gold transition-colors text-sm\">OOP</a></li>
              <li><a href=\"/#course\" class=\"font-atkinson text-storm-gray hover:text-python-gold transition-colors text-sm\">File Handling</a></li>
              <li><a href=\"/#course\" class=\"font-atkinson text-storm-gray hover:text-python-gold transition-colors text-sm\">Advanced Topics</a></li>
            </ul>
          </div>

          <!-- Company Column -->
          <div>
            <h3 class=\"font-space font-bold text-paper-white mb-5 text-sm uppercase tracking-widest\">Company</h3>
            <ul class=\"space-y-3\">
              <li><a href=\"/#about\" class=\"font-atkinson text-storm-gray hover:text-python-gold transition-colors text-sm\">About Us</a></li>
              <li><a href=\"/#features\" class=\"font-atkinson text-storm-gray hover:text-python-gold transition-colors text-sm\">Features</a></li>
              <li><a href=\"/#community\" class=\"font-atkinson text-storm-gray hover:text-python-gold transition-colors text-sm\">Community</a></li>
              <li><a href=\"/pages/donate.html\" class=\"font-atkinson text-syntax-green hover:text-python-gold transition-colors text-sm font-bold\">Support Us 💚</a></li>
              <li><a href=\"mailto:\\" class=\"font-atkinson text-storm-gray hover:text-python-gold transition-colors text-sm\">Contact</a></li>
            </ul>
          </div>

          <!-- Legal Column -->
          <div>
            <h3 class=\"font-space font-bold text-paper-white mb-5 text-sm uppercase tracking-widest\">Legal</h3>
            <ul class=\"space-y-3\">
              <li><a href=\"\\" class=\"font-atkinson text-storm-gray hover:text-python-gold transition-colors text-sm\">Privacy Policy</a></li>
              <li><a href=\"\\" class=\"font-atkinson text-storm-gray hover:text-python-gold transition-colors text-sm\">Terms of Service</a></li>
              <li><a href=\"\\" class=\"font-atkinson text-storm-gray hover:text-python-gold transition-colors text-sm\">Cookie Policy</a></li>
              <li><a href=\"\\" class=\"font-atkinson text-storm-gray hover:text-python-gold transition-colors text-sm\">GDPR</a></li>
              <li><a href=\"\\" class=\"font-atkinson text-storm-gray hover:text-python-gold transition-colors text-sm\">CCPA</a></li>
              <li><a href=\"mailto:\\" class=\"font-atkinson text-storm-gray hover:text-python-gold transition-colors text-sm\">DMCA</a></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class=\"border-t border-midnight-slate\">
        <div class=\"max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4\">
          <p class=\"font-atkinson text-storm-gray text-xs\">
            © \ DataFog Studios. All rights reserved. Learn Python™ is a registered trademark of DataFog Studios.
          </p>
          <div class=\"flex items-center gap-4\">
            <span class=\"font-jetbrains text-storm-gray text-xs\">Made with 💛 by DataFog Studios</span>
          </div>
        </div>
      </div>

    </footer>
  \;
}
