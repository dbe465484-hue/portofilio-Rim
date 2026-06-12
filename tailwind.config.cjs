/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0a0a0f",
        secondary: "#aaa6c3",
        tertiary: "#1a1a2e",
        "black-100": "#16161d",
        "black-200": "#0d0d12",
        "white-100": "#f3f3f3",
        "pink-accent": "#f472b6",
        "pink-soft": "#fce7f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px rgba(244, 114, 182, 0.25)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/hero.JPG')",
      },
    },
  },
  plugins: [],
};
