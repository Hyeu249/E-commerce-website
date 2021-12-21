import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { onAuthStateChanged, auth } from "./firebase";
import Home from "./components/Home/Home";
import Workplace from "./components/Workplace/Workplace";
import { useDispatch, useSelector } from "react-redux";
import { loginHandle } from "./store/global/globalSlice";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        dispatch(
          loginHandle({
            uid: user.uid,
            name: user.displayName,
            email: user.email,
            avatar: user.photoURL,
          })
        );
      }
    });
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Home user={user} />} />
      <Route path="workplace/:path/*" element={<Workplace />} />
    </Routes>
  );
}

export default App;
