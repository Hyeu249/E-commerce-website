function PickSideShirt({ text, id, textClass, onClick, checkedDf }) {
  return (
    <div className={`${textClass} relative `}>
      <input
        id={id}
        name="sideShirt"
        className="peer invisible top"
        type="radio"
        defaultChecked={checkedDf}
      />
      <label
        className="peer-checked:text-red-400 active"
        htmlFor={id}
        onClick={onClick}
      >
        {text}
      </label>
    </div>
  );
}

export default PickSideShirt;
