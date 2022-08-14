/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "320px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      colors: {
        "primary-600": "#EE8B8B",
        "primary-500": "#423A3A",
        "primary-400": "#CE9898",
        "primary-300": "#EE8B8B",
        "primary-200": "#FFFFFF",
        "primary-100": "#DBDBDB",
        "secondary-300": "#F8BFBF",
        "secondary-200": "#FFF4F4",
        success: "#004D44",
        error: "#AC1A2F",
        caution: "#CF7600",
      },
      fontFamily: {
        primary: ["Josefin Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
