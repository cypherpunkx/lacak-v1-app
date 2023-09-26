/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        climateCrisis: ["Climate Crisis", "cursive"],
      },
      backgroundImage: {
        "hero-pattern": "url(./assets/hero.png)",
      },
    },
  },
  plugins: [],
};
