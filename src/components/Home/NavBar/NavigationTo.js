import react from "react";

function NavigationTo({ className, to, defaultChecked }) {
  return (
    <div>
      <input
        value={to}
        id={to}
        type="radio"
        name="navTosubPage"
        defaultChecked={defaultChecked}
        className="peer invisible w-[0.1px] h-[0.1px]"
      />
      <label htmlFor={to} className={`${className}`}>
        {to}
      </label>
      <div className={`peer-checked:border-b-3-green-30`}></div>
    </div>
  );
}

export default react.memo(NavigationTo);
