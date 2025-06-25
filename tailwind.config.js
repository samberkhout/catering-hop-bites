module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0f0f0f',
        steel: '#2c2c2c',
        copper: '#b87333',
        'copper-dark': '#965a2e'
      },
      fontFamily: {
        sans: ['\"Bebas Neue\"', 'sans-serif']
      }
    }
  },
  plugins: []
}
