import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth as authProvider } from "./firebase/index";
import { addUser, removeUser } from "./store/reducers/authSlice";
import { clearMovies } from "./store/reducers/moviesSlice";
import Header from "./components/Header";
import { clearSearch } from "./store/reducers/searchSlice";

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
        dispatch(clearMovies());
        dispatch(clearSearch());
        navigate("/");
      }
    });
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <>
      {!(window.location.pathname === "/") && <Header />}
      <Outlet />
    </>
  );
};

export default App;
