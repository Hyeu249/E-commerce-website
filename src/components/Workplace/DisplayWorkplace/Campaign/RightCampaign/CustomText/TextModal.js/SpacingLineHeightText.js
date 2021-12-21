import { useRef } from "react";
import useSpacingLineHeightText from "./useSpacingLineHeightText";

function SpacingLineHeightText({ textCustom, cl1 }) {
  const flexNormalClass = "flex px-3";
  const spacingTextRef = useRef();
  const lineHeightTextRef = useRef();

  useSpacingLineHeightText(spacingTextRef, textCustom, "x");
  useSpacingLineHeightText(lineHeightTextRef, textCustom, "y");

  return (
    <div className={`mt-5 ${cl1} ${flexNormalClass}`}>
      {/* left */}
      <div className="flex items-center w-[50%] bd-r-light">
        <div
          ref={spacingTextRef}
          className="bd-t-light+ bd-b-light+ px-[4px] py-[2px] pointer-resizeX "
        >
          <div className="text-gray-300 leading-3 pb-[2px]">A</div>
        </div>
        <div className="ml-4 font-bold">{textCustom?.spacing}px</div>
      </div>
      {/* right */}
      <div className="flex items-center flex-1 pl-3">
        <div
          ref={lineHeightTextRef}
          className="bd-l-light+ bd-r-light+ px-[4px] py-[2px] pointer-resizeY"
        >
          <div className="text-gray-300 leading-3 pb-[2px]">A</div>
        </div>
        <div className="ml-4 font-bold">{textCustom?.lineHeight}</div>
      </div>
    </div>
  );
}

export default SpacingLineHeightText;
