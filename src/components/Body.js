import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import Browser from "./Browser";
import Login from "./Login";
import { useDispatch } from "react-redux";
import { removeUser, addUser } from "./../redux/userSlice";
const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browser />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, photoURL } = user;
        dispatch(
          addUser({ uid: uid, displayName: displayName, photoURL: photoURL })
        );
      } else {
        dispatch(removeUser());
      }
    });
  }, []);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
