/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#141210',
          soft: '#3A332C',
          mute: '#6F655B',
        },
        cream: {
          DEFAULT: '#FFF6EC',
          50: '#FFFDFA',
          100: '#FFF6EC',
          200: '#FDEBD8',
          300: '#F9DCC0',
        },
        peach: '#FFD9BC',
        brand: {
          50: '#FFF3E9',
          100: '#FFE3CD',
          200: '#FFC79B',
          300: '#FFA85F',
          400: '#FF8A2B',
          500: '#F97316',
          600: '#E85D04',
          700: '#C14406',
          800: '#9A340A',
        },
        lime: '#C6F24E',
        berry: '#E8365D',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.75rem',
        '6xl': '3.5rem',
        '7xl': '4.5rem',
        '8xl': '5.5rem',
      },
      boxShadow: {
        soft: '0 24px 70px -30px rgba(20,18,16,0.28)',
        lift: '0 40px 90px -34px rgba(20,18,16,0.34)',
        glow: '0 30px 80px -26px rgba(249,115,22,0.55)',
        chip: '0 14px 34px -16px rgba(20,18,16,0.35)',
        phone: '0 60px 120px -40px rgba(20,18,16,0.55)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        drift: {
          '0%,100%': { transform: 'translate3d(0,0,0) rotate(0deg)' },
          '50%': { transform: 'translate3d(0,-14px,0) rotate(2deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        rider: {
          '0%': { transform: 'translateX(-6%)' },
          '100%': { transform: 'translateX(106%)' },
        },
        bob: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        drift: 'drift 7s ease-in-out infinite',
        marquee: 'marquee 26s linear infinite',
        rider: 'rider 9s linear infinite',
        bob: 'bob 3.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
