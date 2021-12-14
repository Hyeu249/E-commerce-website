import React, { useEffect, useRef, useState } from "react";
import arrowUp from "../../../../../../../img/arrowUp.png";
import arrowDown from "../../../../../../../img/arrowDown.png";
import arrowLeft from "../../../../../../../img/arrowLeft.png";
import arrowRight from "../../../../../../../img/arrowRight.png";

function CustomSizeText({ className }) {
  const inputSiseClass = "flex items-center justify-around";
  const [yFrame, setYFrame] = useState(0);

  const arrowUpref = useRef();
  // const mouseDownref = useRef();
  // const mouseLeftref = useRef();
  // const mouseRightref = useRef();

  useEffect(() => {
    const mouseUpHandle = interval => {
      clearInterval(interval);
    };
    const arrowUp = arrowUpref.current;

    const mouseDownHandle = () => {
      const interval = setInterval(() => {
        setYFrame(state => state + 1);
      }, 1000);

      arrowUp.addEventListener("mouseup", mouseUpHandle.bind(null, interval));
    };

    arrowUp.addEventListener("mousedown", mouseDownHandle);

    return () => {
      arrowUp.removeEventListener("mousedown", mouseDownHandle);
      arrowUp.removeEventListener("mouseup", mouseUpHandle);
    };
  }, []);

  return (
    <div className={`flex ${className}`}>
      {/* left */}
      <div className={`w-[50%] bd-r-gray ${inputSiseClass}`}>
        <div>
          <img
            ref={arrowUpref}
            className="w-3 filter-gray-100 active-70"
            src={arrowUp}
            alt="arrow up"
            onKeyPress={() => console.log("hoạt động")}
          />
          <img
            className="w-3 filter-gray-100 active-70"
            src={arrowDown}
            alt="arrow down"
          />
        </div>
        <div className="font-bold">{yFrame ? yFrame : 20}</div>
        <div className="text-gray-300">px</div>
      </div>
      {/* right */}
      <div className={`flex-1 ${inputSiseClass}`}>
        <div className="flex">
          <img
            className="w-3 filter-gray-100 active-70"
            src={arrowLeft}
            alt="arrow left"
          />
          <img
            className="w-3 filter-gray-100 active-70"
            src={arrowRight}
            alt="arrow right"
          />
        </div>
        <div className="font-bold">160</div>
        <div className="text-gray-300">px</div>
      </div>
    </div>
  );
}

export default React.memo(CustomSizeText);
