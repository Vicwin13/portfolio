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
        scaleIt: {
          0: { transform: "scaleX(0%)" },
          100: { transform: "scaleX(100%)" },
        },
        flip: {
          from: {
            transform: "rotateX(-75deg)",
            opacity: ".1",
          },
          to: { transform: "rotateX(0deg)", opacity: "1" },
        },
        slideRight: {
          from: {
            transform: "translateX(-30%)",
            opacity: "0",
          },
          to: {
            transform: "translateX(0%)",
            opacity: "1",
          },
        },
        slideLeft: {
          from: {
            transform: "translateX(30%)",
            opacity: "0",
          },
          to: {
            transform: "translateX(0%)",
            opacity: "1",
          },
        },
        dropIn: {
          from: {
            transform: "translateY(-60%)",
            opacity: "0",
          },
          to: {
            transform: "translateY(0%)",
            opacity: "1",
          },
        },
        moveUp: {
          from: {
            transform: "translateY(60%)",
            opacity: "0",
          },
          to: {
            transform: "translateY(0%)",
            opacity: "1",
          },
        },
        flipSide: {
          from: {
            transform: "rotateY(80deg)",
            opacity: "0",
          },
          to: {
            transform: "rotateY(0deg)",
            opacity: "1",
          },
        },
      },

      animation: {
        wiggle: "wiggle 7s ease-in-out infinite",
        wiggle1: " wiggle1 9s ease-in-out infinite",
        wiggle2: " wiggle2 8s ease-in-out infinite",
        rotate: "rotate 5s ease-in-out infinite",
        scaleIt: "scaleIt 10s ease-in-out ",
        flip: "flip 1s ease-in-out forwards",
        slideLeft: "slideLeft 1s ease-in-out forwards",
        slideRight: "slideRight 1s ease-in-out forwards",
        dropIn: "dropIn 1s ease-in-out forwards",
        flipSide: "flipSide 2s ease-in-out forwards",
        moveUp: "moveUp 3s ease-in-out 3s forwards",
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
