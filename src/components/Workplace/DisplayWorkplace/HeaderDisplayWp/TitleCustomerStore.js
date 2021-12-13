import openBox from "../../../../img/open-box.png";

function TitleCustomerStore() {
  return (
    <div className="flex flex-col justify-around items-center w-[200px] border-r-1px pointer">
      <div>
        <div className="text-sm text-gray-400 font-medium pb-1">Cửa hàng</div>
        <div className="flex items-center">
          <img className="w-8 h-8 mr-2" src={openBox} alt="customer's store" />
          <div className="text-base text-[#65676b] font-semibold">
            Selling Store
          </div>
        </div>
      </div>
    </div>
  );
}

export default TitleCustomerStore;
