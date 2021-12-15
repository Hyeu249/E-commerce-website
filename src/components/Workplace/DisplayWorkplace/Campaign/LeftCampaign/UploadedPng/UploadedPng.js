import React, { useRef, useState, useEffect } from "react";
import useResizeUploadPng from "./useResizeUploadPng";
import trashImg from "../../../../../../img/xDelete.png";
import seResizeImg from "../../../../../../img/seResize.png";
import downloadedPng from "../../../../../../img/pngwing.com.png";

function UploadedPng({
  state: isPrecedence,
  set: setIsPrecedence,
  allowRangeRef,
}) {
  const [isMoreThan969, setIsMoreThan969] = useState(false);
  const [myClick, setMyClick] = useState(0);
  const pngRef = useRef();
  const cornerSePngRef = useRef();
  const isHidden = isMoreThan969 ? "hidden" : "";
  const flexCenterXy = "flex items-center justify-center";

  useResizeUploadPng({ pngRef, cornerSePngRef, allowRangeRef });

  // useEffect(() => {
  //   if (window.innerHeight < 969) setIsMoreThan969(true);

  //   const resizeHandle = () => {
  //     if (window.innerHeight < 969) setIsMoreThan969(true);
  //     if (window.innerHeight > 968) setIsMoreThan969(false);
  //   };
  //   window.addEventListener("resize", resizeHandle);

  //   return () => window.removeEventListener("resize", resizeHandle);
  // }, []);
  return (
    <div className="top w-[100%] h-[100%] flex items-center justify-center">
      <div
        ref={pngRef}
        className={`${isHidden} absolute w-[200px] h-[235px] bg-transparent border-1 border-dashed !border-white`}
        onMouseDown={() => {
          setMyClick(isPrecedence + 1);
          setIsPrecedence(state => state + 1);
        }}
        style={{ zIndex: myClick || isPrecedence }}
      >
        <div
          className={`absolute w-[20px] h-[20px] rounded-full bg-white top-[-7px] left-[-7px] shadown-light ${flexCenterXy}`}
        >
          <img
            className={`w-[15px] h-[15px] active-70`}
            src={trashImg}
            alt="trash"
          />
        </div>
        <img
          className="select-none pointer-events-none"
          src={downloadedPng}
          alt="png"
        />
        <div
          ref={cornerSePngRef}
          className={`absolute w-[20px] h-[20px] rounded-full bg-white bottom-[-6px] right-[-6px] shadown-light ${flexCenterXy}`}
        >
          <img
            className={`w-[18px] h-[18px] active-70 select-none pointer-events-none`}
            src={seResizeImg}
            alt="se resize"
          />
        </div>
      </div>
    </div>
  );
}

export default React.memo(UploadedPng);
