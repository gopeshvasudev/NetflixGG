import React, { useState } from "react";
import SignUpForm from "../components/SignUpForm";
import SignInForm from "../components/SignInForm";

const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const styles = {
    backgroundImage: "url(../hero.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <>
      <header className="w-full h-[15vh] flex items-center px-5 absolute top-0 left-0">
        <div className="logo">
          <img src="../logo.webp" alt="Logo" className="w-[250px]" />
        </div>
      </header>
      <main className="main w-full h-screen bg-zinc-900" style={styles}>
        <div className="w-full h-full bg-black/60 flex items-center justify-center">
          {isLoginForm ? (
            <SignInForm handleState={{ isLoginForm, setIsLoginForm }} />
          ) : (
            <SignUpForm handleState={{ isLoginForm, setIsLoginForm }} />
          )}
        </div>
      </main>
    </>
  );
};

export default Login;
