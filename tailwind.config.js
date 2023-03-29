/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        serenity: "#92A8D1",
        "dark-emerald": "#173D2B89",
        navy: "#001f3f",
      },
    },
    fontFamily: {
      signature: ["Raleway"],
    },
  },
  plugins: [],
};
