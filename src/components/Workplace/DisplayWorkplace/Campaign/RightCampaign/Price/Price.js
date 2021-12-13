import { AccountIcon } from "../../../../.././../Icon/Icon";
import OptionPrice from "./OptionPrice";

function Price({ price, setPrice }) {
  const dadClass = "group relative flex justify-between";
  const frameSelectClass =
    "group-hover:z-0 z-[-1] absolute top-[100%] left-[0] w-[100%] pt-2";
  const selectClass = "rounded-2xl";
  return (
    <div
      className={`${dadClass} leading-3+ bd-light rounded-2xl mx-4 mt-4 p-4`}
    >
      Giá bán:
      <AccountIcon className="w-4" />
      <div className={`${frameSelectClass}`}>
        <div className={`${selectClass} py-2 bd-light`}>
          <OptionPrice price="60.000 đồng" />
          <OptionPrice price="250.000 đồng" />
          <OptionPrice price="550.000 đồng" />
          <OptionPrice price="Đặt bằng tay" />
        </div>
      </div>
    </div>
  );
}

export default Price;
