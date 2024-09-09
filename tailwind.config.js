/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: 'media',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      backgroundImage:() => ({
        'dark-stars': "url('/assets/background_stars.png')",
        'light-stars': "url('/assets/light_background_stars.png')",
      }),
      colors: {
        'medgicalDarkGrey': '#1e1e21',
        'medgicalBlue': '#044477',
        'medgicalDarkBlue': '#093456',
        'medgicalYellow': '#EFE9AE',
        'medgicalGreen': '#CDAEC0',
        'medgicalRed': '#FF6B6B',
        'medgicalBlack': '#000012',
        'medgicalDarkGrey2': '#1d1c20',
        'medgicalDarkGreyCard': '#1d1c20',
      }
    },
  },
  plugins: [],
}

