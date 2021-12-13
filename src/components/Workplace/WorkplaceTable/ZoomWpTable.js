import { ArrowIcon } from "../../../Icon/Icon";

function ZoomWpTable({ zoomTable, setZoomTable }) {
  return (
    <div
      className="group flex items-center h-[44px] ml-[-1rem] pointer"
      onClick={() => {
        if (window.innerWidth > 1100) setZoomTable((state) => !state);
      }}
    >
      <ArrowIcon
        className={`group-hover:text-white ml-auto ${
          zoomTable ? "mr-auto" : "mr-6"
        }  ${zoomTable ? "" : "rotate-180"}`}
      />
    </div>
  );
}

export default ZoomWpTable;
