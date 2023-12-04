/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'gilroy-regular': ['GilroyRegular', 'sans-serif'],
        'gilroy-light': ['GilroyLight', 'sans-serif'],
        'gilroy-bold': ['GilroyBold', 'sans-serif'],
        'gilroy-italic': ['GilroyItalic', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

