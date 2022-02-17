module.exports = {
  content: [],
  purge: [
    './src/components/**/*.js',
    './pages/**/*.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('precss'),
    require('autoprefixer')
  ],
}
