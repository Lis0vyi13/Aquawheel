/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      main: "#43ACDF",
      mainHover: "#0081C0",
      bgColor: "#fcfcfc",
      dark: "#313131",
      white: "#fff",
      whiteHover: "rgba(220, 220, 220, 0.8)",
      transparent: "transparent",
    },
    screens: {
      xxs: "370px",
      xs: "480px",
      xsSm: "590px",
      sm: "640px",
      md: "768px",
      mdLg: "896px",
      lg: "1024px",
      lgXl: "1260px",
      xl: "1390px",
    },
    extend: {
      backgroundImage: {
        start: "url('/img/start.jpg')",
        brix: "url('/img/brix.jpg')",
        buttonGradient:
          "radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(233, 233, 233, 1) 100%);",
        grayGradient:
          "radial-gradient(113.33% 114.68% at 78.43% 91.02%, rgb(255, 255, 255) 0%, rgb(233, 233, 233) 100%);",
        blueGradient: "linear-gradient(232deg, #88d2f6 0%, #43acdf 100%);",
        reversedBlueGradient:
          "linear-gradient(129deg, #88d2f6 0%, #43acdf 100%);",
        darkBlueGradient:
          "radial-gradient(91.7% 107.54% at 39.61% 56.25%, rgb(85, 204, 237) 0%, rgb(0, 61, 165) 100%);",
        orangeGradient:
          "radial-gradient(91.7% 107.54% at 39.61% 56.25%, rgb(255, 178, 84) 0%, rgb(255, 74, 0) 82.65896439552307%);",
        activeBrandStart:
          "radial-gradient(91.7% 107.54% at 39.61% 56.25%, rgb(85, 204, 237) 0%, rgb(0, 61, 165) 100%);",
        activeBrandBrix:
          "radial-gradient(91.7% 107.54% at 39.61% 56.25%, rgb(255, 178, 84) 0%, rgb(255, 74, 0) 82.65896439552307%);",
      },
      keyframes: {
        slideIn: {
          "0%": { opacity: 0, transform: "translateX(100%)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        slideOut: {
          "0%": { opacity: 1, transform: "translateX(0)" },
          "100%": { opacity: 0, transform: "translateX(100%)" },
        },
      },
      animation: {
        slideIn: "slideIn 0.5s forwards",
        slideOut: "slideOut 0.5s forwards",
      },
    },
  },
  plugins: [],
};

