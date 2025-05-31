/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.css',
  ],
  safelist: ['fill-accent'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'neutral-bg': '#0d1117', // Main background
        'neutral-mid': '#1f2937', // Card/section background
        'text-base': '#f5f5f5', // Primary text
        'text-muted': '#cbd5e1', // Secondary text
        'text-muted-secondary': '#94a3b8', // Muted text
        'accent': '#38bdf8', // Primary accent
        'hover-accent': '#0ea5e9', // Hover accent
        'cyan-400': '#22d3ee', // Gradient start
        'yellow-400': '#facc15', // Gradient end, success/warning
        'green-500': '#10b981', // Success color
        'red-500': '#ef4444', // Error color
        'neutral-dark': '#0D0D0D',
        'brand': '#6B46C1',
        'dark-bg': '#0e0e0e', // Gallery background
        'case-bg': '#212121', // Case studies background
        'contact-bg': '#111111', // Contact background
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 6px rgba(0,0,0,0.2)',
        'card-hover': '0 10px 20px rgba(0,0,0,0.4)',
        accent: '0 0 0 2px #38bdf8',
        neon: '0 0 10px rgba(56, 189, 248, 0.7)',
      },
      backgroundImage: {
        'gradient-cta': 'linear-gradient(to right, #22d3ee, #facc15)',
        'hero-gradient': 'linear-gradient(to bottom right, #0d1117, #0e3a3a)',
        'section-gradient': 'linear-gradient(to bottom, #111111, #0e0e0e, #0a0a0a)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(50px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: 0, transform: 'scale(0.9)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(56, 189, 248, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(56, 189, 248, 0.8)' },
        },
        glowLine: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: 0.5 },
          '50%': { opacity: 0.3 },
        },
        fadeInFast: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'shimmer-effect': 'shimmer 3s infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'glow-line': 'glowLine 1.5s ease-in-out forwards',
        'pulse-slow': 'pulseSlow 8s ease-in-out infinite',
        'fade-in-fast': 'fadeInFast 0.3s ease-out forwards',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};