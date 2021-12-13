import { useState } from "react";
import frontShirt from "../../../../../img/frontShirt.jpg";
import backShirt from "../../../../../img/backShirt.jpg";
import PickSideShirt from "./PickSideShirt";
import BgLeftCam from "./BgLeftCam/BgLeftCam";

function LeftCampain() {
  const [isFront, setIsFront] = useState(true);

  const textClass = "w-[50%] text-center hover:text-black";
  return (
    <div className="relative flex items-center justify-center flex-1 bg-contain bg-no-repeat">
      <BgLeftCam />
      <div className="relative z-2 w-[62vh] h-[80%] bg-white shadow-xl">
        <div className=" h-[10%] bg-green-300"></div>
        <div
          className="h-[80%] bg-contain bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${isFront ? frontShirt : backShirt})`,
          }}
        ></div>

        <div className="flex items-center h-[10%] bd-t-light">
          <PickSideShirt
            text="Front"
            id="frontShirt"
            textClass={textClass}
            checkedDf="true"
            onClick={() => setIsFront(true)}
          />
          <PickSideShirt
            text="Back"
            id="backShirt"
            textClass={textClass}
            onClick={() => setIsFront(false)}
          />
        </div>
      </div>
    </div>
  );
}

export default LeftCampain;
