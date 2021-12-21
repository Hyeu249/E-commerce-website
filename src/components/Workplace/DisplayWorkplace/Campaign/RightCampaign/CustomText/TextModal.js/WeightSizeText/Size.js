import sizeData from "./SizeData";
import { useDispatch } from "react-redux";
import { mutateFontTextHandle } from "../../../../../../../../store/global/globalSlice";
import { Listbox } from "@headlessui/react";

function Size({ textCustom, cl1, cl2, borderCl }) {
  const dispatch = useDispatch();

  const isRoundedTop =
    textCustom?.fontWeight === "SquidGame" ? `rounded-t-lg` : ``;
  const isRoundedBot = textCustom?.fontWeight === "Ruca" ? `rounded-b-lg` : ``;

  return (
    <Listbox
      as="div"
      className={`flex relative w-[50%] bd-r-gray ${cl1} pointer`}
      value={textCustom?.fontSize}
      onChange={fontSize => {
        setTimeout(() => {
          dispatch(
            mutateFontTextHandle({
              id: textCustom.id,
              fontSize,
              type: "fontSize",
            })
          );
        }, 50);
      }}
    >
      <Listbox.Button
        className={`flex flex-1 items-center justify-between px-3 font-bold`}
      >
        {textCustom?.fontSize}px
        <div className={`text-gray-300`}>Aa</div>
      </Listbox.Button>

      <Listbox.Options
        className={`absolute z-10 top-[110%] left-0 w-[100%] h-[193px] ${borderCl} bg-white scrollBar`}
      >
        {sizeData.map(({ key, size }) => (
          <Listbox.Option key={size} value={size}>
            {({ active, selected }) => {
              return (
                <div
                  className={`${cl2} ${
                    selected
                      ? `bg-gray-200 ${isRoundedTop} ${isRoundedBot} font-bold`
                      : ""
                  }`}
                >
                  {size}px
                </div>
              );
            }}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
}

export default Size;
