const plugin = require("tailwindcss/plugin");

module.exports = {
  plugins: [
    plugin(({ addUtilities }) => {
      const borderBottom = {
        //border
        ".border-1": { borderWidth: "1px", borderColor: "transparent" },
        ".bd-t-1": {
          borderTopWidth: "1px",
        },
        ".bd-light": {
          border: "1px solid #e7e7e7",
        },
        ".bd-t-light": {
          borderTop: "1px solid #e4e4e4",
        },
        ".bd-b-1-gray": {
          borderBottom: "1px solid #e4e4e4",
        },
        ".bd-b-light": {
          boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset",
        },
        ".bd-none": {
          border: "none",
        },
        ".bd-warning": {
          border: "1px solid #ee2a28",
        },
        //outline
        ".outline-none": {
          outline: "none",
        },
        //transition
        ".transition-custom": {
          transition: "width 0.1s linear",
        },
        //background
        ".b": {
          backgroundColor: "rgba(17, 24, 39, var(--tw-bg-opacity))",
        },
        ".b-light": {
          backgroundColor: "#f1f1f1",
        },
        ".bg-none": {
          backgroundColor: "transparent",
        },
        //display
        ".live": {
          display: "inline-block",
        },
        //text
        ".text-sm\\+": {
          fontSize: "0.9375rem",
        },
        ".text-light": { color: "#65676b" },
        ".leading-3\\+": { lineHeight: "0.9" },
        //color
        ".t": {
          color: "#fff",
        },
      };
      addUtilities(borderBottom);
    }),
  ],
};
