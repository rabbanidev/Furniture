module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        layout: "72px 1fr",
      },
      gridTemplateColumns: {
        layout: "2fr 9fr",
      },
      colors: {
        primary: "#273238",
        secondary: "#EAEDF7",
        success: "#19b159",
        danger: "#f16d75",
        info: "#01b8ff",
        warning: "#ff9b21",
        light: "#f4f4fd",
        linkcolor: "rgba(255, 255, 255, 0.4)",
        dark: "#25233C",
      },
      fontFamily: {
        body: ["Montserrat"],
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ["hover", "focus"],
      display: ["group-hover"],
      opacity: ["group-hover"],
      translate: ["group-hover"],
      transform: ["group-hover"],
      width: ["group-hover", "hover"],
      height: ["group-hover", "hover"],
      padding: ["group-hover", "hover"],
      animation: ["group-hover", "hover"],
      scale: ["group-hover", "hover"],
      backgroundColor: ["checked", "odd", "even"],
      borderColor: ["checked"],
    },
  },
  plugins: [],
};
