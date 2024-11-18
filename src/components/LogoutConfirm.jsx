import React from "react";
import { auth as authProvider } from "../firebase/index";
import { signOut } from "firebase/auth";

const LogoutConfirm = ({ setLogoutConfirm }) => {
  const logoutHandler = async () => {
    try {
      await signOut(authProvider);
    } catch (error) {
      console.log("User logout error: ", error);
    }
  };

  return (
    <div className="w-full h-screen bg-black/80 text-white fixed top-0 left-0 z-50">
      <div className="w-full h-full flex items-center justify-center p-2">
        <div className="alert p-5 flex flex-col gap-5 bg-zinc-900 rounded-lg">
          <p className="font-medium text-xl text-center">
            Confirm, Do you wanna logout?
          </p>

          <div className="buttons w-full flex justify-center gap-2">
            <button
              onClick={() => setLogoutConfirm(false)}
              className="w-1/2 bg-zinc-700 hover:bg-zinc-800 transition-all p -2 rounded-lg"
            >
              Cancel
            </button>

            <button
              onClick={logoutHandler}
              className="w-1/2 bg-red-600 hover:bg-red-700 transition-all p-2 rounded-lg"
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutConfirm;
