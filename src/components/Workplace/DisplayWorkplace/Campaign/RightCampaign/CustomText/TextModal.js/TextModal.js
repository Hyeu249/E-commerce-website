import CustomSizeText from "./CustomSizeText";
import FrontText from "./FrontText";
import SideText from "./SideText/SideText";
import FontText from "./FontText";
import WeightSizeText from "./WeightSizeText/WeightSizeText";
import ColorText from "./ColorText";
import SpacingLineHeightText from "./SpacingLineHeightText";
import AlignText from "./AlignText/AlignText";
import AlignTextView from "./AlignTextView/AlignTextView";

function TextModal({ isCustomText, setIsCustomText }) {
  const textFrameClass = `text-sm+ text-light font-semibold px-4 pb-6`;
  const isHide = `${isCustomText ? "on-screen" : "off-screen"}`;
  const borderCl = "rounded-md border-light";
  const frameCLass = `absolute ${isHide} ${textFrameClass} height-[100vh-65px] top-[65px] right-0 w-[24rem] h-[200px] bg-white bd-t-1`;
  const titleClass = "p-5 text-sm text-gray-400";
  const contentCLass = `h-12 ${borderCl}`;

  return (
    <div className={`${frameCLass} scrollBar`}>
      <FrontText setIsCustomText={setIsCustomText} />
      {/* side */}
      <SideText />
      {/* size frame */}
      <div className={`t-4 ${titleClass}`}>KÍCH THƯỚC KHUNG</div>
      <CustomSizeText className={contentCLass} />
      {/* Font */}
      <div className={`t-4 ${titleClass}`}>THIẾT KẾ CHỮ</div>
      <FontText cl1={contentCLass} cl2={borderCl} />
      {/* bold & size */}
      <WeightSizeText cl1={contentCLass} borderCl={borderCl} />
      {/* color text */}
      <ColorText cl1={contentCLass} cl2={borderCl} />
      <SpacingLineHeightText cl1={contentCLass} cl2={borderCl} />
      {/* <AlignText /> */}
      <AlignText cl1={contentCLass} />
      {/* view */}
      <AlignTextView cl1={borderCl} />
    </div>
  );
}

export default TextModal;
