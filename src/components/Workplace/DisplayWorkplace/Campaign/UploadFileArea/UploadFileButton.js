import uploadIcon from "../../../../../img/uploadIcon.png";

function UploadFileButton({ onChange }) {
  return (
    <div>
      <input
        id="postFileCreaAPost"
        type="file"
        accept="image/jpeg, image/png"
        onChange={onChange}
        className="absolute invisible"
      />
      <label
        htmlFor="postFileCreaAPost"
        className="flex items-center btn active"
      >
        <img className="filter-gray-i4 mr-3" src={uploadIcon} alt="upload" />{" "}
        <div>Upload file</div>
      </label>
    </div>
  );
}

export default UploadFileButton;
