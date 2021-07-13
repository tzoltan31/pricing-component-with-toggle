module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      montserrat: "Montserrat",
    },
    extend: {
      backgroundPosition: {
        righttop2: "right -12rem top",
      },
      backgroundImage: (theme) => ({
        "bg-top": "url('./images/bg-top.svg')",
        "bg-bottom": "url('./images/bg-bottom.svg')",
      }),
      colors: {
        primary: {
          light: "#A3A8F0",
          dark: "#696FDD",
        },
        grayishblue: {
          vlight: "#F6F6FE",
          light: "#B3B5C6",
          neutral: "#6D708D",
          dark: "#494C5F",
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      textColor: ["active"],
      backgroundImage: ["active"],
    },
  },
  plugins: [],
};
