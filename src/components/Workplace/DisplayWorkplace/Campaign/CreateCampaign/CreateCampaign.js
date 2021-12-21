import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "./Header/Header";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import BgLeftCam from "../LeftCampaign/BgLeftCam/BgLeftCam";

function CreateCampaign() {
  const navigate = useNavigate();
  const infoShirt = useSelector(state => state.infoShirt);
  const flexCenterXy = "flex items-center justify-center";

  useEffect(() => {
    if (!infoShirt.complete) navigate("/workplace/campaign/edit");
  });

  return (
    <div className={`relative flex-1 ${flexCenterXy}`}>
      <BgLeftCam />
      <div
        className={`relative z-10 flex flex-col w-[600px] px-10 bg-white rounded-xl shadow-lg`}
      >
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default React.memo(CreateCampaign);
