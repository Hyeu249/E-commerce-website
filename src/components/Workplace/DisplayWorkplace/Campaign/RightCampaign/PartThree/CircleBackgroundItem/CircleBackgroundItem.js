import React, { Fragment } from "react";
import classes from "./CircleBackgroundItem.module.css";

function CircleBackgroundItem({
  id,
  color,
  defaultChecked,
  setBackgroundText,
}) {
  //return JSX
  return (
    <Fragment>
      <input
        type="radio"
        name="CircleBackgroundItem"
        id={id}
        style={{ position: "absolute", left: "-500px", width: "1px" }}
        defaultChecked={defaultChecked}
      />
      <label
        htmlFor={id}
        className={classes.backgroundArea_circleFrame_circle}
        // onClick={() => setBackgroundText(color)}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: color,
            borderRadius: "25px",
          }}
        ></div>
      </label>
    </Fragment>
  );
}

export default CircleBackgroundItem;
