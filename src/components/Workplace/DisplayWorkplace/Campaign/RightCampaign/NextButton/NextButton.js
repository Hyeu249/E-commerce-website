import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import {
  uploadPngHandle,
  certifyInfoShirtHandle,
} from "../../../../../../store/global/globalSlice";
import { useNavigate } from "react-router-dom";

function NextButton() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const infoTshirt = useSelector(state => state.infoShirt);

  const isValidInfoTshirt = infoTshirt?.price > 40 ? true : false;

  const isBgGreen = isValidInfoTshirt
    ? "bg-green-500"
    : "bg-red-500 cursor-[no-drop] !scale-100";

  const buttonClass = "px-14 py-2 rounded-lg select-none active";
  const id = uuidv4();

  return (
    <div className="flex items-center justify-between bottom-0 px-4 h-[65px] mt-[77px] shadown-t flex-shrink-0  bg-greens-400">
      <div>
        <input
          id={id}
          type="file"
          accept="image/jpeg, image/png"
          className="absolute invisible"
          onChange={e => {
            if (e.target.files[0]) {
              const reader = new FileReader();
              reader.readAsDataURL(e.target.files[0]);
              reader.onload = readerEvent => {
                dispatch(
                  uploadPngHandle({
                    id: uuidv4(),
                    nameFile: e.target.files[0].name,
                    img: readerEvent.target.result,
                  })
                );
                //end dispatch
              };
              //end onLoad
            }
          }}
        />
        <label
          htmlFor={id}
          className={`bg-gray-200 ${buttonClass} inline-block`}
        >
          Thêm ảnh
        </label>
      </div>
      <div
        className={`text-white ${isBgGreen} ${buttonClass}`}
        onClick={() => {
          if (isValidInfoTshirt) {
            dispatch(certifyInfoShirtHandle(true));
            navigate("create");
          }
        }}
      >
        Kế tiếp
      </div>
    </div>
  );
}

export default NextButton;
