import { signInWithPopup, auth, provider, signOut } from "../../../firebase";
import { useDispatch } from "react-redux";
import { loginHandle } from "../../../store/credentials/credentialsSlice";
import { LogOutIcon, DashboardIcon } from "../../../Icon/Icon";
import { useNavigate } from "react-router-dom";

function Login({ user }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const settingAccount =
    "flex items-center px-2 py-2 hover:bg-gray-100 hover:text-black text-base text-gray-500 rounded-md pointer";

  return (
    <div className="flex w-[120px] justify-center">
      {!user && (
        <div
          className="btn active"
          onClick={() => {
            signInWithPopup(auth, provider).catch((err) => {
              alert(err.message);
            });
          }}
        >
          Đăng nhập
        </div>
      )}

      {user && (
        <div className="relative">
          <img
            src={user.avatar}
            alt=""
            className="peer w-[40px] h-[40px] rounded-full bg-green-500 pointer"
          />
          <div className="peer-hover:inline-block hover:inline-block hidden abs-r-max w-[250px] py-6 px-3 rounded-md bg-white shadown-3xl">
            <div className={`${settingAccount}`}>Trang cá nhân</div>
            <div className="bd-b-1-gray w-[210px] my-2 mx-auto"></div>
            <div
              className={`${settingAccount}`}
              onClick={() => navigate("/workplace/dashboard")}
            >
              <DashboardIcon />
              Bảng điều khiển
            </div>
            <div
              className={settingAccount}
              onClick={() => {
                signOut(auth)
                  .then(dispatch(loginHandle(false)))
                  .catch(() => {
                    alert("That's not gonna happen, try it again sir");
                  });
              }}
            >
              <LogOutIcon /> Đăng xuất
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
