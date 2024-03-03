/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        
      },
      fontSize: {
        'title_h1': '1.7em',
        'title_h2': '1.5em',
        'title_h3': '1.3em',
        'title_h4': '1.1em',
        'title_h5': '0.9em',
        'title_h6': '0.7em',
      },
      colors: {
        'text':       '#1D1D1D',
        'backG':      '#B0BEC5',
        'backT':      '#B0BEC5',
        'blueGrey700':"#455A6470",
        'grey500':    "#9E9E9E",
      },
    },
  },
  plugins: [],
}

