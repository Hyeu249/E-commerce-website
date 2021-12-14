import { ArrowIcon } from "../../../../../../../Icon/Icon";

function FrontText({ setIsCustomText }) {
  return (
    <div
      className="flex items-center p-4 pointer"
      onClick={() => setIsCustomText(false)}
    >
      <ArrowIcon className="text-[#65676b] rotate-180" />
      <div className="hover:text-black ml-3">Quay lại</div>
    </div>
  );
}

export default FrontText;
