import { Listbox } from "@headlessui/react";
import { v4 as uuidv4 } from "uuid";
import { ArrowIcon } from "../../../../../../../../Icon/Icon";
import { useDispatch } from "react-redux";
import { mutateFontTextHandle } from "../../../../../../../../store/global/globalSlice";

function Font({ textCustom, cl1, cl2, borderCl }) {
  const dispatch = useDispatch();
  const fontWeightArray = [
    { key: uuidv4(), fontWeight: "Normal" },
    { key: uuidv4(), fontWeight: "Medium" },
    { key: uuidv4(), fontWeight: "Semibold" },
    { key: uuidv4(), fontWeight: "Bold" },
    { key: uuidv4(), fontWeight: "Extrabold" },
  ];

  const isRoundedTop =
    textCustom?.fontWeight === "SquidGame" ? `rounded-t-lg` : ``;
  const isRoundedBot = textCustom?.fontWeight === "Ruca" ? `rounded-b-lg` : ``;

  return (
    <Listbox
      as="div"
      className={`flex relative w-[50%] bd-r-gray ${cl1} pointer`}
      value={textCustom?.fontWeight}
      onChange={fontWeight => {
        setTimeout(() => {
          dispatch(
            mutateFontTextHandle({
              id: textCustom.id,
              fontWeight,
              type: "fontWeight",
            })
          );
        }, 50);
      }}
    >
      {({ open }) => {
        return (
          <>
            <Listbox.Button
              className={`flex flex-1 items-center justify-between px-3 font-bold`}
            >
              {textCustom?.fontWeight}
              <ArrowIcon
                className={`w-3 text-current ${
                  open ? "rotate-[-90deg]" : "rotate-90"
                }`}
              />
            </Listbox.Button>

            <Listbox.Options
              className={`absolute z-10 top-[110%] left-0 w-[100%] ${borderCl} bg-white`}
            >
              {fontWeightArray.map(({ key, fontWeight }) => (
                <Listbox.Option key={key} value={fontWeight}>
                  {({ active, selected }) => {
                    return (
                      <div
                        className={`${cl2} ${
                          selected
                            ? `bg-gray-200 ${isRoundedTop} ${isRoundedBot} font-bold`
                            : ""
                        }`}
                      >
                        {fontWeight}
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

export default Font;
