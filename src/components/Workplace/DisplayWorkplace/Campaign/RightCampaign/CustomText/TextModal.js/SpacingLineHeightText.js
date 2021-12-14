function SpacingLineHeightText({ cl1, cl2 }) {
  const flexNormalClass = "flex px-3";
  // const optionCl = `py-2 px-4 text-gray-400 hover:text-black ${cl2}`;
  return (
    <div className={`mt-5 ${cl1} ${flexNormalClass}`}>
      {/* left */}
      <div className="flex items-center w-[50%] bd-r-light">
        <div className="bd-t-light+ bd-b-light+ px-[2px] py-[0.5px] pointer-resizeX">
          <div className="text-gray-300 leading-3 pb-[2px]">A</div>
        </div>
        <div className="ml-4 font-bold">32</div>
      </div>
      {/* right */}
      <div className="flex items-center flex-1 pl-3">
        <div className="bd-l-light+ bd-r-light+ px-[2px] pointer-resizeY">
          <div className="text-gray-300 leading-3 pb-[2px]">A</div>
        </div>
        <div className="ml-4 font-bold">24px</div>
      </div>
    </div>
  );
}

export default SpacingLineHeightText;
