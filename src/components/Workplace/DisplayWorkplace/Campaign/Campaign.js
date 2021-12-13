import LeftCampain from "./LeftCampaign/LeftCampain";
import RightCampaign from "./RightCampaign/RightCampaign";

function Campaign() {
  const fFlexClass = "flex justify-cente flex-1 h-[45vh]";
  const fFontClass = "dark:t font-semibold text-sm+ text-light";

  return (
    <div className={`${fFlexClass} ${fFontClass}`}>
      <LeftCampain />
      <RightCampaign />
    </div>
  );
}

export default Campaign;
