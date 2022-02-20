module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        dark: {
          ...require('daisyui/colors/themes')['[data-theme=dark]'],
          primary: '#ff6400',
          'primary-focus': '#f24f00'
        }
      }
    ]
  }
}
