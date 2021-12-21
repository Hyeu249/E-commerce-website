import { useDispatch } from "react-redux";
import { updatePriceShirtHandle } from "../../../../../../store/global/globalSlice";

function InputPrice({ uploadedPngs, customTextOnShirt, infoShirt }) {
  const dispatch = useDispatch();
  const absoluteTL0 = "absolute top left-0 w-[100%] h-[100%]";
  const isRemoveColor = infoShirt.price ? "text-transparent" : "";

  return (
    <div className={`${absoluteTL0} flex items-center`}>
      <input
        value={infoShirt.price || ""}
        id="InputPrice"
        className={`${absoluteTL0} rounded-2xl pl-20 pb-1 ${isRemoveColor} bg-transparent`}
        type="text"
        placeholder="Nhập giá"
        onChange={e => {
          const isNan = Number.isNaN(Number(e.target.value));
          const isZero = Number(e.target.value) === 0;
          const isSpace = e.target.value === " ";
          const isNothing = e.target.value === "";

          for (let i = 0; i < e.target.value.length; i++) {
            if (e.target.value[i] === " ") {
              dispatch(
                updatePriceShirtHandle({
                  png: uploadedPngs,
                  text: customTextOnShirt,
                  price: "",
                })
              );
              e.target.value = "";
              return;
            }
          }

          if (isNan || isZero || isSpace || isNothing) {
            dispatch(
              updatePriceShirtHandle({
                png: uploadedPngs,
                text: customTextOnShirt,
                price: "",
              })
            );
            e.target.value = "";
            return;
          }
          if (e.target.value.length > 3) {
            e.target.value = infoShirt.price.slice(0, 3);
            return;
          }

          // const inputPrice = new Intl.NumberFormat("de-DE").format(
          //   e.target.value
          // );

          const inputPrice = e.target.value;

          dispatch(
            updatePriceShirtHandle({
              png: uploadedPngs,
              text: customTextOnShirt,
              price: `${inputPrice}`,
            })
          );
        }}
      />
      {infoShirt.price && (
        <label className={`pl-[80px]`} htmlFor="InputPrice">
          {infoShirt.price}.000 đồng
        </label>
      )}
    </div>
  );
}

export default InputPrice;
