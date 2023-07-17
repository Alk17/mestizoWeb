/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        baby: ['Oooh Baby', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
        zilla: ['Zilla Slab', 'serif']
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}