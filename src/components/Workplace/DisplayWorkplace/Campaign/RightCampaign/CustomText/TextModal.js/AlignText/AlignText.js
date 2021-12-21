import alignTextLeft from "../../../../../../../../img/alignTextLeft.png";
import alignTextRight from "../../../../../../../../img/alignTextRight.png";
import alignTextCenter from "../../../../../../../../img/alignTextCenter.png";
import alignTextJustify from "../../../../../../../../img/alignTextJustify.png";
import AlignTextItem from "./AlignTextItem";
import { useDispatch } from "react-redux";
import { mutateFontTextHandle } from "../../../../../../../../store/global/globalSlice";

function AlignText({ textCustom, cl1 }) {
  const dispatch = useDispatch();

  const textAlignArray = [
    { key: "alignTextLeft", img: alignTextLeft, textAlign: "left" },
    {
      key: "alignTextJustify",
      img: alignTextJustify,
      textAlign: "justify",
    },
    {
      key: "alignTextCenter",
      img: alignTextCenter,
      textAlign: "center",
      defaultchecked: "true",
    },
    { key: "alignTextRight", img: alignTextRight, textAlign: "right" },
  ];
  return (
    <div className={`flex mt-5 ${cl1}`}>
      {textAlignArray.map(({ key, img, textAlign, defaultchecked }) => (
        <AlignTextItem
          key={key}
          id={key}
          img={img}
          defaultchecked={defaultchecked}
          onMouseDown={() => {
            setTimeout(() => {
              dispatch(
                mutateFontTextHandle({
                  id: textCustom.id,
                  textAlign,
                  type: "textAlign",
                })
              );
            }, 100);
          }}
        />
      ))}
    </div>
  );
}

export default AlignText;
