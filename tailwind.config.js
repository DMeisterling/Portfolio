/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        serenity: "#92A8D1",
        "dark-emerald": "#2B3A45D3",
        navy: "#001f3f",
      },
    },
    fontFamily: {
      signature: ["Raleway"],
    },
  },
  plugins: [],
};
