import HeaderDisplayWp from "./HeaderDisplayWp/HeaderDisplayWp";
import Dashboard from "./Dashboard/Dashboard";
import Campaign from "./Campaign/Campaign";
import Inbox from "./Inbox/Inbox";
import { useParams } from "react-router-dom";

function DisplayWorkplace() {
  const { path } = useParams();
  return (
    <div className="bg-root dark:b flex flex-col flex-1">
      <HeaderDisplayWp />
      {path === "dashboard" && <Dashboard />}
      {path === "campaign" && <Campaign />}
      {path === "inbox" && <Inbox />}
    </div>
  );
}

export default DisplayWorkplace;
