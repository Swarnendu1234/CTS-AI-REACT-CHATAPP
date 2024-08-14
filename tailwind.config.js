/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gainsboro: {
          "100": "#d9d9d9",
          "200": "rgba(217, 217, 217, 0)",
        },
        darkslategray: {
          "100": "#444",
          "200": "#393e46",
          "300": "rgba(51, 51, 51, 0.07)",
        },
        black: "#000",
        gray: {
          "100": "rgba(255, 255, 255, 0)",
          "200": "rgba(0, 0, 0, 0.07)",
        },
        silver: "rgba(191, 191, 191, 0)",
        darkorange: "#f58612",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "81xl": "100px",
      },
    },
    fontSize: {
      xl: "20px",
      mini: "15px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
