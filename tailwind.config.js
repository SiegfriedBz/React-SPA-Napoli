/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace"
    },
    height: {
      screen: "100dvh"
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#facc15", // yellow-400
          dark: "#eab308", // yellow-500
          light: "#fde047", // yellow-300
          "x-light": "#fef9c3" // yellow-100
        },
        warning: {
          DEFAULT: "#fca5a5", // red-300
          light: "#fecaca", // red-200
          dark: "#f87171" // red-400
        }
      },
      screens: {
        xs: "480px"
      },
      gridTemplateColumns: {
        gridMenuCols: "repeat(auto-fit, minmax(400px, 1fr))"
      },
      // "Shape" component for fluid nav
      boxShadow: {
        "shape-top": "5px 5px 0 5px #f5f5f4", // stone-100
        "shape-bottom": "5px -5px 0 5px #f5f5f4"
      },
      borderRadius: {
        "shape-top": "0 0 100vw 0",
        "shape-bottom": "0 100vw 0 0"
      }
    }
  },
  plugins: []
}
