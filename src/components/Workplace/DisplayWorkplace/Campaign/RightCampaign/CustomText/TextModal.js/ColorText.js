import { useState } from "react";
import { ArrowIcon } from "../../../../../../../Icon/Icon";

function ColorText({ cl1, cl2 }) {
  const [isFocus, setIsFocus] = useState();
  const [colorText, setColorText] = useState("#FFFFFF");
  const isHidden = isFocus ? "" : "hidden";
  const flexNormalClass = "flex items-center justify-between px-3";
  const optionCl = "py-2 px-4 text-gray-400 hover:text-black";
  const borderCl = `rounded ${colorText === "#FFFFFF" ? "border-2" : ""}`;

  return (
    <div
      className={`relative mt-5 ${cl1} ${flexNormalClass} pointer`}
      onClick={() => setIsFocus(state => !state)}
    >
      <div className="flex">
        <div className={`w-6 h-6 mr-4 ${borderCl} bg-[${colorText}]`}></div>
        <div>{colorText}</div>
      </div>
      <ArrowIcon className="w-3 text-light rotate-90" />
      <div
        className={`${isHidden} absolute z-10 top-[110%] w-[100%] left-0 ${cl2} bg-white`}
      >
        <div className={optionCl} onClick={() => setColorText("#FFFFFF")}>
          #FFFFFF
        </div>
        <div className={optionCl} onClick={() => setColorText("#000000")}>
          #000000
        </div>
        <div className={optionCl} onClick={() => setColorText("#EE2A28")}>
          #EE2A28
        </div>
        <div className={optionCl} onClick={() => setColorText("#0059A3")}>
          #0059A3
        </div>
        <div className={optionCl} onClick={() => setColorText("#FFA500")}>
          #FFA500
        </div>
      </div>
      {/* div color */}
      <div className="absolute hidden bg-[#FFFFFF] bg-[#000000] bg-[#EE2A28] bg-[#0059A3] bg-[#FFA500]"></div>
    </div>
  );
}

export default ColorText;
