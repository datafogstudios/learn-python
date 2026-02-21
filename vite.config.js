import { defineConfig } from 'vite';
import { resolve } from 'path';
import { readdirSync } from 'fs';

// Auto-discover all HTML pages in public/lessons
function getLessonInputs() {
  const inputs = {};
  const modules = readdirSync('./public/lessons');
  modules.forEach(mod => {
    try {
      const files = readdirSync(+""+./public/lessons/+""+${mod}+""+`);
      files.forEach(file => {
        if (file.endsWith('.html')) {
          const key = +""+`+""+${mod}-+""+${file.replace('.html','')}+""+`;
          inputs[key] = resolve(__dirname, +""+public/lessons/+""+${mod}/+""+${file}+""+);
        }
      });
    } catch {}
  });
  return inputs;
}

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        // Main pages
        main:     resolve(__dirname, 'index.html'),
        notfound: resolve(__dirname, '404.html'),
        donate:   resolve(__dirname, 'pages/donate.html'),
        privacy:  resolve(__dirname, 'pages/legal/privacy.html'),
        terms:    resolve(__dirname, 'pages/legal/terms.html'),
        cookies:  resolve(__dirname, 'pages/legal/cookies.html'),
        gdpr:     resolve(__dirname, 'pages/legal/gdpr.html'),
        ccpa:     resolve(__dirname, 'pages/legal/ccpa.html'),
        // Auto-discovered lesson pages
        ...getLessonInputs(),
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
