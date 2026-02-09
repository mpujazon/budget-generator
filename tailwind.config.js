/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: "class",
    extend: {
      colors: {
        primary: "#3B82F6",
        secondary: "#06B6D4",
        "background-light": "#F8FAFC",
        "background-dark": "#0F172A",
        "text-light": "#1E293B",
        "text-dark": "#F8FAFC",
        "card-dark": "#1E293B",
        "card-light": "#FFFFFF",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
      },
    }
  }
