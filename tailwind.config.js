/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-bg': '#0F172A',
        'brand-surface': '#1E293B',
        'brand-text': '#F8FAFC',
        'brand-muted': '#94A3B8',
        'brand-primary': '#8B5CF6',
        'brand-cyan': '#06B6D4',
        'brand-pink': '#EC4899'
      },
      boxShadow: {
        soft: '0 20px 60px -20px rgba(6, 182, 212, 0.25)'
      }
    },
  },
  plugins: [],
};