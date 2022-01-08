module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        layout: "100px 1fr",
      },
      gridTemplateColumns: {
        layout: "2fr 9fr",
      },
      height: {
        100: "450px",
      },
      width: {
        navmenu: "36rem",
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
        aliceblue: "#F9FAFB",
        backdrop: "rgba(0,0,0,.5)",
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
      width: ["group-hover", "hover", "focus"],
      height: ["group-hover", "hover", "focus"],
      padding: ["group-hover", "hover", "focus"],
      animation: ["group-hover", "hover", "focus"],
      scale: ["group-hover", "hover", "focus"],
      backgroundColor: ["checked", "odd", "even"],
      borderColor: ["checked"],
    },
  },
  plugins: [],
};
