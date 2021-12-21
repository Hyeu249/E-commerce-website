import React, { useRef, useState } from "react";
// import downloadedPng from "../../../../../../../img/pngwing.com.png";
import UploadedPng from "./UploadedPng";
import { useSelector } from "react-redux";
import TextOnShirt from "./TextOnShirt";

function AreaPrintShirtPng({ className }) {
  const uploadedPngs = useSelector(state => state.uploadedPngs);

  const textToCustom = useSelector(state => state.customTextOnShirt);
  const [isPrecedence, setIsPrecedence] = useState(1);

  //
  const allowRangeRef = useRef();
  const flexCenterXy = "flex items-center justify-center";
  const borderDash = `border-1 border-dashed !border-white`;

  return (
    <div
      id="brotherOfAnotherFather"
      ref={allowRangeRef}
      className={`relative w-[37%] h-[60%] ${flexCenterXy} ${borderDash} ${className}`}
    >
      {/* Text On Shirt */}
      {textToCustom.map(data => {
        return (
          <TextOnShirt
            key={data.id}
            data={data}
            allowRangeRef={allowRangeRef}
            isPrecedence={isPrecedence}
            setIsPrecedence={setIsPrecedence}
          />
        );
      })}

      {/* File Png */}
      {uploadedPngs.map(({ id, img }) => (
        <UploadedPng
          key={id}
          id={id}
          img={img}
          allowRangeRef={allowRangeRef}
          borderDash={borderDash}
          isPrecedence={isPrecedence}
          setIsPrecedence={setIsPrecedence}
        />
      ))}
    </div>
  );
}

export default React.memo(AreaPrintShirtPng);
