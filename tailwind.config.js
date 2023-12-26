/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,tsx,js}"],
  theme: {
    extend: {fontFamily:{
      'primary': ['Berkshire Swash'],
      'secondary': ['Carattere'],
      'tertiary': ['Carter One'],
      'title': ['Passion One'],
      'fourth':['Kalnia']
    },
  },
  plugins: [],
}
}

