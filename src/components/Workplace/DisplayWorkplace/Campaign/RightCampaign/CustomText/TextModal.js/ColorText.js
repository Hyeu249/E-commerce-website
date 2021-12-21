import { ArrowIcon } from "../../../../../../../Icon/Icon";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { mutateFontTextHandle } from "../../../../../../../store/global/globalSlice";
import { Listbox } from "@headlessui/react";

function ColorText({ textCustom, cl1, cl2 }) {
  const dispatch = useDispatch();

  const flexNormalClass = "flex items-center justify-between px-3";
  const optionCl = "py-2 px-4 text-gray-400 hover:text-black";
  const borderCl = `rounded ${
    textCustom?.color === "#FFFFFF" ? "border-2" : ""
  }`;

  const isRoundedTop =
    textCustom?.fontWeight === "SquidGame" ? `rounded-t-lg` : ``;
  const isRoundedBot = textCustom?.fontWeight === "Ruca" ? `rounded-b-lg` : ``;

  const textColorArray = [
    {
      key: uuidv4(),
      color: "#FFFFFF",
    },
    {
      key: uuidv4(),
      color: "#000000",
    },
    {
      key: uuidv4(),
      color: "#EE2A28",
    },
    {
      key: uuidv4(),
      color: "#0059A3",
    },
    {
      key: uuidv4(),
      color: "#FFA500",
    },
  ];

  return (
    <Listbox
      as="div"
      className={`relative mt-5 ${cl1} ${flexNormalClass} pointer`}
      value={textCustom?.color}
      onChange={color => {
        setTimeout(() => {
          dispatch(
            mutateFontTextHandle({
              id: textCustom.id,
              color,
              type: "color",
            })
          );
        }, 50);
      }}
    >
      {({ open }) => {
        return (
          <>
            <Listbox.Button className={`w-[100%] h-[100%] font-bold`}>
              <div className="flex">
                <div
                  className={`w-6 h-6 mr-4 ${borderCl}`}
                  style={{ backgroundColor: textCustom?.color }}
                ></div>
                <div>{textCustom?.color}</div>
              </div>
            </Listbox.Button>
            <ArrowIcon
              className={`w-3 text-current ${
                open ? "rotate-[-90deg]" : "rotate-90"
              }`}
            />

            <Listbox.Options
              className={`absolute z-10 top-[110%] w-[100%] left-0 ${cl2} bg-white`}
            >
              {textColorArray.map(({ key, color }) => (
                <Listbox.Option key={key} value={color}>
                  {({ active, selected }) => {
                    return (
                      <div
                        className={`${optionCl} ${
                          selected
                            ? `bg-gray-200 ${isRoundedTop} ${isRoundedBot} font-bold`
                            : ""
                        }`}
                      >
                        {color}
                      </div>
                    );
                  }}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </>
        );
      }}
    </Listbox>
  );
}

export default ColorText;
