import CustomSizeText from "./CustomSizeText/CustomSizeText";
import FrontText from "./FrontText";
import SideText from "./SideText/SideText";
import FontText from "./FontText";
import WeightSizeText from "./WeightSizeText/WeightSizeText";
import ColorText from "./ColorText";
import SpacingLineHeightText from "./SpacingLineHeightText";
import AlignText from "./AlignText/AlignText";
import AlignTextView from "./AlignTextView/AlignTextView";
import _ from "lodash";
import { useDispatch } from "react-redux";
import { changePropsTextHandle } from "../../../../../../../store/global/globalSlice";

function TextModal({ thisTextToCustom }) {
  const textFrameClass = `text-sm+ text-light font-semibold px-4 pb-6`;
  const isHide = `${thisTextToCustom?.focus ? "on-screen" : "off-screen"}`;
  const borderCl = "rounded-md border-light";
  const frameCLass = `absolute ${isHide} ${textFrameClass} height-[100vh-65px] top-[65px] right-0 w-[24rem] h-[200px] bg-white bd-t-1`;
  const titleClass = "p-5 text-sm text-gray-400";
  const contentCLass = `h-12 ${borderCl}`;

  //
  const dispatch = useDispatch();
  const textCustom = _.cloneDeep(thisTextToCustom);

  return (
    <div
      className={`${frameCLass} scrollBar`}
      onMouseDown={() => {
        const textAreaTarget = document.getElementById(textCustom.id);

        if (textAreaTarget.contains(document.activeElement)) {
          // if (textAreaTarget === document.activeElement) {
          textCustom.focus = false;
          dispatch(changePropsTextHandle(textCustom));
        }

        setTimeout(() => {
          textAreaTarget.focus();
        }, 200);
      }}
    >
      <FrontText textCustom={textCustom} />

      {/* side */}
      <SideText textCustom={textCustom} />
      {/* size frame */}
      <div className={`t-4 ${titleClass}`}>KÍCH THƯỚC KHUNG</div>
      <CustomSizeText textCustom={textCustom} className={contentCLass} />
      {/* Font */}
      <div className={`t-4 ${titleClass}`}>THIẾT KẾ CHỮ</div>
      <FontText textCustom={textCustom} cl1={contentCLass} cl2={borderCl} />
      {/* bold & size */}
      <WeightSizeText
        textCustom={textCustom}
        cl1={contentCLass}
        borderCl={borderCl}
      />
      {/* color text */}
      <ColorText textCustom={textCustom} cl1={contentCLass} cl2={borderCl} />
      <SpacingLineHeightText textCustom={textCustom} cl1={contentCLass} />
      {/* <AlignText /> */}
      <AlignText textCustom={textCustom} cl1={contentCLass} />
      {/* view */}
      <AlignTextView textCustom={textCustom} />
    </div>
  );
}

export default TextModal;
