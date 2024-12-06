import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LogoutConfirm from "./LogoutConfirm";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [logoutConfirm, setLogoutConfirm] = useState(false);
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  const user = useSelector((store) => store.auth.user);

  const handleLogoutConfirm = () => {
    setLogoutConfirm(true);
  };

  const toggleNavigators = () => {
    setIsSmallDevice(!isSmallDevice);
  };
  
  return (
    <>
      <header className="fixed w-full top-0 left-0 z-[100]">
        {logoutConfirm && <LogoutConfirm setLogoutConfirm={setLogoutConfirm} />}
        <nav className="relative navbar w-full h-[12vh] bg-gradient-to-b from-zinc-950 to-transparent text-white flex items-center justify-between px-2 sm:px-5">
          <div className="left flex items-center gap-10">
            <Link to={"/browse"}>
              <img src="../logo.webp" alt="Logo" className="w-[180px]" />
            </Link>
          </div>

          <div className="right">
            <div className="flex items-center gap-3">
              <div className="avatar w-[35px] h-[35px] border-2 border-white rounded-full overflow-hidden">
                <img
                  src={user?.avatar}
                  className="w-full h-full object-cover invert-[100%]"
                  alt="avatar"
                />
              </div>

              <div
                className={`absolute top-[100%] md:static z-50 flex flex-col md:flex-row items-center gap-2 bg-black/50 md:bg-transparent p-5 md:p-0 rounded-[10px_0px_0px_10px] duration-300 ${
                  !isSmallDevice ? "right-[-100%]" : "right-0"
                }`}
              >
                <button
                  onClick={handleLogoutConfirm}
                  className="w-full md:w-fit text-sm py-2 px-3 bg-red-600 text-white rounded-full font-semibold"
                >
                  Logout
                </button>

                <Link
                  to={"/search-ai"}
                  className="w-full md:w-fit text-sm py-2 px-3 bg-red-600 text-white rounded-full font-semibold"
                >
                  Ask to AI
                </Link>
              </div>
              <div
                className="md:hidden text-3xl duration-300"
                onClick={toggleNavigators}
              >
                {!isSmallDevice ? <RiMenu3Fill /> : <IoMdClose />}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
