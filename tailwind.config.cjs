export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "very-dark-gray": "hsl(0, 0%, 17%)",
        "dark-gray": "hsl(0, 0%, 59%)",
      },
      fontFamily: {
        Rubik: ["Rubik", "sans-serif"],
      },
    },
    screens: {
      sm: "380px",
      md: "770px",
      lg: "1200px",
    },
  },
  plugins: [],
};
