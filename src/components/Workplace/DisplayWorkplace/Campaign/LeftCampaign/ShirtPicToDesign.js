function ShirtPicToDesign({ p1: isFront, p2: frontShirt, p3: backShirt }) {
  const flexCenterXy = "flex items-center justify-center";
  return (
    <div
      className={`h-[80%] bg-contain bg-no-repeat bg-center ${flexCenterXy}`}
      style={{
        backgroundImage: `url(${isFront ? frontShirt : backShirt})`,
      }}
    >
      <div className="w-[37%] h-[60%] border-1 border-dashed !border-white"></div>
    </div>
  );
}

export default ShirtPicToDesign;
