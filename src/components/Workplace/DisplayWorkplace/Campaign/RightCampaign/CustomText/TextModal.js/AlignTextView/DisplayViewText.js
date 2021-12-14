function DisplayViewText({ children }) {
  const displayNumberOfviewCl =
    "w-[60px] h-[30px] border-light rounded-md text-center font-bold";
  return (
    <div className="flex items-center">
      <div className={displayNumberOfviewCl}>20px</div>
      <div className="flex flex-col items-center px-5">
        <div className={displayNumberOfviewCl}>0px</div>
        <div className="py-5">{children}</div>
        <div className={displayNumberOfviewCl}>20px</div>
      </div>
      <div className={displayNumberOfviewCl}>20px</div>
    </div>
  );
}

export default DisplayViewText;
