/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0B1020',
          900: '#111833',
          800: '#1A2347',
          700: '#27325E',
          600: '#3B4778',
          500: '#5A6694',
          400: '#8891B4',
          300: '#B4BAD3',
          200: '#D9DCEA',
          100: '#ECEEF5',
        },
        paper: {
          DEFAULT: '#FBF8F3',
          100: '#F5F0E7',
          200: '#EDE5D7',
        },
        siren: {
          50: '#FFF1EC',
          100: '#FFDCCF',
          200: '#FFB79E',
          400: '#FF7A52',
          500: '#F25A2E',
          600: '#D9431A',
          700: '#B23412',
        },
        signal: {
          50: '#E7FBF5',
          100: '#C4F3E4',
          300: '#6EE0BE',
          400: '#2FCB9E',
          500: '#11A880',
          600: '#0B8566',
          700: '#0A6A52',
        },
        amber: {
          100: '#FDF0CF',
          400: '#F2B53A',
          600: '#B07A0C',
        },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 0 rgba(17,24,51,0.04), 0 8px 24px -12px rgba(17,24,51,0.18)',
        lift: '0 2px 0 rgba(17,24,51,0.04), 0 24px 48px -24px rgba(17,24,51,0.35)',
        ring: '0 0 0 1px rgba(17,24,51,0.08)',
      },
      keyframes: {
        pulseRing: {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '100%': { transform: 'scale(1.9)', opacity: '0' },
        },
        floatY: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        pulseRing: 'pulseRing 2.4s cubic-bezier(0.2,0.6,0.3,1) infinite',
        floatY: 'floatY 6s ease-in-out infinite',
        fadeUp: 'fadeUp 0.35s ease-out both',
      },
    },
  },
  plugins: [],
}
