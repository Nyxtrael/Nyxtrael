/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'fill-accent',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'neutral-dark': '#0D0D0D',
        'neutral-mid': '#212121',
        'text-base': {
          DEFAULT: '#333333',
          dark: '#FFFFFF',
        },
        'text-muted': {
          DEFAULT: '#666666',
          dark: '#E0E0E0',
        },
        'text-primary': {
          DEFAULT: '#333333',
          dark: '#FFFFFF',
        },
        'text-secondary': {
          DEFAULT: '#666666',
          dark: '#A0A0A0',
        },
        'accent': '#1ABC9C',
        'brand': '#6B46C1',
        'hoverAccent': '#16A085',
        'sectionGray': '#2D2D2D',
        'dark': '#050505',
        'light-gray': '#D0D0D0',
        'medium-gray': {
          DEFAULT: '#808080',
          dark: '#808080',
        },
        'dark-accent': '#148F77',
        'background-light': '#F5F5F5',
        'surface-light': '#F5F5F5',
        'neon-dark': '#0A0A0A',
        'neon-pink': '#FF2D55',
        'neon-blue': '#00E5FF',
        'accent-green': '#39FF14',
        'accent-purple': '#D600F0',
        // ShopTrend Colors (Updated)
        'shoptrend-bg': '#0D0D0D',
        'shoptrend-text': '#FFFFFF',
        'shoptrend-gold': '#D4AF37',
        'shoptrend-brown': '#A67C52',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        lora: ['Lora', 'serif'],
        playfair: ['Playfair Display', 'serif'],
        bebas: ['Bebas Neue', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        exo: ['Exo', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1240px',
          '2xl': '1440px',
        },
      },
      boxShadow: {
        'card': '0 4px 6px rgba(0,0,0,0.2)',
        'card-hover': '0 10px 20px rgba(0,0,0,0.4)',
        'inset-accent': 'inset 0 0 0 2px #1ABC9C',
        'neon-pink': '0 0 15px rgba(255, 45, 85, 0.5)',
        'neon-blue': '0 0 15px rgba(0, 229, 255, 0.5)',
        'neon-green': '0 0 15px rgba(57, 255, 20, 0.5)',
        'neon-purple': '0 0 15px rgba(214, 0, 240, 0.5)',
      },
      zIndex: {
        1: '1',
        10: '10',
        25: '25',
        50: '50',
        75: '75',
        100: '100',
        auto: 'auto',
      },
      letterSpacing: {
        tighter: '-.03em',
        wide: '.03em',
      },
      lineHeight: {
        tight: '1.2',
        snug: '1.35',
        relaxed: '1.6',
      },
      scale: {
        98: '0.98',
        102: '1.02',
        105: '1.05',
      },
      blur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
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
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        hoverLift: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-5px)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'shimmer-effect': 'shimmer 3s infinite',
        'hover-lift': 'hoverLift 0.3s ease-out forwards',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};