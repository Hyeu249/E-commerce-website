import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { displayPositionTextHandle } from "../../../../../../../../store/global/globalSlice";

function useDissplayViewText(id) {
  const dispatch = useDispatch();

  useEffect(() => {
    const textAreaTarget = document.getElementById(id);
    const mousedownResizeHandle = () => {
      const mousemoveHandle = () => {
        dispatch(displayPositionTextHandle({ id }));
      };
      const mouseupHandle = e => {
        window.removeEventListener("mousemove", mousemoveHandle);
        window.removeEventListener("mouseup", mouseupHandle);
      };
      window.addEventListener("mousemove", mousemoveHandle);
      window.addEventListener("mouseup", mouseupHandle);
    };

    textAreaTarget?.addEventListener("mousedown", mousedownResizeHandle);

    const upEvent = document.createEvent("MouseEvents");
    upEvent.initEvent("mouseup", true, true);
    window?.dispatchEvent(upEvent);

    return () => {
      textAreaTarget?.removeEventListener("mousedown", mousedownResizeHandle);
    };
  }, [id, dispatch]);

  return true;
}

export default useDissplayViewText;
