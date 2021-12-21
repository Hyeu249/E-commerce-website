import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { mutateWidthTextHandle } from "../../../../../../../../store/global/globalSlice";

function useCustomSizeText([ref, { id } = "", acreage, operator]) {
  const dispatch = useDispatch();
  useEffect(() => {
    const arrow = ref.current;
    const mouseDownHandle = () => {
      const interval = setInterval(() => {
        dispatch(mutateWidthTextHandle({ id, acreage, operator }));
      }, 150);

      const mouseUpHandle = () => {
        clearInterval(interval);
        arrow.removeEventListener("mouseup", mouseUpHandle);
      };
      arrow.addEventListener("mouseup", mouseUpHandle);
    };
    arrow.addEventListener("mousedown", mouseDownHandle);
    return () => {
      arrow.removeEventListener("mousedown", mouseDownHandle);
    };
  }, [operator, id, acreage, ref, dispatch]);

  return true;
}

export default useCustomSizeText;
