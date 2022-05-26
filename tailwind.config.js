module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['"Poppins"', "sans-serif"],
      },
      dropShadow: {
        "3xl": "0 0px 25px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
