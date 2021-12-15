import { useEffect } from "react";

function useCustomSizeText([ref, setState, operator]) {
  useEffect(() => {
    const mouseUpHandle = () => {
      setState(state => [state[0], true]);
      window.removeEventListener("mouseup", mouseUpHandle);
    };
    const arrowUp = ref.current;

    const mouseDownHandle = () => {
      const interval = setInterval(() => {
        setState(([number, isMouseUp]) => {
          if (isMouseUp) {
            clearInterval(interval);
            return [number, false];
          }
          if (operator === "true") return [number + 1, false];
          if (operator === "false") return [number - 1, false];
        });
      }, 150);
      window.addEventListener("mouseup", mouseUpHandle);
    };
    arrowUp.addEventListener("mousedown", mouseDownHandle);
    return () => {
      arrowUp.removeEventListener("mousedown", mouseDownHandle);
    };
  }, [operator, ref, setState]);

  return true;
}

export default useCustomSizeText;
