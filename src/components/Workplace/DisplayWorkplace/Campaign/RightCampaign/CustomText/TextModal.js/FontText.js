import { Listbox } from "@headlessui/react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { ArrowIcon } from "../../../../../../../Icon/Icon";
import { mutateFontTextHandle } from "../../../../../../../store/global/globalSlice";

function FontText({ textCustom, cl1 }) {
  //
  const dispatch = useDispatch();
  const optionCl = "py-2 px-4 text-gray-400 hover:text-black";
  const isRoundedTop =
    textCustom?.fontFamily === "SquidGame" ? `rounded-t-lg` : ``;
  const isRoundedBot = textCustom?.fontFamily === "Ruca" ? `rounded-b-lg` : ``;

  const fontsArray = [
    { key: 1, fontFamily: "SquidGame" },
    { key: 2, fontFamily: "Matterdi" },
    { key: 3, fontFamily: "Cavorting" },
    { key: 4, fontFamily: "Antro" },
    { key: 5, fontFamily: "Respondent" },
    { key: 6, fontFamily: "Ruca" },
  ];

  return (
    <Listbox
      as="div"
      className={`relative flex items-center justify-between pointer ${cl1}`}
      value={textCustom?.fontFamily}
      onChange={fontFamily => {
        setTimeout(() => {
          dispatch(
            mutateFontTextHandle({
              id: textCustom.id,
              fontFamily,
              type: "fontFamily",
            })
          );
        }, 50);
      }}
    >
      {({ open }) => {
        return (
          <>
            <Listbox.Button
              className={`flex items-center justify-between flex-1 text-left font-bold text-light h-[100%] px-3`}
            >
              {textCustom?.fontFamily}
              <ArrowIcon
                className={`w-3 text-current ${
                  open ? "rotate-[-90deg]" : "rotate-90"
                }`}
              />
            </Listbox.Button>

            <Listbox.Options
              className={`flex-1 absolute z-10 top-[110%] left-0 w-[100%] bg-white bd-light rounded-lg`}
            >
              {fontsArray.map(({ key, fontFamily }) => (
                <Listbox.Option key={key} value={fontFamily}>
                  {({ active, selected }) => {
                    return (
                      <div
                        className={`${optionCl} ${
                          selected
                            ? `bg-gray-200 ${isRoundedTop} ${isRoundedBot} font-bold`
                            : ""
                        }`}
                      >
                        {fontFamily}
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

export default FontText;
