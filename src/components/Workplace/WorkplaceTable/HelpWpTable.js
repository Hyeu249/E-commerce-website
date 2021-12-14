import { useCallback, useState } from "react";
import { useResizeDetector } from "react-resize-detector";

function HelpWpTable({ zoomTable, isBan }) {
  const [moreThan100, setMoreThan100] = useState();
  const isZoom = zoomTable ? "!w-[72px]" : "";

  // const isDisplayNone = zoomTable ? "hidden" : "";

  const onResize = useCallback((width) => {
    if (width > 180) return setMoreThan100(true);
    setMoreThan100(false);
  }, []);
  const { ref } = useResizeDetector({ onResize });

  const titleHelpClass = moreThan100
    ? "text-white pointer"
    : "text-[#051e34] select-none";
  const contentHelpClass = moreThan100
    ? "text-gray-400 pointer"
    : "text-[#051e34] select-none";

  return (
    <div
      ref={ref}
      // fixed left-0 bottom-10 w-[300px]
      className={`${isBan} ${isZoom} pb-2 pl-4 bd-b-light ${titleHelpClass} font-medium bg-[#051e34]`}
    >
      Need help?
      <div className={`text-sm font-normal ${contentHelpClass}`}>
        Open our help center
      </div>
    </div>
  );
}

export default HelpWpTable;
