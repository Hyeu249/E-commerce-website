import React, { useState } from "react";
import classes from "./PartThree.module.css";
import { AccountIcon } from "../../../../../../Icon/Icon";
import CircleBackgroundItem from "./CircleBackgroundItem/CircleBackgroundItem";

function PartThree({ setBackgroundText }) {
  //array circle background items
  const backgroundData = [
    { id: classes.circleOne, color: "#071d49", defaultChecked: "true" },
    { id: classes.circleTwo, color: "#fff" },
    { id: classes.circleThree, color: "#0059a3" },
    { id: classes.circleFour, color: "#004d41" },
    { id: classes.circleFive, color: "#ee2a28" },
    { id: classes.circleSix, color: "#cbd0d4" },
    { id: classes.circleSeven, color: "#643335" },
    { id: classes.circleEight, color: "#26262a" },
    { id: classes.circleNine, color: "#008a43" },
    { id: classes.circleTen, color: "#a0cced" },
    { id: classes.circleEleven, color: "#5b6770" },
    { id: classes.circleTwelve, color: "#ffe716" },
    { id: classes.circleThirdTeen, color: "red" },
    { id: classes.circleFourTeen, color: "green" },
    { id: classes.circleFiftTeen, color: "blue" },
    { id: classes.circleSixTeen, color: "orange" },
  ];

  //state
  const [isExtendCircle, setIsExtendCircle] = useState(false);

  //Return JSX
  return (
    <div className="flex flex-col p-4">
      {/* background area */}
      <div className="flex flex-col rounded-2xl bd-light">
        {/* <div> */}
        <div className={classes.backgroundArea_textTop}>Màu áo của bạn</div>
        <div className={classes.backgroundArea_circleFrame}>
          {/* circle background items */}
          {backgroundData
            .splice(0, isExtendCircle ? 16 : 8)
            .map(({ id, color, defaultChecked }) => (
              <CircleBackgroundItem
                key={id}
                id={id}
                color={color}
                defaultChecked={defaultChecked}
                setBackgroundText={setBackgroundText}
              />
            ))}
        </div>
        <div
          className={classes.backgroundArea_extendButton}
          onClick={() => setIsExtendCircle((state) => !state)}
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
