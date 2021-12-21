import { Fragment, useState } from "react";
import { AccountIcon } from "../../../../.././../Icon/Icon";
import { useSelector } from "react-redux";
import InputPrice from "./InputPrice";
import FrameOptionPrice from "./FrameOptionPrice";

function Price() {
  const infoShirt = useSelector(state => state.infoShirt);
  const uploadedPngs = useSelector(state => state.uploadedPngs);
  const customTextOnShirt = useSelector(state => state.customTextOnShirt);
  const isValidTshirt = uploadedPngs[0]?.img || customTextOnShirt[0]?.value;
  const isValidPrice =
    infoShirt.price === "60" ||
    infoShirt.price === "250" ||
    infoShirt.price === "550";

  const isPriceUndefined = infoShirt.price === undefined;

  //
  const worth = infoShirt?.price;
  const [isFocus, setIsFocus] = useState(false);
  const dadClass = "group relative flex justify-between";

  const isBgRedTextWhite = isValidTshirt ? "" : "bg-gray-500 text-white";
  const isFillWhite = isValidTshirt ? "" : "fill-current";
  const isRotate180 = isFocus ? `rotate-180` : "";

  return (
    <Fragment>
      <div
        tabIndex="0"
        className={`${dadClass} leading-3+ bd-light rounded-2xl mx-4 mt-4 p-4 pointer ${isBgRedTextWhite}`}
        onMouseDown={() => {
          (isPriceUndefined || isValidPrice) &&
            isValidTshirt &&
            setIsFocus(state => !state);
        }}
      >
        Giá bán: &nbsp;&nbsp;{isValidPrice ? `${worth}.000 đồng` : ""}
        {(isPriceUndefined || isValidPrice) && (
          <AccountIcon className={`${isFillWhite} ${isRotate180} w-4`} />
        )}
        {!(isPriceUndefined || isValidPrice) && (
          <InputPrice
            uploadedPngs={uploadedPngs}
            customTextOnShirt={customTextOnShirt}
            infoShirt={infoShirt}
          />
        )}
        <FrameOptionPrice
          uploadedPngs={uploadedPngs}
          customTextOnShirt={customTextOnShirt}
          isFocus={isFocus}
        />
      </div>
      {infoShirt.price && (
        <div className={`pl-8 pt-4`}>Lãi: {infoShirt.price - 40}.000 đồng</div>
      )}
    </Fragment>
  );
}

export default Price;
