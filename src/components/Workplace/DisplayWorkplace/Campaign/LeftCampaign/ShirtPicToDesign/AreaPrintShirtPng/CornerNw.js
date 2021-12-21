import trashImg from "../../../../../../../img/xDelete.png";
import { useDispatch } from "react-redux";
import { deletePngHandle } from "../../../../../../../store/global/globalSlice";

function CornerNw({ id, cl: cornerCl, myClick }) {
  const dispatch = useDispatch();
  const isHidden = myClick[1] ? "flex" : "hidden";
  return (
    <div
      className={`${isHidden} ${cornerCl} z-[1] top-[-7px] left-[-7px]`}
      onClick={() => {
        dispatch(deletePngHandle(id));
      }}
    >
      <img className={`w-5 h-5 p-1 active-70`} src={trashImg} alt="trash" />
    </div>
  );
}

export default CornerNw;
