import { Fragment } from "react";
import reactDom from "react-dom";
import { v4 as uuidv4 } from "uuid";
import TextModal from "./TextModal.js/TextModal";
import { useDispatch } from "react-redux";
import { customTextHandle } from "../../../../../../store/global/globalSlice";

function CustomText({ thisTextToCustom }) {
  const dispatch = useDispatch();

  return (
    <Fragment>
      <div
        className="bd-light mx-4 p-4 rounded-2xl pointer hover:text-black"
        onClick={() => {
          const id = uuidv4();
          dispatch(
            customTextHandle({
              id,
              focus: true,
              width: 160,
              height: 50,
              fontFamily: "San Serif",
              fontWeight: "Normal",
              fontSize: "20",
              color: "#FFFFFF",
              spacing: "0",
              lineHeight: "1",
              textAlign: "center",
            })
          );
          setTimeout(() => {
            document.getElementById(id).focus();
          }, 200);

          //end dispatch
        }}
      >
        Thêm chữ vào áo ...
      </div>

      {/* modal */}
      {reactDom.createPortal(
        <TextModal thisTextToCustom={thisTextToCustom} />,
        document.getElementById("modal")
      )}
    </Fragment>
  );
}

export default CustomText;
