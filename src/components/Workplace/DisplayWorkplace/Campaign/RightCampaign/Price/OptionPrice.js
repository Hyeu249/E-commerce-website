function OptionPrice({ price, onMouseDown }) {
  const optClass = "px-4 py-2 text-gray-400 hover:text-black pointer";
  const isVipCl = price === "Đặt bằng tay" ? `!text-yellow-500` : "";
  return (
    <div className={`${optClass} ${isVipCl}`} onMouseDown={onMouseDown}>
      {price}
      {price === "Đặt bằng tay" ? ` (VIP)` : `.000 đồng`}
    </div>
  );
}

export default OptionPrice;
