import React from "react";
import ItemWorkplaceTable from "./ItemWorkplaceTable";
import {
  DashboardNoBgIcon,
  CampaignNoBgIcon,
  InboxNoBgIcon,
} from "../../../../Icon/Icon";
import { useParams, useNavigate } from "react-router-dom";

function ItemsWorkplaceTable({ zoomTable }) {
  const { path } = useParams();
  const navigate = useNavigate();
  return (
    <div className="mt-10 flex-1 scrollBar">
      <ItemWorkplaceTable
        id="dashboardworkTable"
        name={zoomTable ? "" : "Bảng điều khiển"}
        Icon={DashboardNoBgIcon}
        zoomTable={zoomTable}
        checkedDf={path === "dashboard" ? "true" : ""}
        onClick={() => navigate("/workplace/dashboard")}
      />
      <ItemWorkplaceTable
        id="createCampaignWorkTable"
        name={zoomTable ? "" : "Tạo campaign"}
        Icon={CampaignNoBgIcon}
        zoomTable={zoomTable}
        checkedDf={path === "campaign" ? "true" : ""}
        onClick={() => navigate("/workplace/campaign")}
      />
      <ItemWorkplaceTable
        id="inboxWorkTable"
        name={zoomTable ? "" : "Inbox"}
        Icon={InboxNoBgIcon}
        zoomTable={zoomTable}
        checkedDf={path === "inbox" ? "true" : ""}
        onClick={() => navigate("/workplace/inbox")}
      />
    </div>
  );
}

export default React.memo(ItemsWorkplaceTable);
