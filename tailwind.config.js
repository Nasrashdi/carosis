/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Naskh Arabic"', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // for RTL, handle CSS reset manually
  }
}