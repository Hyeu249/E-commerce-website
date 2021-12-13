import WorkplaceTable from "./WorkplaceTable/WorkplaceTable";
import DisplayWorkplace from "./DisplayWorkplace/DisplayWorkplace";

function Workplace() {
  return (
    <div className="flex h-[100vh]">
      <WorkplaceTable />
      <DisplayWorkplace />
    </div>
  );
}

export default Workplace;
