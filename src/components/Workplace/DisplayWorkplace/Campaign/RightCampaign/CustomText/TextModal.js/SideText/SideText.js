import alignTop from "../../../../../../../../img/alignTop.png";
import alignRight from "../../../../../../../../img/alignRight.png";
import alignBottom from "../../../../../../../../img/alignBottom.png";
import alignLeft from "../../../../../../../../img/alignLeft.png";
import alignCenterCenterY from "../../../../../../../../img/alignCenterY.png";
import alignCenterCenterX from "../../../../../../../../img/alignCenterX.png";
import AlignFrameText from "./AlignFrameText";

function SideText() {
  const imgClass = `w-7 h-7 object-contain rounded hover:filter-none hover:bg-white filter-gray active`;
  return (
    <div className="flex justify-evenly items-center rounded-md h-10 bg-gray-100">
      <AlignFrameText id="left" className={imgClass} img={alignLeft} />
      <AlignFrameText
        id="centerY"
        className={imgClass}
        img={alignCenterCenterY}
      />
      <AlignFrameText id="right" className={imgClass} img={alignRight} />
      <AlignFrameText id="centerTop" className={imgClass} img={alignTop} />
      <AlignFrameText
        id="centerX"
        className={imgClass}
        img={alignCenterCenterX}
      />
      <AlignFrameText id="bottom" className={imgClass} img={alignBottom} />
    </div>
  );
}

export default SideText;
