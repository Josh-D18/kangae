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
        "primary-600": "#AD1FEA",
        "primary-500": "#4661E6",
        "primary-400": "#4661E6",
        "primary-300": "#F2F4FF",
        "primary-200": "#FFFFFF",
        "primary-100": "#F2F4FF",
        "secondary-300": "#3A4374",
        "secondary-200": "#647196",
        "secondary-100": "#647196",
        "tertiary-500": "#F49F85",
        "tertiary-400": "#62BCFA",
        "tertiary-300": "#F2F2F2",
        "tertiary-200": "#373F68",
        "tertiary-100": "#F2F4FE",
        success: "#004D44",
        error: "#AC1A2F",
        caution: "#CF7600",
      },
      fontFamily: {
        primary: ["Jost", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
