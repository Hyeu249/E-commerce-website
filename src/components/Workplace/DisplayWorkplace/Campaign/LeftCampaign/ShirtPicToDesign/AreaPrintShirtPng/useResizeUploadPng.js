import { useEffect } from "react";

function useResizeUploadPng({ targetRef, cornerSePngRef, allowRangeRef }) {
  useEffect(() => {
    const target = targetRef.current;
    const cornerSePng = cornerSePngRef?.current;
    const allowRange = allowRangeRef.current;

    let isResizing = false;
    const mousedownHandle = e => {
      let prevX = e.clientX;
      let prevY = e.clientY;
      // const initialRect = target.getBoundingClientRect();

      const mousemoveHandle = e => {
        const rect = target.getBoundingClientRect();
        const dadRect = allowRange.getBoundingClientRect();

        if (!isResizing) {
          target.style.left =
            rect.left - (prevX - e.clientX) - (dadRect.left + 1) + "px";

          target.style.top =
            rect.top - (prevY - e.clientY) - (dadRect.top + 1) + "px";

          prevX = e.clientX;
          prevY = e.clientY;
        }
      };

      const mouseupHandle = e => {
        window.removeEventListener("mousemove", mousemoveHandle);
        window.removeEventListener("mouseup", mouseupHandle);
      };

      window.addEventListener("mousemove", mousemoveHandle);
      window.addEventListener("mouseup", mouseupHandle);
    };
    target.addEventListener("mousedown", mousedownHandle);

    // resize
    const resizer = cornerSePng;

    const mousedownResizeHandle = e => {
      isResizing = true;

      let prevX = e.clientX;
      // let prevY = e.clientY;

      const mousemoveHandle = e => {
        if (isResizing) {
          const rect = target.getBoundingClientRect();

          // target.style.width = rect.width - (prevX - e.clientX) + "px";
          // target.style.height = rect.height - (prevY - e.clientY) + "px";

          target.style.width = rect.width - (prevX - e.clientX) + "px";
          // target.style.height = rect.height - (prevY - e.clientY) + "px";

          prevX = e.clientX;
          // prevY = e.clientY;
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

    resizer?.addEventListener("mousedown", mousedownResizeHandle);

    return () => {
      target?.removeEventListener("mousedown", mousedownHandle);
      resizer?.removeEventListener("mousedown", mousedownResizeHandle);
    };
  }, [targetRef, cornerSePngRef, allowRangeRef]);
}

export default useResizeUploadPng;
