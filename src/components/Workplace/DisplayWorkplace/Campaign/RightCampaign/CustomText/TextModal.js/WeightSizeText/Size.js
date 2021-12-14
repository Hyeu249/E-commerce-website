import { useState } from "react";
import sizeData from "./SizeData";

function Size({ cl1, cl2, borderCl }) {
  const [isFocus, setIsFocus] = useState(false);
  const [sizeText, setSizeText] = useState(20);
  const isHidden = isFocus ? "" : "hidden";
  return (
    <div
      className={`relative ${cl1} flex-1 pointer`}
      onClick={() => setIsFocus(state => !state)}
    >
      <div className="font-bold">{sizeText}px</div>
      <div className="text-gray-400">Aa</div>
      <div
        className={`${isHidden} absolute z-10 top-[110%] left-0 w-[100%] h-[193px] ${borderCl} bg-white scrollBar`}
      >
        {sizeData.map(({ size }) => (
          <div key={size} className={cl2} onClick={() => setSizeText(size)}>
            {size}px
          </div>
        ))}
      </div>
    </div>
  );
}

export default Size;
