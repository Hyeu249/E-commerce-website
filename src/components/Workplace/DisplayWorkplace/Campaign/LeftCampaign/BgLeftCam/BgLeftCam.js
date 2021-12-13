import Dot from "./Dot";
import dotArr from "./dotArr";

function BgLeftCam() {
  const dotBg = " w-[3px] h-[3px] rounded-full bg-gray-300 bg-clip-content";

  return (
    <div className="top w-[100%] p-[2.5vh] h-[100%] z-0 overflow-hidden">
      {dotArr.map(({ id }) => (
        <Dot key={id} className={dotBg} />
      ))}
    </div>
  );
}

export default BgLeftCam;
