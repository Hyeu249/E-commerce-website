import React, { useRef, useState } from "react";
import arrowUp from "../../../../../../../../img/arrowUp.png";
import arrowDown from "../../../../../../../../img/arrowDown.png";
import arrowLeft from "../../../../../../../../img/arrowLeft.png";
import arrowRight from "../../../../../../../../img/arrowRight.png";
import useCustomSizeText from "./useCustomSizeText";

function CustomSizeText({ className }) {
  const flexCenterXY = "flex items-center justify-around";
  const [verticalFrame, setVerticalFrame] = useState([20, false]);
  const [horizontalFrame, setHorizontalFrame] = useState([160, false]);

  const arrowUpRef = useRef();
  const mouseDownRef = useRef();
  const mouseLeftRef = useRef();
  const mouseRightRef = useRef();

  useCustomSizeText([arrowUpRef, setVerticalFrame, "true"]);
  useCustomSizeText([mouseDownRef, setVerticalFrame, "false"]);
  useCustomSizeText([mouseLeftRef, setHorizontalFrame, "true"]);
  useCustomSizeText([mouseRightRef, setHorizontalFrame, "false"]);

  return (
    <div className={`flex ${className}`}>
      {/* left */}
      <div className={`w-[50%] bd-r-gray ${flexCenterXY}`}>
        <div>
          <img
            ref={arrowUpRef}
            className="w-3 filter-gray-100 active-70"
            src={arrowUp}
            alt="arrow up"
            onClick={() => setVerticalFrame(state => [state[0] + 1, true])}
          />

          <img
            ref={mouseDownRef}
            className="w-3 filter-gray-100 active-70"
            src={arrowDown}
            alt="arrow down"
            onClick={() => setVerticalFrame(state => [state[0] - 1, true])}
          />
        </div>
        <div className="font-bold">
          {verticalFrame[0] ? verticalFrame[0] : 20}
        </div>
        <div className="text-gray-300">px</div>
      </div>
      {/* right */}
      <div className={`flex-1 ${flexCenterXY}`}>
        <div className="flex">
          <img
            ref={mouseLeftRef}
            className="w-3 filter-gray-100 active-70"
            src={arrowLeft}
            alt="arrow left"
            onClick={() => setHorizontalFrame(state => [state[0] + 1, true])}
          />
          <img
            ref={mouseRightRef}
            className="w-3 filter-gray-100 active-70"
            src={arrowRight}
            alt="arrow right"
            onClick={() => setHorizontalFrame(state => [state[0] - 1, true])}
          />
        </div>
        <div className="font-bold">
          {" "}
          {horizontalFrame[0] ? horizontalFrame[0] : 20}
        </div>
        <div className="text-gray-300">px</div>
      </div>
    </div>
  );
}

export default React.memo(CustomSizeText);
