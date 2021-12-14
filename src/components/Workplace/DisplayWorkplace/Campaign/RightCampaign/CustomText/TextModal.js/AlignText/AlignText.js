import alignTextLeft from "../../../../../../../../img/alignTextLeft.png";
import alignTextRight from "../../../../../../../../img/alignTextRight.png";
import alignTextCenter from "../../../../../../../../img/alignTextCenter.png";
import alignTextJustify from "../../../../../../../../img/alignTextJustify.png";
import AlignTextItem from "./AlignTextItem";

function AlignText({ cl1, cl2 }) {
  return (
    <div className={`flex mt-5 ${cl1}`}>
      <AlignTextItem id="alignTextLeft" img={alignTextLeft} />
      <AlignTextItem
        id="alignTextJustify"
        img={alignTextJustify}
        defaul="true"
      />
      <AlignTextItem id="alignTextCenter" img={alignTextCenter} />
      <AlignTextItem id="alignTextRight" img={alignTextRight} />
    </div>
  );
}

export default AlignText;
