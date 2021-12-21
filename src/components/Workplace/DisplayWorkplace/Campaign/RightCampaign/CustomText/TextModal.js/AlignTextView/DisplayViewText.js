import useDissplayViewText from "./useDissplayViewText";
import React from "react";

function DisplayViewText({ textCustom, children }) {
  const displayNumberOfviewCl =
    "w-[60px] h-[30px] leading-[29px] border-light rounded-md text-center font-bold transition-custom";
  //

  useDissplayViewText(textCustom?.id);

  return (
    <div className="flex items-center">
      <div className={displayNumberOfviewCl}>{textCustom?.left}px</div>
      <div className="flex flex-col items-center px-5">
        <div className={displayNumberOfviewCl}>{textCustom?.top}px</div>
        <div className="py-5">{children}</div>
        <div className={displayNumberOfviewCl}>{textCustom?.bottom}px</div>
      </div>
      <div className={displayNumberOfviewCl}>{textCustom?.right}px</div>
    </div>
  );
}

export default React.memo(DisplayViewText);
