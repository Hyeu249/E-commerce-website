import React from "react";
import AreaPrintShirtPng from "./AreaPrintShirtPng/AreaPrintShirtPng";

function ShirtPicToDesign({ p1: isFront, p2: frontShirt, p3: backShirt }) {
  const flexCenterXy = "flex items-center justify-center";
  return (
    <div
      className={`h-[90%] bg-contain bg-no-repeat bg-center ${flexCenterXy}`}
      style={{
        backgroundImage: `url(${isFront ? frontShirt : backShirt})`,
      }}
    >
      <AreaPrintShirtPng />
    </div>
  );
}

export default ShirtPicToDesign;
