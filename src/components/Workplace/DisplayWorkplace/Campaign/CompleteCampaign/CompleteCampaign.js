function CompleteCampaign() {
  const flexCenterXy = "flex items-center justify-center";
  return (
    <div className={`${flexCenterXy} flex-1`}>
      <div className={`px-8 pt-8 pb-11 bg-white shadow-lg`}>
        <div className={`text-lg font-bold pb-3 text-center`}>
          Khởi tạo thành công chiến dịch
        </div>
        <div className={`flex items-end`}>
          <div className={`mr-4`}>
            <div className={`pl-3 mb-1 text-gray-300`}>Tên Cửa Hàng</div>
            <div className={`text-sm rounded-full bd-light px-3 py-2`}>
              Denis Shepowalow
            </div>
          </div>

          <div className={`mr-4`}>
            <div className={`pl-3 mb-1 text-gray-300`}>Website</div>
            <div
              className={`text-sm rounded-full bd-light px-3 py-2 shadow-md`}
            >
              https://hyeu249.github.io/facebook-clone/
            </div>
          </div>

          <a
            className={`rounded-full bd-light p-2 bg-red-400 text-white text-xs active`}
            href="https://hyeu249.github.io/facebook-clone/"
            target="_blank"
            rel="noreferrer"
          >
            XEM THỬ
          </a>
        </div>
      </div>
    </div>
  );
}

export default CompleteCampaign;
