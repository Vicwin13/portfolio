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
      backgroundImage: {
        curve1: "url(public/images/curve_right.png)",
        curve2: "url(public/images/curve_left.png)",
        arrow_bottom: "url(public/images/arrow-bottom.png)",
      },
    },
  },
  plugins: [],
};
