import React from "react";
import { BACKGROUND_IMG } from "../utils/constant";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BACKGROUND_IMG} alt="BG_ING"></img>
      </div>
      <form className="absolute p-12 w-3/12 bg-black text-white my-36 mx-auto right-0 left-0 opacity-75 rounded-md">
        <h1 className="py-3 text-3xl font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {isSignInForm ? (
          <input
            type="text"
            placeholder="Name"
            className="p-2 m-1 rounded-sm w-full text-black  bg-gray-600 "
          ></input>
        ) : (
          ""
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 m-1 rounded-sm w-full text-black  bg-gray-600 "
        ></input>
        <input
          type="text"
          placeholder="Password"
          className="p-2 m-1 rounded-sm w-full text-black bg-gray-600"
        ></input>
        <button className="p-2 m-1 mt-8  bg-red-700 rounded-sm w-full">
          Sign In
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
