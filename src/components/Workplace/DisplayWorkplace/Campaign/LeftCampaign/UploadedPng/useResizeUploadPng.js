import { useEffect } from "react";

function useResizeUploadPng({ pngRef, cornerSePngRef, allowRangeRef }) {
  useEffect(() => {
    const pngFile = pngRef.current;
    const cornerSePng = cornerSePngRef.current;
    const allowRange = allowRangeRef.current;
    let isResizing = false;
    const mousedownHandle = e => {
      let prevX = e.clientX;
      let prevY = e.clientY;

      const mousemoveHandle = e => {
        if (!isResizing) {
          const rect = pngFile.getBoundingClientRect();
          const dadRect = allowRange.getBoundingClientRect();

          pngFile.style.left =
            rect.left - (prevX - e.clientX) - dadRect.left + "px";

          pngFile.style.top =
            rect.top - (prevY - e.clientY) - dadRect.top + "px";

          prevX = e.clientX;
          prevY = e.clientY;
        }
      };

      const mouseupHandle = e => {
        window.removeEventListener("mousemove", mousemoveHandle);
        window.removeEventListener("mouseup", mouseupHandle);
        // allowRange.removeEventListener("mousemove", mousemoveHandle);
        // allowRange.removeEventListener("mouseup", mouseupHandle);
      };

      window.addEventListener("mousemove", mousemoveHandle);
      window.addEventListener("mouseup", mouseupHandle);
      // allowRange.addEventListener("mousemove", mousemoveHandle);
      // allowRange.addEventListener("mouseup", mouseupHandle);
    };
    pngFile.addEventListener("mousedown", mousedownHandle);

    // resize
    const resizer = cornerSePng;

    const mousedownResizeHandle = e => {
      isResizing = true;

      let prevX = e.clientX;

      const mousemoveHandle = e => {
        if (isResizing) {
          const rect = pngFile.getBoundingClientRect();

          pngFile.style.width = rect.width - (prevX - e.clientX) + "px";
          pngFile.style.height = rect.height - (prevX - e.clientX) + "px";
          // el.style.height = rect.height - (prevY - e.clientY) + "px";

          prevX = e.clientX;
        }
      };

      const mouseupHandle = e => {
        window.removeEventListener("mousemove", mousemoveHandle);
        window.removeEventListener("mouseup", mouseupHandle);
        isResizing = false;
      };

      window.addEventListener("mousemove", mousemoveHandle);
      window.addEventListener("mouseup", mouseupHandle);
    };

    resizer.addEventListener("mousedown", mousedownResizeHandle);

    return () => {
      pngFile.removeEventListener("mousedown", mousedownHandle);
      resizer.removeEventListener("mousedown", mousedownResizeHandle);
    };
  }, [pngRef, cornerSePngRef, allowRangeRef]);
}

export default useResizeUploadPng;
