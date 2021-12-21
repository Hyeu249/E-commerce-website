import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <div className={`flex bd-t-light text-center py-4`}>
      <div
        className={`ml-auto text-base text-white px-3 py-1 bg-yellow-500 rounded-md active`}
        onClick={() => navigate("complete")}
      >
        Hoàn Thành
      </div>
    </div>
  );
}

export default Footer;
