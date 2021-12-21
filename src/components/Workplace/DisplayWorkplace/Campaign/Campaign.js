import LeftCampain from "./LeftCampaign/LeftCampain";
import RightCampaign from "./RightCampaign/RightCampaign";
import { Routes, Route, useParams } from "react-router-dom";
import { Fragment } from "react";
import UploadFileArea from "./UploadFileArea/UploadFileArea";
import CreateCampaign from "./CreateCampaign/CreateCampaign";
import CompleteCampaign from "./CompleteCampaign/CompleteCampaign";

function Campaign() {
  const params = useParams();
  const fFlexClass = "flex flex-1 h-[45vh]";
  const fFontClass = "dark:t font-semibold text-sm+ text-light";

  return (
    <div className={`${fFlexClass} ${fFontClass}`}>
      <Routes>
        <Route
          path="edit"
          element={
            <Fragment>
              <LeftCampain />
              <RightCampaign />
            </Fragment>
          }
        />

        <Route path="edit/create" element={<CreateCampaign />} />
        <Route path="edit/create/complete" element={<CompleteCampaign />} />
      </Routes>
      {params["*"] !== "edit" &&
        params["*"] !== "edit/create" &&
        params["*"] !== "edit/create/complete" && <UploadFileArea />}
    </div>
  );
}

export default Campaign;
