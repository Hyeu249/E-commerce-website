import NavBar from "./NavBar/NavBar";
import background from "../../img/pngwing.com.png";
import { useNavigate } from "react-router-dom";

function Home({ user }) {
  const navigate = useNavigate();

  return (
    <div className="mx-10 md:px-20 xl:px-44">
      <NavBar user={user} />
      {user && (
        <div>
          <div className="flex justify-around items-center bg-green-500 mt-11 h-[700px] rounded-3xl">
            <div className="w-[400px]">
              <div className="text-5xl font-bold leading-tight">
                Create your store
              </div>
              <div className="mt-5 font-medium text-base leading-6">
                Get Free Education And high quality educational system to help
                you advance in your career, learn a new language by
              </div>
              <div
                className="btn-blue active inline-block mt-5"
                onClick={() => navigate("/workplace/campaign")}
              >
                TẠO CAMPAIGN
              </div>
            </div>
            <div
              style={{
                width: "50%",
                height: "100%",
                backgroundImage: `url(${background})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100%",
                backgroundPosition: "right center",
              }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
