import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './index.html',
        donate: './pages/donate.html',
        privacy: './pages/legal/privacy.html',
        terms: './pages/legal/terms.html',
        cookies: './pages/legal/cookies.html',
        gdpr: './pages/legal/gdpr.html',
        ccpa: './pages/legal/ccpa.html',
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
