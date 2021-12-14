function BackgroundSquare({ children }) {
  const flexCenter100XYCl =
    "flex items-center justify-center w-[100%] h-[100%]";
  const verticalColumnCl = `flex-1 w-[2px] bg-blue-200 bg-clip-content`;
  const topVerticalColumCl = "mt-1 w-[6px] h-[2px] bg-blue-200";
  const BotVerticalColumCl = "mb-1 w-[6px] h-[2px] bg-blue-200";
  const horizontalColumnCl = `flex-1 h-[2px] bg-blue-200 bg-clip-content`;
  const leftHorizontalColumnCl = "ml-1 w-[2px] h-[6px] bg-blue-200";
  const rightHorizontalColumnCl = "mr-1 w-[2px] h-[6px] bg-blue-200";

  return (
    <div className={`relative  flex-col ${flexCenter100XYCl}`}>
      <div className={topVerticalColumCl}></div>
      <div className={verticalColumnCl}></div>
      <div className={BotVerticalColumCl}></div>
      <div className={`absolute ${flexCenter100XYCl}`}>
        <div className={leftHorizontalColumnCl}></div>
        <div className={horizontalColumnCl}></div>
        <div className={rightHorizontalColumnCl}></div>
        {children}
        <div className={leftHorizontalColumnCl}></div>
        <div className={horizontalColumnCl}></div>
        <div className={rightHorizontalColumnCl}></div>
      </div>
      {children}
      <div className={topVerticalColumCl}></div>
      <div className={verticalColumnCl}></div>
      <div className={BotVerticalColumCl}></div>
    </div>
  );
}

export default BackgroundSquare;
