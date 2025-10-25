import React from "react";
import { BACKGROUND_IMG } from "../utils/constant";
import Header from "./Header";
import { useState, useRef } from "react";
import { validate } from "./../utils/validation";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "./../redux/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [validationErrorMsg, setValidationErrorMsg] = useState("");
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleValidation = () => {
    const validationErrorMsg = validate(
      email.current.value,
      password.current.value
    );
    setValidationErrorMsg(validationErrorMsg);

    if (validationErrorMsg) return;

    // signin and sign up
    console.log("here");
    if (!isSignInForm) {
      //sign up

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log("user => ", user);
          updateProfile(auth.currentUser, {
            displayName: email.current.value,
            photoURL:
              "https://occ-0-2890-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229",
          })
            .then(() => {
              const { uid, displayName, photoURL } = user;

              dispatch(
                addUser({
                  uid: uid,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("error=> ", errorCode, errorMessage);
          setValidationErrorMsg(errorCode + "-" + errorMessage);
        });
    } else {
      //sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("user => ", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("error=> ", errorCode, errorMessage);
          setValidationErrorMsg(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BACKGROUND_IMG} alt="BG_ING"></img>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 w-3/12 bg-black text-white my-36 mx-auto right-0 left-0 opacity-75 rounded-md"
      >
        <h1 className="py-3 text-3xl font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm ? (
          <input
            type="text"
            placeholder="Name"
            className="p-2 m-1 rounded-sm w-full text-black  bg-gray-600 "
          ></input>
        ) : (
          ""
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 m-1 rounded-sm w-full text-white  bg-gray-600 "
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 m-1 rounded-sm w-full text-white bg-gray-600"
        ></input>
        <p className="font-bold p-2  ">{validationErrorMsg}</p>
        <button
          onClick={handleValidation}
          className="p-2 m-1 mt-6  bg-red-700 rounded-sm w-full"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
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
