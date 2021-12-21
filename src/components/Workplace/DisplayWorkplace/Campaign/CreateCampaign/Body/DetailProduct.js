import { Fragment } from "react";

function DetailProduct() {
  const titleProductCl = "pb-2 text-sm";
  const inputProduct = `w-[100%] h-[30px] mb-2 pl-2 bd-light rounded-md`;
  return (
    <Fragment>
      <div className={`pb-2 text-base font-bold text-black`}>
        Chi Tiết Về Sản Phẩm
      </div>
      <div className={`py-6 px-5 mb-5 bd-light rounded-xl`}>
        <div className={`${titleProductCl}`}>Tên Sản Phẩm</div>
        <input
          className={`${inputProduct}`}
          type="text"
          placeholder="vd: Áo thun 100% Cotton - màu rêu bụi Đà Nẵng"
          spellCheck="false"
        />

        <div className={`${titleProductCl}`}>Miêu tả</div>
        <input
          className={`${inputProduct}`}
          type="text"
          placeholder="vd: T-Shirt Cotton Compact Premium là sản phẩm ..."
          spellCheck="false"
        />

        <div className={`${titleProductCl}`}>Bộ Sưu tập</div>
        <input
          className={`${inputProduct}`}
          type="text"
          placeholder="vd: Hoodie, Tshirt, Sơ mi, Polo, Tay dài, ..."
          spellCheck="false"
        />
      </div>
    </Fragment>
  );
}

export default DetailProduct;
