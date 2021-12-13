import { useCallback, useState } from "react";
import { useResizeDetector } from "react-resize-detector";

function ItemWorkplaceTable({ name, Icon, checkedDf, id, zoomTable, onClick }) {
  const [isText, setIsText] = useState();

  const onResize = useCallback((width) => {
    if (width > 180) return setIsText(true); //260 max-width
    setIsText(false);
  }, []);
  const { ref } = useResizeDetector({ onResize });
  // -------
  const labelBgClass = zoomTable
    ? "peer-checked:bg-none"
    : "peer-checked:bg-yellow-400";
  const labelClass = `${labelBgClass} peer-checked:text-black w-[100%] pl-10 py-2 font-medium rounded-lg pointer`;

  const iconCLass = zoomTable
    ? "peer-checked:text-[#3578E5]"
    : "peer-checked:text-black";
  const isZoom = zoomTable ? "h-[32px]" : "h-[40px]";
  return (
    <div
      ref={ref}
      className={`flex relative text-[#ffffffb3] hover:text-white mb-2 mr-4`}
    >
      <input
        id={id}
        type="radio"
        name="ItemWorkplaceTable"
        className="peer invisible absolute"
        defaultChecked={checkedDf}
      />
      <Icon
        className={`${iconCLass} absolute translate-top-center ${
          zoomTable ? "left-[8px]" : "left-[5px]"
        }  bg-none pointer-events-none`}
      />
      <label
        className={`${labelClass} ${isZoom}`}
        htmlFor={id}
        onClick={onClick}
      >
        {isText ? name : ""}
      </label>
    </div>
  );
}

export default ItemWorkplaceTable;
