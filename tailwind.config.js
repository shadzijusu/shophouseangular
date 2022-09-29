/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        orangeLight: 'var(--orangeLight)',
        lightGray: 'var(--lightGray)',
        seashell: 'var(--seashell)'
      },
      backgroundImage: (theme) => ({
        'shopping': "url('../src/assets/images/shopping.jpg')",
      })
    },
  },
  plugins: [],
};
