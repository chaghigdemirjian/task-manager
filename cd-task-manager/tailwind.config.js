/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./index.html", // program will look for tailwind classes in index.html. 
    "./src/**/*.{js,ts,jsx,tsx}", // and anything in src folder with these extentions.
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      gridTemplateColumns: {
        '70/30' : '70% 28%',
      },
    },
  },
  plugins: [],
}

