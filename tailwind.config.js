/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    // "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        SenMedium: ["SenMedium", "serif"],
        SenRegular: ["SenRegular", "serif"],
        SenSemiBold: ["SenSemiBold", "serif"],
      },
      colors: {
        primary: {
          100: "#FFE1CE",
          200: "#FFEBE4",
          300: "#FF7622",
          400: "#ED7A63",
          500: "#FF7622",
        },
      },
    },
  },
  plugins: [],
};
