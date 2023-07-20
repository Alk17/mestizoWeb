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
      },
      backgroundImage: {
        'blob1': "url('/src/assets/images/blob1.svg')",
        'coffeeGrains': "url('./assets/images/CoffeeGrains.jpg')"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}