import { Fragment } from "react";
import reactDom from "react-dom";
import TextModal from "./TextModal.js/TextModal";

function CustomText({ isCustomText, setIsCustomText }) {
  return (
    <Fragment>
      <div
        className="bd-light mx-4 p-4 rounded-2xl pointer hover:text-black"
        onClick={() => setIsCustomText(true)}
      >
        Thêm chữ vào áo ...
      </div>

      {/* modal */}
      {reactDom.createPortal(
        <TextModal
          isCustomText={isCustomText}
          setIsCustomText={setIsCustomText}
        />,
        document.getElementById("modal")
      )}
    </Fragment>
  );
}

export default CustomText;
