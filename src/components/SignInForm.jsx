import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import auth from "../firebase/auth";

const SignInForm = ({ handleState }) => {
  const [isViewPassword, setIsViewPassword] = useState(false);
  const [firebaseError, setFirebaseError] = useState(null);

  const { isLoginForm, setIsLoginForm } = handleState;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const submitHandler = async (data) => {
    const { email, password } = data;

    try {
      const res = await auth.signIn({ email, password });

      if (res && res.errorCode) {
        console.log(res.errorCode);
        if (res.errorCode === "auth/invalid-credential") {
          setFirebaseError("Invalid user Credentials");
        }
      }
    } catch (error) {
      console.log("Sign in error: ", error.message);
    } finally {
      reset({
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
      <h1 className="text-3xl font-black mb-2">Sign In</h1>
      <input
        autoComplete="off"
        className="w-full p-3 bg-zinc-800/70 rounded-sm outline-none"
        type="email"
        placeholder="Email"
        {...register("email", { required: true })}
      />
      {errors.email && (
        <p className="text-sm text-red-500">Email is required</p>
      )}
      <div className="w-full pr-3 flex items-center gap-2  bg-zinc-800/70">
        <input
          autoComplete="off"
          className="w-full p-3 bg-transparent rounded-sm outline-none"
          type={!isViewPassword ? "password" : "text"}
          placeholder="Password"
          {...register("password", { required: true })}
        />

        <span onClick={() => setIsViewPassword(!isViewPassword)}>
          {!isViewPassword ? (
            <FaRegEye className="text-xl cursor-pointer text-zinc-300" />
          ) : (
            <FaRegEyeSlash className="text-xl cursor-pointer text-zinc-300" />
          )}
        </span>
      </div>
      {errors.password && (
        <p className="text-sm text-red-500">Password is required</p>
      )}
      {firebaseError && <p className="text-sm text-red-500">{firebaseError}</p>}
      <p
        className="text-sm cursor-pointer my-2 text-center text-zinc-400"
        onClick={() => setIsLoginForm(!isLoginForm)}
      >
        New to Netflix?
        <span className="font-semibold text-white"> Sign In now</span>
      </p>
      <button
        type="submit"
        className="bg-[#ED1C24] py-3 font-medium rounded-md hover:bg-[#cc161c] duration-100"
      >
        Sign In
      </button>
    </form>
  );
};

export default SignInForm;
