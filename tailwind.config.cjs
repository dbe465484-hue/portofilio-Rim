/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#f3efe4",
        secondary: "#292524",
        tertiary: "#fffdf8",
        "black-100": "#efe9de",
        "black-200": "#e5dfd2",
        "white-100": "#141210",
        ink: "#141210",
        accent: "#e11d48",
        "accent-soft": "rgba(225, 29, 72, 0.1)",
        modern: "#e11d48",
        muted: "#292524",
        line: "#d9d2c5",
      },
      fontFamily: {
        sans: ['"Source Serif 4"', "Georgia", "Times New Roman", "serif"],
        body: ['"Source Serif 4"', "Georgia", "Times New Roman", "serif"],
        hero: ['"Inknut Antiqua"', "Georgia", "serif"],
        section: ['"Instrument Serif"', "Georgia", "serif"],
        subtitle: ['"Domine"', "Georgia", "serif"],
        /* alias kept for older class names → title font */
        display: ['"Instrument Serif"', "Georgia", "serif"],
      },
      boxShadow: {
        card: "none",
        soft: "none",
        lift: "none",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "none",
      },
    },
  },
  plugins: [],
};
