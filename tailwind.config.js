/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,liquid,js}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },

    extend: {
      maxWidth: {
        app: "1440px",
      },

      fontSize: {
        tiny: "14px",
        base: "16px",
      },
    },
  },
  plugins: [],
};
