import Logo from "../../Logo";
import ItemsWorkplaceTable from "./ItemsWorkplaceTable/ItemsWorkplaceTable";
import { useState, useEffect } from "react";
import ZoomWpTable from "./ZoomWpTable";
import HelpWpTable from "./HelpWpTable";
import { useParams } from "react-router-dom";

function WorkplaceTable() {
  const { path } = useParams();

  //
  const [zoomTable, setZoomTable] = useState(false);
  const isBan = `${zoomTable === "ban" ? "ml-[-72px] w-[72px]" : ""}`;
  const isZoom = `${zoomTable === true ? "w-[72px]" : ""}`;

  useEffect(() => {
    const width_window = window.innerWidth;
    if (path === "campaign") setZoomTable(true);
    if (width_window < 1100) setZoomTable(true);
    if (width_window < 550) setZoomTable("ban");

    const autoResize = () => {
      if (window.innerWidth < 1100 && window.innerWidth > 550) {
        return setZoomTable(true);
      }
      if (window.innerWidth < 550) return setZoomTable("ban");

      setZoomTable(false);
    };
    window.addEventListener("resize", autoResize);

    return () => window.removeEventListener("resize", autoResize);
  }, [path]);

  return (
    <div
      className={`flex flex-col w-[300px] ${isBan} ${isZoom} pl-4 pt-10 bg-[#051e34] transition-custom`}
    >
      {!zoomTable && <Logo className="pl-6" />}
      <ItemsWorkplaceTable zoomTable={zoomTable} />
      {/* <div className="h-[53px] bg-transparent bg-red-500"></div> */}
      {<HelpWpTable isBan={isBan} zoomTable={zoomTable} />}
      <ZoomWpTable zoomTable={zoomTable} setZoomTable={setZoomTable} />
    </div>
  );
}

export default WorkplaceTable;
