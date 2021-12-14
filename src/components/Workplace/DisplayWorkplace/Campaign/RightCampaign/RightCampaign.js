import { useState, useEffect } from "react";
import CustomText from "./CustomText/CustomText";
import NextButton from "./NextButton/NextButton";
import PartThree from "./PartThree/PartThree";
import Price from "./Price/Price";

function RightCampaign() {
  const [isCustomText, setIsCustomText] = useState(false);
  const [lessThan185H, setLessThan185H] = useState(false);
  const [price, setPrice] = useState("");
  const borderTopClass = "bd-t-1";
  const isHidden = `${lessThan185H ? "hidden" : ""}`;
  const isMarginRight = `${isCustomText ? "off-screen" : "on-screen"}`;

  useEffect(() => {
    const checkHeight = () => {
      if (window.innerHeight < 185) {
        setLessThan185H(true);
      }
      if (window.innerHeight > 185) {
        setLessThan185H(false);
      }
    };
    window.addEventListener("resize", checkHeight);
    return () => window.removeEventListener("resize", checkHeight);
  }, []);

  return (
    <div
      className={`flex ${isHidden} ${isMarginRight} flex-col w-[24rem] pt-10 bg-white scrollBar overflow-x-hidden ${borderTopClass}`}
    >
      <PartThree />
      <CustomText
        isCustomText={isCustomText}
        setIsCustomText={setIsCustomText}
      />
      <Price price={price} setPrice={setPrice} />
      <div className="flex-1"></div>
      <NextButton />
    </div>
  );
}

export default RightCampaign;
