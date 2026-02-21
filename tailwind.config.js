/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './pages/**/*.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-forest': '#1A3A2E',
        'python-gold': '#FFB627',
        'syntax-green': '#4ECDC4',
        'electric-coral': '#FF6B6B',
        'midnight-slate': '#2C3E50',
        'paper-white': '#F7FFF7',
        'fog-gray': '#E8F1F2',
        'storm-gray': '#6C757D',
        'ink-black': '#0D1B2A',
        'function-purple': '#9B5DE5',
        'variable-blue': '#00B4D8',
        'comment-sage': '#90A955',
      },
      fontFamily: {
        'jetbrains': ['JetBrains Mono', 'monospace'],
        'atkinson': ['Atkinson Hyperlegible', 'sans-serif'],
        'fira': ['Fira Code', 'monospace'],
        'space': ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
