function AlignFrameText({ id, img, className, defaultChecked, onMouseDown }) {
  return (
    <div className="relative" onMouseDown={onMouseDown}>
      <label htmlFor={id}>
        <input
          id={id}
          className="peer absolute invisible"
          type="radio"
          name="alignFrameText"
          defaultChecked={defaultChecked}
        />
        <img
          className={` ${className}`}
          // className={`peer-checked:bg-white peer-checked:filter-none ${className}`}
          src={img}
          alt="align text"
        />
      </label>
    </div>
  );
}

export default AlignFrameText;
