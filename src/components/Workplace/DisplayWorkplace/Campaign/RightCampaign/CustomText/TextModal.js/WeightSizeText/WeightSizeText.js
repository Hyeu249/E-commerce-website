import { Fragment } from "react";
import Font from "./Font";
import Size from "./Size";

function WeightSizeText({ textCustom, cl1, borderCl }) {
  const flexNormalClass = "";
  // const flexNormalClass = "flex items-center justify-between px-3";
  const optionClass = "py-2 px-4 text-gray-400 hover:text-black";
  return (
    <Fragment>
      <div className={`flex mt-5 ${cl1}`}>
        <Font
          textCustom={textCustom}
          cl1={flexNormalClass}
          cl2={optionClass}
          borderCl={borderCl}
        />
        <Size
          textCustom={textCustom}
          cl1={flexNormalClass}
          cl2={optionClass}
          borderCl={borderCl}
        />
      </div>
    </Fragment>
  );
}

export default WeightSizeText;
