const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "w-185": "185px",
        "w-850": "850px",
      },
      fontFamily: {
        sebino: "sebino",
      },
    },
  },
  variants: {},
  plugins: [
    plugin(({ addBase }) => {
      addBase({
        input: { outline: "none" },
      });
    }),
  ],
  presets: [
    require("./preset-tailwind/plugin/components"),
    require("./preset-tailwind/plugin/utilities"),
  ],
};
