// ** @type {import('tailwindcss').Config} 
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#232B2B', // Charleston Green
          900: '#1c2222',
          800: '#202828',
          700: '#232B2B',
        },
        neutralx: {
          50: '#F7F7F5',
          200: '#E6E7E4',
          400: '#C9CCC6',
          600: '#A9ADA7',
        },
        accent: {
          DEFAULT: '#B87333', // copper
          600: '#a7662e',
          700: '#8f5828',
        },
        tealish: '#2F4F4F',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 6px 18px rgba(0,0,0,0.12)'
      },
      // existing project animations
      animation: {
        'gradient-x': 'gradient-x 8s ease infinite',
        'floatCode': 'floatCode 30s linear infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        // leaving floatCode keyframes definition in CSS; Tailwind only needs the class name for purge-safety
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
    },
  },
  plugins: [],
}