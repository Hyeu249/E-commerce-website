function OptionPrice({ price }) {
  const optClass = "px-4 py-2 hover:text-black pointer";
  return <div className={`${optClass}`}>{price}</div>;
}

export default OptionPrice;
