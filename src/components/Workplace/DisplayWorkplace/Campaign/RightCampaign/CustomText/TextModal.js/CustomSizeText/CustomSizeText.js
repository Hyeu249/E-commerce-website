import React, { useRef } from "react";
import arrowUp from "../../../../../../../../img/arrowUp.png";
import arrowDown from "../../../../../../../../img/arrowDown.png";
import arrowLeft from "../../../../../../../../img/arrowLeft.png";
import arrowRight from "../../../../../../../../img/arrowRight.png";
import useCustomSizeText from "./useCustomSizeText";
import { useDispatch } from "react-redux";
import { mutateWidthTextHandle } from "../../../../../../../../store/global/globalSlice";

function CustomSizeText({ textCustom, className }) {
  const dispatch = useDispatch();
  const flexCenterXY = "flex items-center justify-around";

  const arrowUpRef = useRef();
  const mouseDownRef = useRef();
  const mouseLeftRef = useRef();
  const mouseRightRef = useRef();

  useCustomSizeText([arrowUpRef, textCustom, "height", "plus"]);
  useCustomSizeText([mouseDownRef, textCustom, "height", "minus"]);
  useCustomSizeText([mouseLeftRef, textCustom, "width", "plus"]);
  useCustomSizeText([mouseRightRef, textCustom, "width", "minus"]);

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
            onClick={() =>
              dispatch(
                mutateWidthTextHandle({
                  id: textCustom?.id,
                  acreage: "height",
                  operator: "plus",
                })
              )
            }
          />

          <img
            ref={mouseDownRef}
            className="w-3 filter-gray-100 active-70"
            src={arrowDown}
            alt="arrow down"
            onClick={() =>
              dispatch(
                mutateWidthTextHandle({
                  id: textCustom?.id,
                  acreage: "height",
                  operator: "minus",
                })
              )
            }
          />
        </div>
        <div className="font-bold">{textCustom?.height}</div>
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
            onClick={() =>
              dispatch(
                mutateWidthTextHandle({
                  id: textCustom?.id,
                  acreage: "width",
                  operator: "plus",
                })
              )
            }
          />
          <img
            ref={mouseRightRef}
            className="w-3 filter-gray-100 active-70"
            src={arrowRight}
            alt="arrow right"
            onClick={() =>
              dispatch(
                mutateWidthTextHandle({
                  id: textCustom?.id,
                  acreage: "width",
                  operator: "minus",
                })
              )
            }
          />
        </div>
        <div className="font-bold">{textCustom?.width}</div>
        <div className="text-gray-300">px</div>
      </div>
    </div>
  );
}

export default React.memo(CustomSizeText);
