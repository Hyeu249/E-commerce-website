import PickSideShirt from "./PickSideShirt";

function FrontBackShirt({ p1: textClass, p2: setIsFront }) {
  return (
    <div className="flex items-center h-[10%] bd-t-light">
      <PickSideShirt
        text="Front"
        id="frontShirt"
        textClass={textClass}
        checkedDf="true"
        onClick={() => setIsFront(true)}
      />
      <PickSideShirt
        text="Back"
        id="backShirt"
        textClass={textClass}
        onClick={() => setIsFront(false)}
      />
    </div>
  );
}

export default FrontBackShirt;
