import React from "react";

function CircleBackgroundItem({ id, color, checkedDf, setBackgroundText }) {
  const checkedCl =
    "peer-checked:border-[3px] peer-checked:border-solid peer-checked:border-[#1877f2]";

  const labelCl =
    "w-[25px] h-[25px] bd-light rounded-full mr-[12px] mb-[5px] pointer block";

  //return JSX
  return (
    <div>
      <input
        type="checkbox"
        name="CircleBackgroundItem"
        id={id}
        className="peer absolute invisible"
        defaultChecked={checkedDf}
      />
      <label
        htmlFor={id}
        className={`${labelCl} ${checkedCl}`}
        style={{ backgroundColor: color }}
        // onClick={() => setBackgroundText(color)}
      ></label>
    </div>
  );
}

export default CircleBackgroundItem;
