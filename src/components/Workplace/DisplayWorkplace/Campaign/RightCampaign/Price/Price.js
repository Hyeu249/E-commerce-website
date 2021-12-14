import { useState } from "react";
import { AccountIcon } from "../../../../.././../Icon/Icon";
import OptionPrice from "./OptionPrice";

function Price({ price, setPrice }) {
  const [isFocus, setIsFocus] = useState(false);
  const [worth, setWorth] = useState();
  const dadClass = "group relative flex justify-between";
  const isHidden = `${isFocus ? "" : "hidden"}`;
  const frameSelectClass = `${isHidden} absolute top-[100%] left-[0] w-[100%] pt-2`;
  const selectClass = "rounded-2xl bg-white";

  return (
    <div
      tabIndex="0"
      className={`${dadClass} leading-3+ bd-light rounded-2xl mx-4 mt-4 p-4 pointer`}
      onMouseDown={() => setIsFocus(true)}
      // onBlur={() => {
      //   setIsFocus(false);
      //   console.log("onBlur");
      // }}
    >
      Giá bán: &nbsp;&nbsp;{worth ? worth + ".000 đồng" : ""}
      <AccountIcon className="w-4" />
      {worth === null && (
        <input
          value="input"
          className="peer absolute top left-0 w-[100%] h-[100%] rounded-2xl pl-20 pb-1 bg-transparent"
          type="text"
          onChange={() => {}}
        />
      )}
      <div className={`${frameSelectClass}`}>
        <div className={`${selectClass} py-2 bd-light`}>
          <OptionPrice
            price="60.000 đồng"
            onClick={() => {
              setIsFocus(false);
              setWorth(60);
            }}
          />
          <OptionPrice
            price="250.000 đồng"
            onClick={() => {
              setIsFocus(false);
              setWorth(250);
            }}
          />
          <OptionPrice
            price="550.000 đồng"
            onClick={() => {
              setIsFocus(false);
              setWorth(550);
            }}
          />
          <OptionPrice
            price="Đặt bằng tay"
            onClick={() => {
              setIsFocus(false);
              setWorth(null);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Price;
