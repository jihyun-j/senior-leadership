/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#000000",
      white: "#ffffff",
      "dark-slate": "#666666",
      "light-slate": "#cccccc",
      clay: "#d74e26",
      plant: "#2bc275",
      iris: "#5f60ff",
      gold: "#ffc21a",
    },
    fontSize: {
      h1: "3.815rem",
      h2: "3.052rem",
      h3: "2.441rem",
      h4: "1.953rem",
      h5: "1.563rem",
      h6: "1.25rem",
      p: "1rem",
      small: "0.8rem",
    },
    extend: {},
  },
  plugins: [],
};
