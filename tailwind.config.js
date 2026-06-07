/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        luxury: {
          black: "#111111",
          charcoal: "#1C1C1C",
          gold: "#D4AF37",
          lightGold: "#F3E5AB",
          cream: "#FAFAFA",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
