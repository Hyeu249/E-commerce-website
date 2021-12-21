import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { mutateFontTextHandle } from "../../../../../../../store/global/globalSlice";

function useSpacingLineHeightText(ref, textCustom, coordinate) {
  const dispatch = useDispatch();

  useEffect(() => {
    var body = document.getElementsByTagName("BODY")[0];
    var div = document.getElementsByTagName("div");
    const el = ref?.current;

    const mousedown = () => {
      const windowClientX = window.event.clientX;
      const windowClientY = window.event.clientY;

      const mousemove = e => {
        if (coordinate === "x") {
          body.style.cursor = "e-resize";
          dispatch(
            mutateFontTextHandle({
              id: textCustom.id,
              spacing: ((e?.clientX - windowClientX) * 0.1).toFixed(1),
              type: "spacing",
            })
          );
        }
        // lineHeight
        if (coordinate === "y") {
          for (let i = 0; i < div.length; i++) {
            div[i].style.setProperty("cursor", "n-resize", "important");
          }
          dispatch(
            mutateFontTextHandle({
              id: textCustom.id,
              lineHeight: ((windowClientY - e?.clientY) * 0.1 + 1).toFixed(1),
              type: "lineHeight",
            })
          );
          //end dispatch
        }
      };
      const mouseup = () => {
        for (let i = 0; i < div.length; i++) {
          div[i].style.cursor = "";
        }
        body.style.cursor = "";
        window.removeEventListener("mousemove", mousemove);
        window.removeEventListener("mouseup", mouseup);
      };

      window.addEventListener("mousemove", mousemove);
      window.addEventListener("mouseup", mouseup);
    };

    el?.addEventListener("mousedown", mousedown);
    return () => el?.removeEventListener("mousedown", mousedown);
  }, [ref, textCustom, dispatch, coordinate]);

  return true;
}

export default useSpacingLineHeightText;
