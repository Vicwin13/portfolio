/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {
      colors: {
        main: "#ADEFD1",
        darkBlue: "#00203F",
        accent: "#EFADCB",
      },
      fontFamily: {
        Electrolize: ["Electrolize"],
      },
      dropShadow: {
        shadow1: "3px 5px 8px rgb(173,239,209, 1)",
      },
      keyframes: {
        wiggle: {
          "0%": { transform: "translate(0%)" },
          "50%": { transform: "translate(50%)" },
          "100%": { transform: "translate(0%)" },
        },
      },
      animation: {
        wiggle: "wiggle 5s ease-in-out infinite",
      },
      backgroundImage: {
        curve1: "url('./public/images/curve_left.png')",
      },
    },
  },
  plugins: [],
};
