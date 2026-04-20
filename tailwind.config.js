/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cinzel', 'Georgia', 'serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
        chinese: ['"Noto Serif SC"', 'serif'],
      },
      colors: {
        crimson: {
          DEFAULT: '#C41E3A',
          dark:    '#8B0000',
          deep:    '#5a0000',
          deeper:  '#2e0000',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light:   '#F5D060',
          dark:    '#A87E0C',
          muted:   'rgba(212,175,55,0.15)',
        },
        ink: {
          DEFAULT: '#080000',
          100:     '#0f0202',
          200:     '#160303',
          300:     '#1e0606',
          400:     '#260808',
          500:     '#2e0a0a',
        },
        cream:  '#FFF8F0',
        warm: {
          DEFAULT: '#c8b8b0',
          muted:   '#7a6a62',
          dim:     '#4a3e3a',
        },
      },
      backgroundImage: {
        'hero-glow':      'radial-gradient(ellipse at 50% 60%, #3d0000 0%, #0a0000 55%, #050000 100%)',
        'gold-shimmer':   'linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.15) 50%, transparent 100%)',
        'crimson-glow':   'radial-gradient(ellipse at center, rgba(196,30,58,0.3) 0%, transparent 70%)',
        'section-fade':   'linear-gradient(to bottom, #080000, #0f0202)',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { filter: 'drop-shadow(0 0 20px rgba(212,175,55,0.4)) drop-shadow(0 0 60px rgba(212,175,55,0.1))' },
          '50%':      { filter: 'drop-shadow(0 0 60px rgba(212,175,55,0.9)) drop-shadow(0 0 100px rgba(196,30,58,0.3))' },
        },
        floatUp: {
          '0%':   { transform: 'translateY(0)', opacity: '0' },
          '5%':   { opacity: '0.8' },
          '95%':  { opacity: '0.3' },
          '100%': { transform: 'translateY(-100vh)', opacity: '0' },
        },
        ringPulse: {
          '0%, 100%': { opacity: '0.12', transform: 'translate(-50%, -50%) scale(1)' },
          '50%':      { opacity: '0.04', transform: 'translate(-50%, -50%) scale(1.06)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition:  '200% 0' },
        },
        scaleIn: {
          '0%':   { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideDown: {
          '0%':   { opacity: '0', transform: 'translateY(-12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        menuReveal: {
          '0%':   { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(8px)' },
        },
      },
      animation: {
        'fade-up':       'fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) both',
        'fade-up-d1':    'fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.15s both',
        'fade-up-d2':    'fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.30s both',
        'fade-up-d3':    'fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.50s both',
        'fade-up-d4':    'fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.70s both',
        'fade-in':       'fadeIn 0.6s ease both',
        'glow-pulse':    'glowPulse 3.5s ease-in-out infinite',
        'float-up':      'floatUp linear infinite',
        'ring-pulse':    'ringPulse 4s ease-in-out infinite',
        'marquee':       'marquee 22s linear infinite',
        'scale-in':      'scaleIn 0.4s cubic-bezier(0.22,1,0.36,1) both',
        'slide-down':    'slideDown 0.35s cubic-bezier(0.22,1,0.36,1) both',
        'menu-reveal':   'menuReveal 0.3s cubic-bezier(0.22,1,0.36,1) both',
        'bounce-y':      'bounceY 1.8s ease-in-out infinite',
      },
      boxShadow: {
        'gold':       '0 0 30px rgba(212,175,55,0.2)',
        'gold-lg':    '0 0 60px rgba(212,175,55,0.35)',
        'crimson':    '0 8px 32px rgba(196,30,58,0.45)',
        'crimson-lg': '0 16px 48px rgba(196,30,58,0.55)',
        'card':       '0 4px 32px rgba(0,0,0,0.6)',
        'card-hover': '0 8px 48px rgba(0,0,0,0.8)',
      },
    },
  },
  plugins: [],
}
