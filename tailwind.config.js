/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#040406',
          900: '#08080c',
          850: '#0f0f14',
          800: '#14141d',
          700: '#1e1e2b',
        },
        apple: {
          bg: '#000000',
          card: 'rgba(20, 20, 24, 0.65)',
          border: 'rgba(255, 255, 255, 0.1)',
          subtle: '#86868b',
          light: '#f5f5f7',
          accent: '#2997ff',
          violet: '#a855f7',
          emerald: '#10b981',
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"SF Pro Text"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"SF Mono"', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
