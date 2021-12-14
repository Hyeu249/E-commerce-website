const plugin = require("tailwindcss/plugin");

module.exports = {
  plugins: [
    plugin(({ addComponents }) => {
      const button = {
        // button
        ".btn": {
          color: "rgba(107, 114, 128)", //text-gray-500
          fontWeight: "bold", // font-bold
          padding: "0.5em 1rem", // py-2 px4
          border: "1px solid black", // border-[1px] border-black
          borderRadius: "0.375rem", // rounded-md
          backgroundColor: "#fff", //bg-white
          display: "inline-block",
        },

        ".active": {
          cursor: "pointer",
          userSelect: "none",
          "&:active": {
            transform: "scale(0.95)",
          },
        },
        ".active-70": {
          cursor: "pointer",
          userSelect: "none",
          "&:active": {
            transform: "scale(0.70)",
          },
        },
        // pointer
        ".pointer": {
          cursor: "pointer",
          userSelect: "none",
        },
        ".pointer-resizeX": {
          cursor: "e-resize",
          userSelect: "none",
        },
        ".pointer-resizeY": {
          cursor: "n-resize",
          userSelect: "none",
        },
        // position
        ".abs-r-max": {
          position: "absolute",
          top: 0,
          right: "100%",
        },
        ".top": {
          position: "absolute",
          top: 0,
        },
        ".left-bot-0": {
          left: 0,
          bottom: 0,
        },
        // translate
        ".translate-top-center": {
          top: "50%",
          transform: "translateY(-50%)",
        },
        //transition
        ".off-screen": {
          transform: "translateX(100%)",
          transition: "transform 0.2s",
        },
        ".on-screen": {
          transform: "none",
          transition: "transform 0.2s",
        },
        // scrollBar
        ".scrollBar": {
          overflow: "auto",
          "&::-webkit-scrollbar": {
            width: "10px",
          },
          "&::-webkit-scrollbar-track": {
            borderRadius: "5px",
            boxShadow: "inset 0 0 10px rgba(0,0,0,0.25)",
          },
          "&::-webkit-scrollbar-thumb": {
            borderRadius: "5px",
            backgroundColor: "#adadad",
          },
        },

        //end
      };

      addComponents(button);

      // const active = {
      //   ".active": {
      //     cursor: "pointer",
      //     userSelect: "none",
      //     "&:active": {
      //       transform: "scale(0.95)",
      //     },
      //   },
      // };

      // addComponents(active);

      // end
    }),
  ],
};
