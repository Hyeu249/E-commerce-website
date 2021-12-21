import React from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import UploadFileButton from "./UploadFileButton";
import { useDispatch } from "react-redux";
import { uploadPngHandle } from "../../../../../store/global/globalSlice";

function UploadFileArea() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const flexCenterXy = "flex items-center justify-center";

  return (
    <div className={`flex-1 ${flexCenterXy} `}>
      <div className={`${flexCenterXy} flex-col w-[60%] h-[60%] bd-dashed-2`}>
        <div className="mb-4">Thả ảnh ở đây để định hình thiết kế!</div>
        <UploadFileButton
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
                navigate("edit");
              };
              //end onLoad
            }
          }}
        />
      </div>
    </div>
  );
}

export default React.memo(UploadFileArea);
