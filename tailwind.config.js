/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./public/index.html"],
  theme: {
    extend: {
      colors: {
        main: "#ADEFD1",
        darkBlue: "#00203F",
        accent: "#EFADCB",
        color: "rgb(205,205,205)",
      },
      fontFamily: {
        Electrolize: ["Electrolize"],
      },
      dropShadow: {
        shadow1: "3px 5px 8px rgb(173,239,209, 1)",
      },
      keyframes: {
        wiggle: {
          "0%": { transform: "translate(-25%)" },
          "50%": { transform: "translate(25%)" },
          "100%": { transform: "translate(-25%)" },
        },
        wiggle1: {
          "0%": { transform: "translate(-25%)" },
          "50%": { transform: "translate(25%)" },
          "100%": { transform: "translate(-25%)" },
        },
        wiggle2: {
          "0%": { transform: "translate(-25%)" },
          "50%": { transform: "translate(25%)" },
          "100%": { transform: "translate(-25%)" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-30deg)" },
          "75%": { transform: "rotate( 30deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 7s ease-in-out infinite",
        wiggle1: " wiggle1 9s ease-in-out infinite",
        wiggle2: " wiggle2 8s ease-in-out infinite",
        rotate: "rotate 5s ease-in-out infinite",
      },
      backgroundImage: {
        curve1: "url('./public/images/curve_left.png')",
      },
      dropShadow: {
        "3xl": "0 5px 3px rgba(0,0,0,.5)",
        "4xl": ["0 3px 4px rgba(0,0,0,.5)", "0 -1px 4px rgba(0,0,0, .3)"],
      },
      screens: {
        break2: "850px",
        break1: "950px",
      },
    },
  },
  plugins: [require("@kamona/tailwindcss-perspective")],
};
