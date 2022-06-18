/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    fontFamily: {
      Maven: ["Maven Pro", "sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        lightgray: "#eee",
        darkgray: "#5b5b5b",
        blackbg: "#474559",
        heading: "#353535",
        innerheading: "#484848",
        pcolor: "#5b5b5b",
        dark: "#0c0c0d",
      },
      gridTemplateColumns: {
        main: "55% 35%",
        expert: "43% 43%",
        contact: "45% 45%",
      },
      width: {
        3: "3px",
      },
      fontSize: {
        38: "38px",
        16: "16px",
      },
    },
  },
};
