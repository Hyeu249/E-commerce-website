function Logo({ className, spanClass }) {
  return (
    <div className={`font-sebino text-yellow-300 text-3xl ${className}`}>
      Se<span className={`text-white ${spanClass}`}>lling</span>
    </div>
  );
}

export default Logo;
