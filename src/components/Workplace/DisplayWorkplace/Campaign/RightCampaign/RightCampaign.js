import { useState } from "react";
import CustomText from "./CustomText/CustomText";
import PartThree from "./PartThree/PartThree";
import Price from "./Price/Price";

function RightCampaign() {
  const [price, setPrice] = useState("");

  const borderTopClass = "bd-t-1";
  return (
    <div className={`w-[24rem] bg-white scrollBar ${borderTopClass}`}>
      <PartThree />
      <CustomText />
      <Price price={price} setPrice={setPrice} />
    </div>
  );
}

export default RightCampaign;
