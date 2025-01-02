/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      keyframes: {
        createMenu: {
          "0%": {
            borderWidth: "0vw",
            borderColor: "#1b1a2ea9",
            transform: "translate(-50%, -50%) scale(0)",
          },
          "100%": {
            borderWidth: "200vw",
            borderColor: "#2d343f",
            transform: "translate(-50%, -50%) scale(1)",
          },
        },
        closeMenu: {
          "0%": {
            borderWidth: "200vw",
            borderColor: "##2d343f",
            transform: "translate(-50%, -50%) scale(1)",
          },
          "50%": {
            borderWidth: "50vw",
            borderColor: "#2d343f",
            transform: "translate(-50%, -50%) scale(0.5)",
          },
          "100%": {
            borderWidth: "0vw",
            borderColor: "#2d343f",
            transform: "translate(-50%, -50%) scale(0)",
          },
        },
      },
      animation: {
        createMenu: "createMenu 0.3s ease-in-out forwards",
        closeMenu: "closeMenu 0.3s ease-in-out forwards",
      },
      dropShadow: {
        green: "0 0 20px rgb(74, 222, 128)",
        "green-sm": "0 0 5px rgb(74, 222, 128)",
        purple: "0 0 20px rgb(135 32 158)",
        "purple-sm": "0 0 20px rgb(135 32 158)",
      },
      fontFamily: {
        sans: ["Spacegrotesk", "sans-serif"],
      },
    },
    container: {
      center: true,
      screens: {
        sm: "576px",
        md: "768px",
        lg: "922px",
        xl: "1200px",
        "2xl": "1400px",
      },
    },

    plugins: [],
  },
};
