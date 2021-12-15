function NextButton() {
  const buttonClass = "px-14 py-2 rounded-lg active";

  return (
    <div className="flex items-center justify-between bottom-0 px-4 h-[65px] mt-[77px] shadown-t flex-shrink-0  bg-greens-400">
      <div className={`bg-gray-300 ${buttonClass}`}>Thêm ảnh</div>
      <div className={`text-white bg-green-500 ${buttonClass}`}>Kế tiếp</div>
    </div>
  );
}

export default NextButton;
