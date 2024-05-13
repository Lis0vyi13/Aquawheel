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
    },
    screens: {
      xxs: "375px",
      xs: "480px",
      xsSm: "590px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      lgXl: "1200px",
      xl: "1390px",
    },
    extend: {
      backgroundImage: {
        start: "url('/img/start.jpg')",
        brix: "url('/img/brix.jpg')",
      },
    },
  },
  plugins: [],
};

