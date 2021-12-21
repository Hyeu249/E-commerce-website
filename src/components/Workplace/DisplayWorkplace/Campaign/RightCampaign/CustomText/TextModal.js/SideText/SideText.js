import alignTop from "../../../../../../../../img/alignTop.png";
import alignRight from "../../../../../../../../img/alignRight.png";
import alignBottom from "../../../../../../../../img/alignBottom.png";
import alignLeft from "../../../../../../../../img/alignLeft.png";
import alignCenterCenterY from "../../../../../../../../img/alignCenterY.png";
import alignCenterCenterX from "../../../../../../../../img/alignCenterX.png";
import AlignFrameText from "./AlignFrameText";
import { useDispatch } from "react-redux";
import { displayPositionTextHandle } from "../../../../../../../../store/global/globalSlice";

function SideText({ textCustom }) {
  const dispatch = useDispatch();
  const alignFrameTextArray = [
    { id: "left", img: alignLeft, align: "left" },
    { id: "right", img: alignRight, align: "right" },
    { id: "top", img: alignTop, align: "top" },
    { id: "bottom", img: alignBottom, align: "bottom" },
    {
      id: "centerY",
      img: alignCenterCenterY,
      align: "centerY",
      defaultChecked: "true",
    },
    { id: "centerX", img: alignCenterCenterX, align: "centerX" },
  ];
  const imgClass = `w-7 h-7 object-contain rounded hover:filter-none hover:bg-white filter-gray active`;
  return (
    <div className="flex justify-evenly items-center rounded-md h-10 bg-gray-100">
      {alignFrameTextArray.map(({ id, img, align, defaultChecked }) => (
        <AlignFrameText
          key={id}
          id={id}
          className={imgClass}
          img={img}
          defaultChecked={defaultChecked}
          onMouseDown={e => {
            const textAreaTarget = document.getElementById(textCustom.id);
            const rect = textAreaTarget.getBoundingClientRect();
            if (align === "left") textAreaTarget.style.left = 0;
            if (align === "top") textAreaTarget.style.top = 0;
            if (align === "right") {
              textAreaTarget.style.left = "auto";
              textAreaTarget.style.right = 0;
            }
            if (align === "bottom") {
              textAreaTarget.style.top = "auto";
              textAreaTarget.style.bottom = 0;
            }
            if (align === "centerY") {
              textAreaTarget.style.left = "auto";
              textAreaTarget.style.right = "auto";
              textAreaTarget.style.top = "auto";
              textAreaTarget.style.bottom = "auto";
            }
            if (align === "centerX") {
              textAreaTarget.style.left = `calc(50% - ${rect.width / 2}px)`;
            }

            // end onMouseDown
            setTimeout(() => {
              dispatch(displayPositionTextHandle({ id: textCustom.id }));
            }, 100);
          }}
        />
      ))}
    </div>
  );
}

export default SideText;
