import React, { useState, useEffect } from "react";
import CustomText from "./CustomText/CustomText";
import NextButton from "./NextButton/NextButton";
import PartThree from "./PartThree/PartThree";
import Price from "./Price/Price";
import { useSelector } from "react-redux";

function RightCampaign() {
  const textTocustom = useSelector(state => state.customTextOnShirt);
  const thisTextToCustom = textTocustom.filter(
    state => state.focus === true
  )[0];

  const [lessThan185H, setLessThan185H] = useState(false);
  const borderTopClass = "bd-t-1";
  const isHidden = `${lessThan185H ? "hidden" : ""}`;
  const isMarginRight = `${
    thisTextToCustom?.focus ? "off-screen" : "on-screen"
  }`;

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
      <CustomText thisTextToCustom={thisTextToCustom} />
      <Price />
      <div className="flex-1"></div>
      <NextButton />
    </div>
  );
}

export default React.memo(RightCampaign);
