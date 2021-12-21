function MakeVipModal({ setIsVip }) {
  const flexCenterXy = "flex items-center justify-center";
  return (
    <div
      className={`${flexCenterXy} absolute z-10 w-[100%] h-[100vh] bg-blue-100/20`}
    >
      <div className="flex flex-col w-[500px] bg-white rounded-2xl shadow-xl font-semibold text-light">
        <div className={`flex-1 w-[100%] px-5 py-5 pb-10`}>
          Hãy nạp lần đầu để nhận được miễn phí VIP và kích hoạt chức năng này.
        </div>
        <div
          className={`bd-t-light h-14 w-[100%] pt-3 text-blue-500 text-center pointer`}
          onMouseDown={e => {
            e.stopPropagation();
            setIsVip(false);
          }}
        >
          Đã hiểu
        </div>
      </div>
    </div>
  );
}

export default MakeVipModal;
