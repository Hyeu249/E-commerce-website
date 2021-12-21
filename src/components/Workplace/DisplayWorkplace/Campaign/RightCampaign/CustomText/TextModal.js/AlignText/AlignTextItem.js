function AlignTextItem({ id, img, defaultchecked, onMouseDown }) {
  const itemCLass = "flex items-center justify-center flex-1 bd-r-light";
  const imgClass = "w-6 h-6 filter-gray-200";
  return (
    <label
      htmlFor={id}
      className={`relative ${itemCLass} pointer`}
      onMouseDown={onMouseDown}
    >
      <input
        id={id}
        type="radio"
        name="AlignTextItems"
        className="peer absolute invisible"
        defaultChecked={defaultchecked}
      />

      <img
        className={`peer-checked:filter-none ${imgClass}`}
        src={img}
        alt="align text"
      />
    </label>
  );
}

export default AlignTextItem;
