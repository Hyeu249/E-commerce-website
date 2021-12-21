import React, { Fragment, useState } from "react";
import frontShirt from "../../../../../img/frontShirt.jpg";
import backShirt from "../../../../../img/backShirt.jpg";
import BgLeftCam from "./BgLeftCam/BgLeftCam";
import ShirtPicToDesign from "./ShirtPicToDesign/ShirtPicToDesign";
import FrontBackShirt from "./FrontBackShirt/FrontBackShirt";

function LeftCampain() {
  const [isFront, setIsFront] = useState(true);
  const dadCl =
    "relative flex items-center justify-center flex-1 bg-contain bg-no-repeat";

  const textClass = "w-[50%] text-center hover:text-black";
  return (
    <Fragment>
      {/* <div className="w-1080:hidden block flex-1"></div> */}
      <div className={`${dadCl}`}>
        <BgLeftCam />
        <div className="w-1080:block hidden relative z-2 w-[62vh] h-[80%] bg-white shadow-xl">
          {/* <div className=" h-[10%] bg-green-300"></div> */}
          <ShirtPicToDesign p1={isFront} p2={frontShirt} p3={backShirt} />
          <FrontBackShirt p1={textClass} p2={setIsFront} />
        </div>
      </div>
    </Fragment>
  );
}

export default React.memo(LeftCampain);
