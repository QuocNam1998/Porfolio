/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        green: "0 0 20px rgb(74, 222, 128)",
        purple: "0 0 20px rgb(135 32 158)",
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
