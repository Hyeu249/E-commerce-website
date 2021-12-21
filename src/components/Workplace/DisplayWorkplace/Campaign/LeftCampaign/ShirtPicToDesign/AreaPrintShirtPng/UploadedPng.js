import { useState, useRef, useEffect } from "react";
import useResizeUploadPng from "./useResizeUploadPng";

import CornerNw from "./CornerNw";
import CornerSe from "./CornerSe";

function UploadedPng({
  id,
  allowRangeRef,
  borderDash,
  img,
  isPrecedence,
  setIsPrecedence,
}) {
  const [isMoreThan969, setIsMoreThan969] = useState(false);
  const [myClick, setMyClick] = useState([1, false]);
  const targetRef = useRef();
  const cornerSePngRef = useRef();

  const isHidden = isMoreThan969 ? "hidden" : "";
  const imgCl = `select-none pointer-events-none`;
  const flexCenterXy = "flex items-center justify-center";
  const cornerCl = `absolute w-[20px] h-[20px] rounded-full bg-white shadown-light ${flexCenterXy}`;

  const precedenceHandle = () => {
    setMyClick([isPrecedence + 1, true]);
    setIsPrecedence(state => state + 1);
  };

  useResizeUploadPng({ targetRef, cornerSePngRef, allowRangeRef });

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
    <div
      tabIndex="0"
      ref={targetRef}
      className={`${isHidden} absolute w-[200px] h-[auto]`}
      style={{ zIndex: myClick[0] }}
      onMouseDown={precedenceHandle}
      onBlur={() => setMyClick(state => [state[0], false])}
    >
      <CornerNw id={id} myClick={myClick} cl={cornerCl} />
      <label
        className={`absolute w-[100%] h-[100%] pointer ${
          myClick[1] ? borderDash : ""
        }`}
      ></label>
      <img className={`${imgCl}`} src={img} alt="png" />
      <CornerSe myClick={myClick} ref1={cornerSePngRef} cl={cornerCl} />
    </div>
  );
}

export default UploadedPng;
