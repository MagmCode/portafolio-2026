/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      colors: {
        // Basado en la primera fila del PDF
        primary: {
          100: '#D0D8FC',
          200: '#9AAFF9',
          300: '#5A88F5',
          500: '#2563CF', // Main Primary
          600: '#16428F',
          700: '#092454',
          800: '#02102C',
        },
        // Basado en la segunda fila del PDF
        secondary: {
          100: '#E8E5F8',
          200: '#C0BAED',
          300: '#9B8EE1',
          400: '#7763D3',
          500: '#553AB5', // Main Secondary
          600: '#332273',
          700: '#150836',
        },
        // Basado en la quinta fila del PDF
        warn: {
          100: '#FDD7C2',
          200: '#FBA256',
          500: '#CF7D25', // Main Warn
          600: '#9D5D19',
          700: '#6D3F0E',
          800: '#402305',
          900: '#1D0001',
        },
        // Basado en la sexta fila del PDF
        danger: {
          100: '#FBD6D6',
          200: '#F7A09F',
          300: '#F55F5C',
          500: '#CF2B25', // Main Danger
          600: '#911817',
          700: '#580009',
          800: '#2A0302',
        },
        // Escala de grises y sombras basada en las filas tres y siete
        neutral: {
          100: '#F2F0F2', // Text Color
          200: '#D2CED2',
          300: '#ABA5AE',
          400: '#8A8C93',
          500: '#66686E',
          600: '#45464A',
          700: '#262729',
          800: '#211E21', // Shadow Main
          900: '#101112',
        },
        // Basado en la cuarta fila del PDF
        shadow: {
          100: '#EEF0FB',
          200: '#CCD2F3',
          300: '#9CAAE9',
          400: '#6982D0',
          500: '#3F5EB9',
          600: '#283D7D',
          700: '#132047', // Main Shadow2
        },
        accent: {
          primary: '#00b3ffff',
          secondary: '#b85cffff',
          warn: '#FBA256',
          danger: '#F7A09F',
          neutral: '#262729',
          shadow2: '#283D7D',
        }
      },
      boxShadow: {
        soft: '0 20px 60px -20px rgba(6, 85, 212, 0.32)'
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease-out forwards',
        float: 'float 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};