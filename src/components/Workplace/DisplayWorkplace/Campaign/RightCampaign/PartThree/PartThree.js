import React, { useState } from "react";
import { AccountIcon } from "../../../../../../Icon/Icon";
import CircleBackgroundItem from "./CircleBackgroundItem/CircleBackgroundItem";
import { v4 as uuidv4 } from "uuid";

function PartThree({ setBackgroundText }) {
  //array circle background items
  const backgroundData = [
    { id: uuidv4(), color: "#071d49", defaultChecked: "true" },
    { id: uuidv4(), color: "#fff" },
    { id: uuidv4(), color: "#0059a3" },
    { id: uuidv4(), color: "#004d41" },
    { id: uuidv4(), color: "#ee2a28" },
    { id: uuidv4(), color: "#cbd0d4" },
    { id: uuidv4(), color: "#643335" },
    { id: uuidv4(), color: "#26262a" },
    { id: uuidv4(), color: "#008a43" },
    { id: uuidv4(), color: "#a0cced" },
    { id: uuidv4(), color: "#5b6770" },
    { id: uuidv4(), color: "#ffe716" },
    { id: uuidv4(), color: "red" },
    { id: uuidv4(), color: "green" },
    { id: uuidv4(), color: "blue" },
    { id: uuidv4(), color: "orange" },
  ];

  //state
  const [isExtendCircle, setIsExtendCircle] = useState(false);

  //Return JSX
  return (
    <div className="flex flex-col p-4">
      {/* background area */}
      <div className="flex flex-col rounded-2xl bd-light">
        {/* <div> */}
        <div
          className={`text-sm+ select-none text-[#65676b] mt-[18px] mb-[10px] ml-[16px]`}
        >
          Màu áo của bạn
        </div>
        <div
          className={`relative flex justify-between flex-wrap mr-[5px] ml-[16px]`}
        >
          {/* circle background items */}
          {backgroundData
            .splice(0, isExtendCircle ? 16 : 8)
            .map(({ id, color, defaultChecked }) => (
              <CircleBackgroundItem
                key={id}
                id={id}
                color={color}
                checkedDf={defaultChecked}
                setBackgroundText={setBackgroundText}
              />
            ))}
        </div>
        <div
          className={`flex justify-center rounded-[10px] hover:bg-[#f1f1f1] pointer`}
          onClick={() => setIsExtendCircle(state => !state)}
        >
          <AccountIcon
            style={{
              width: "16px",
              padding: "12px 0",
              transform: isExtendCircle ? "rotate(180deg)" : "",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default PartThree;
