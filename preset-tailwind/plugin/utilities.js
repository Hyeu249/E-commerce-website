const plugin = require("tailwindcss/plugin");

module.exports = {
  plugins: [
    plugin(({ addUtilities }) => {
      const borderBottom = {
        //border
        ".border-1": { borderWidth: "1px", borderColor: "transparent" },
        // ".border-light": { border: "1px solid #e4e4e4" },
        // ".border-2-light": { border: "2px solid #e4e4e4" },
        ".bd-light": {
          border: "1px solid #e7e7e7",
        },
        ".bd-2-light": {
          border: "2px solid #e7e7e7",
        },
        ".bd-dashed-2": {
          border: "2px dashed black",
        },
        ".bd-warning": {
          border: "1px solid #ee2a28",
        },
        // ".bd-t-1": {
        //   borderTopWidth: "1px",
        // },
        ".bd-t-light": {
          borderTop: "1px solid #e4e4e4",
        },
        ".bd-t-light\\+": {
          borderTop: "1px solid #c7c7c7",
        },
        ".bd-r-gray": {
          borderRight: "1px solid #e4e4e4",
        },
        ".bd-r-light": {
          borderRight: "1px solid #e4e4e4",
        },
        ".bd-r-light\\+": {
          borderRight: "1px solid #c7c7c7",
        },
        // ".bd-b-1-gray": {
        //   borderBottom: "1px solid #e4e4e4",
        // },
        ".bd-b-light\\+": {
          borderBottom: "1px solid #c7c7c7",
        },
        ".bd-b-light\\+\\+": {
          borderBottom: "1px solid #e3e3e3",
        },
        ".bd-l-light\\+": {
          borderLeft: "1px solid #c7c7c7",
        },
        ".bd-r-none": {
          borderRight: "none",
        },
        ".bd-none": {
          border: "none",
        },
        //shadown
        ".bd-b-light": {
          // boxShadow: "0 -1px 0 rgb(255,255,255,0.3) inset",
          borderBottom: "1px solid #394f62",
        },
        ".shadown-t": {
          boxShadow: "0 3px 15px #d3d3d3",
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
        //filter
        ".filter-gray": {
          filter:
            "brightness(0.9) invert(.8) sepia(.1) hue-rotate(100deg) saturate(200%)",
        },
        ".filter-gray-i4": {
          filter:
            "brightness(0.9) invert(.4) sepia(.1) hue-rotate(100deg) saturate(200%)",
        },
        ".filter-none": { filter: "none" },
      };
      addUtilities(borderBottom);
    }),
  ],
};
