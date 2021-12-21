import OptionPrice from "./OptionPrice";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { updatePriceShirtHandle } from "../../../../../../store/global/globalSlice";
import { Fragment, useState } from "react";
import ReactDOM from "react-dom";
// import MakeVipModal from "./MakeVipModal";
import MakeVipModal from "../../../../../MakeVipModal";

function FrameOptionPrice({
  uploadedPngs,
  customTextOnShirt,

  isFocus,
}) {
  const dispatch = useDispatch();
  const isHidden = `${isFocus ? "" : "hidden"}`;
  const frameSelectClass = `${isHidden} absolute top-[100%] left-[0] w-[100%] z-10 pt-2`;
  const selectClass = "rounded-2xl bg-white ";
  const [isVip, setIsVip] = useState();

  const priceArray = [
    // { id: uuidv4(), price: "60.000 đồng" },
    // { id: uuidv4(), price: "250.000 đồng" },
    // { id: uuidv4(), price: "550.000 đồng" },
    // { id: uuidv4(), price: "Đặt bằng tay" },
    { id: uuidv4(), price: "60" },
    { id: uuidv4(), price: "250" },
    { id: uuidv4(), price: "550" },
    { id: uuidv4(), price: "Đặt bằng tay" },
  ];
  return (
    <Fragment>
      <div className={`${frameSelectClass}`}>
        <div className={`${selectClass} py-2 bd-light`}>
          {priceArray.map(({ id, price }) => (
            <OptionPrice
              key={id}
              price={price}
              onMouseDown={e => {
                if (price === "Đặt bằng tay") price = "";
                // if (price === "Đặt bằng tay") {
                //   setIsVip(true);
                //   return;
                // }

                dispatch(
                  updatePriceShirtHandle({
                    png: uploadedPngs,
                    text: customTextOnShirt,
                    price,
                  })
                );
              }}
            />
          ))}
        </div>
      </div>
      {/* modal */}
      {isVip &&
        ReactDOM.createPortal(
          <MakeVipModal setIsVip={setIsVip} />,
          document.getElementById("modal")
        )}
    </Fragment>
  );
}

export default FrameOptionPrice;
