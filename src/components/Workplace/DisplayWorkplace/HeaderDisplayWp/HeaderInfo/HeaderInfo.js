import { useSelector } from "react-redux";
import { PlusIcon, BellIcon } from "../../../../../Icon/Icon";

function HeaderInfo() {
  const user = useSelector((state) => state.user);

  const circleClass =
    "flex justify-center items-center w-[40px] h-[40px] rounded-full active";

  return (
    <div className="flex justify-evenly items-center w-[180px] pr-[20px]">
      <div className={`${circleClass} bg-yellow-400`}>
        <PlusIcon className="text-[#424242]" />
      </div>
      <div className={`${circleClass} bg-[#e5e5e5]`}>
        <BellIcon
          className="text-[#424242]"
          fill="rgba(243, 244, 246, var(--tw-bg-opacity))"
        />
      </div>

      <img
        className={`bd-light ${circleClass}`}
        src={user.avatar}
        alt="avatar"
      />
    </div>
  );
}

export default HeaderInfo;
