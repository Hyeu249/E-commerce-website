import { Fragment, useRef, useState } from "react";
// import reactDom from "react-dom";
import frontShirt from "../../../../../img/frontShirt.jpg";
import backShirt from "../../../../../img/backShirt.jpg";
import BgLeftCam from "./BgLeftCam/BgLeftCam";
import ShirtPicToDesign from "./ShirtPicToDesign";
import FrontBackShirt from "./FrontBackShirt/FrontBackShirt";
import UploadedPng from "./UploadedPng/UploadedPng";

function LeftCampain() {
  const allowRangeRef = useRef();
  const [isPrecedence, setIsPrecedence] = useState(1);
  const [isFront, setIsFront] = useState(true);
  const dadCl =
    "relative flex items-center justify-center flex-1 bg-contain bg-no-repeat";

  const textClass = "w-[50%] text-center hover:text-black";
  return (
    <Fragment>
      <div className={dadCl}>
        <BgLeftCam />
        <div
          ref={allowRangeRef}
          className="relative z-2 w-[62vh] h-[80%] bg-white shadow-xl"
        >
          <div className=" h-[10%] bg-green-300"></div>
          <UploadedPng
            allowRangeRef={allowRangeRef}
            state={isPrecedence}
            set={setIsPrecedence}
          />
          <ShirtPicToDesign p1={isFront} p2={frontShirt} p3={backShirt} />
          <FrontBackShirt p1={textClass} p2={setIsFront} />
        </div>
      </div>

      {/* {reactDom.createPortal(
        <UploadedPng state={isPrecedence} set={setIsPrecedence} />,
        document.getElementById("modal")
      )} */}
    </Fragment>
  );
}

export default LeftCampain;
