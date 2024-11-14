import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth as authProvider } from "./firebase/index";
import { addUser, removeUser } from "./store/reducers/authSlice";
import Header from "./components/Header";

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getCurrentUser = () => {
    const auth = authProvider;
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const currentUser = {
          fullname: user.displayName,
          email: user.email,
          uid: user.uid,
          avatar: user.photoURL,
        };

        dispatch(addUser(currentUser));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <>
      {!(
        window.location.pathname === "/" ||
        window.location.pathname.startsWith("/movie/watch")
      ) && <Header />}

      <Outlet />
    </>
  );
};

export default App;
