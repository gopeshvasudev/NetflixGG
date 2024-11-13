import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import auth from "../firebase/auth";
import { auth as authProvider } from "../firebase/index";
import { useDispatch } from "react-redux";
import { addUser } from "../store/reducers/authSlice";

const SignUpForm = ({ handleState }) => {
  const [isViewPassword, setIsViewPassword] = useState(false);
  const { isLoginForm, setIsLoginForm } = handleState;

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { error },
    reset,
  } = useForm();

  const submitHandler = async (data) => {
    const { fullname, email, password } = data;

    try {
      const user = await auth.signUp({ email, password });

      if (user) {
        await auth.updateUser({ fullname });

        const { displayName, email, uid, photoURL } = authProvider.currentUser;
        const currentUser = {
          fullname: displayName,
          email,
          uid,
          avatar: photoURL,
        };
        dispatch(addUser(currentUser));
      }
    } catch (error) {
      console.log("Sign up error: ", error.message);
    } finally {
      reset({
        fullname: "",
        email: "",
        password: "",
      });
    }
  };

  return (
    <form
      method="post"
      className="w-[300px] flex flex-col gap-3 p-5 rounded-md bg-black/80 text-white"
      onSubmit={handleSubmit(submitHandler)}
    >
      <h1 className="text-3xl font-black mb-2">Sign Up</h1>
      <input
        autoComplete="off"
        className="w-full p-3 bg-zinc-800/70 rounded-sm outline-none"
        type="text"
        name="fullname"
        placeholder="Fullname"
        {...register("fullname")}
      />
      <input
        autoComplete="off"
        className="w-full p-3 bg-zinc-800/70 rounded-sm outline-none"
        type="email"
        name="email"
        placeholder="Email"
        {...register("email")}
      />
      <div className="w-full pr-3 flex items-center gap-2  bg-zinc-800/70">
        <input
          autoComplete="off"
          className="w-full p-3 bg-transparent rounded-sm outline-none"
          type={!isViewPassword ? "password" : "text"}
          name="password"
          placeholder="Password"
          {...register("password")}
        />

        <span onClick={() => setIsViewPassword(!isViewPassword)}>
          {!isViewPassword ? (
            <FaRegEye className="text-xl cursor-pointer text-zinc-300" />
          ) : (
            <FaRegEyeSlash className="text-xl cursor-pointer text-zinc-300" />
          )}
        </span>
      </div>
      <p
        className="text-sm cursor-pointer my-2 text-center text-zinc-400"
        onClick={() => setIsLoginForm(!isLoginForm)}
      >
        Already have an Account?{" "}
        <span className="font-semibold text-white">Sign in now</span>{" "}
      </p>
      <button
        type="submit"
        className="bg-[#ED1C24] py-3 font-medium rounded-md hover:bg-[#cc161c] duration-100"
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
