import { Fragment, useState } from "react";
import { ArrowIcon } from "../../../../../../../Icon/Icon";

function FontText({ cl1, cl2 }) {
  const [isFocus, setIsFocus] = useState(false);
  const [font, setFont] = useState();
  const isHidden = `${isFocus ? "" : "hidden"}`;
  const optionCl = "py-2 px-4 text-gray-400 hover:text-black";

  return (
    <Fragment>
      <div
        tabIndex="0"
        className={`relative flex items-center justify-between px-3 pointer ${cl1}`}
        onClick={() => setIsFocus(state => !state)}
      >
        <div className="flex-1">{font ? font : "Montserrat"}</div>
        <ArrowIcon className="w-3 text-[#65676b] rotate-90" />
        <div
          className={`${isHidden} absolute z-10 top-[110%] left-0 w-[100%] bg-white ${cl2}`}
        >
          <div className={`${optionCl}`} onClick={() => setFont("Casual")}>
            Casual
          </div>
          <div className={`${optionCl}`} onClick={() => setFont("Fancy")}>
            Fancy
          </div>
          <div className={`${optionCl}`} onClick={() => setFont("Headline")}>
            Headline
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default FontText;
