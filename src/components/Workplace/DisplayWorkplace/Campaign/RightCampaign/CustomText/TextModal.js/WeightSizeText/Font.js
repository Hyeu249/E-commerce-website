import { useState } from "react";
import { ArrowIcon } from "../../../../../../../../Icon/Icon";
function Font({ cl1, cl2, borderCl }) {
  const [bold, setBold] = useState("Normal");
  const [isFocus, setIsFocus] = useState();
  const isHidden = isFocus ? "" : "hidden";

  return (
    <div
      tabIndex="true"
      className={`relative w-[50%] bd-r-gray ${cl1} pointer`}
      onClick={() => setIsFocus(state => !state)}
    >
      <div>{bold}</div>
      <ArrowIcon className="w-3 text-light rotate-90" />
      <div
        className={`${isHidden} absolute z-10 top-[110%] left-0 w-[100%] ${borderCl} bg-white`}
      >
        <div className={cl2} onClick={() => setBold("Normal")}>
          Normal
        </div>
        <div className={cl2} onClick={() => setBold("Medium")}>
          Medium
        </div>
        <div className={cl2} onClick={() => setBold("Semibold")}>
          Semibold
        </div>
        <div className={cl2} onClick={() => setBold("Bold")}>
          Bold
        </div>
        <div className={cl2} onClick={() => setBold("Extrabold")}>
          Extrabold
        </div>
      </div>
    </div>
  );
}

export default Font;
