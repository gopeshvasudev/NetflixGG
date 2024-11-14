import React from "react";
import { useSelector } from "react-redux";
import { auth as authProvider } from "../firebase/index";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";

const Header = () => {
  const user = useSelector((store) => store.auth.user);

  const logoutHandler = async () => {
    try {
      await signOut(authProvider);
    } catch (error) {
      console.log("User logout error: ", error);
    }
  };

  return (
    <header className="fixed w-full top-0 left-0 z-[100] overflow-hidden">
      <nav className="relative navbar w-full h-[12vh] bg-gradient-to-b from-zinc-950 to-transparent text-white flex items-center justify-between px-2 sm:px-5">
        <div className="left flex items-center gap-10">
          <Link to={"/browse"}>
            <img src="../logo.webp" alt="Logo" className="w-[180px]" />
          </Link>
        </div>

        <div className="right">
          <div className="flex items-center gap-3">
            <div className="avatar w-[40px] h-[40px] border-2 border-white rounded-full overflow-hidden">
              <img
                src={user?.avatar}
                className="w-full h-full object-cover invert-[100%]"
                alt="avatar"
              />
            </div>

            <button
              onClick={logoutHandler}
              className="py-2 px-3 bg-red-600 text-white rounded-full font-semibold"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
