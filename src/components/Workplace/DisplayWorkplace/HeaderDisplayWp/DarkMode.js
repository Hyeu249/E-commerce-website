import React, { useEffect, useState } from "react";
import switchOn from "../../../../img/switch-on.png";
import switchOff from "../../../../img/switch-off.png";

function DarkMode() {
  const dark = JSON.parse(localStorage.getItem("dark"));
  const [isDarkMode, setIsDarkMode] = useState(
    dark === undefined ? false : dark
  );
  const html = document.getElementsByTagName("html")[0];

  useEffect(() => {
    if (isDarkMode === true) html.classList.add("dark");
  }, [isDarkMode, html.classList]);

  return (
    <div className="flex items-center justify-center w-[80px] border-r-1px">
      <img
        className="absolute w-[40px] grayscale pointer"
        src={isDarkMode ? switchOn : switchOff}
        onClick={() => {
          setIsDarkMode((state) => {
            localStorage.setItem("dark", JSON.stringify(!state));
            if (!state) html.classList.add("dark");
            if (state) html.classList.remove("dark");
            return !state;
          });
        }}
        alt="darkmode"
      />
    </div>
  );
}

export default React.memo(DarkMode);
