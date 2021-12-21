import seResizeImg from "../../../../../../../img/seResize.png";

function CornerSe({ ref1: cornerSePngRef, cl: cornerCl, myClick }) {
  const isHidden = myClick[1] ? "flex" : "hidden";
  return (
    <div
      ref={cornerSePngRef}
      className={`${isHidden} ${cornerCl} bottom-[-6px] right-[-6px] `}
    >
      <div className="absolute w-[100%] h-[100%] pointer"></div>
      <img
        className={`w-[18px] h-[18px] select-none pointer-events-none`}
        src={seResizeImg}
        alt="se resize"
      />
    </div>
  );
}

export default CornerSe;
