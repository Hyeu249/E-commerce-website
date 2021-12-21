function NameStore() {
  return (
    <div className={`flex justify-between py-5`}>
      <div className={`flex-1 mr-6`}>
        <div className={`text-sm leading-7`}>Tên Cửa Hàng</div>
        <input
          className={`w-[100%] h-[35px] bd-light rounded-md`}
          type="text"
        />
      </div>
      <div>
        <div className={`text-sm leading-7`}>Ngày Khởi Tạo</div>
        <input className={`h-[35px] bd-light rounded-md`} type="text" />
      </div>
    </div>
  );
}

export default NameStore;
