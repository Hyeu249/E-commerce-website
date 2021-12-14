function OptionPrice({ price, onClick }) {
  const optClass = "px-4 py-2 text-gray-400 hover:text-black pointer";
  return (
    <div className={`${optClass}`} onClick={onClick}>
      {price}
    </div>
  );
}

export default OptionPrice;
