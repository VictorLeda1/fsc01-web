const brandColors = {
  birdBlue: '#1D9BF0',
  richBlack:'#15202B',
  onix:     '#333639',
  silver:   '#71767B',
  platinum: '#E7E9EA'
}

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ...brandColors,
        
        backgroundColor: brandColors.richBlack,
        textColor: brandColors.platinum,
      }
    },
  },
  plugins: [],
}

