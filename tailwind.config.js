/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      blue: "#1fb6ff",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      dark:"#9C9C9C"
    },
    backgroundColor: {
      primaryDark: "#080808",
      secondaryDark: "#1B1B1B",
    },
    fontFamily: {
      sans: ['IBM Plex Mono', 'monospace'],
      railway: ['Raleway', 'sans-serif'],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "6rem",
      },
    },
  },
  plugins: [],
};
