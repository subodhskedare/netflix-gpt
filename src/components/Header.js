import React, { useEffect } from "react";
import { LOGO_URL, SUPPORTED_LANGUAGE } from "../utils/constant";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { removeUser, addUser } from "./../redux/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { USER_ICON_IMG } from "../utils/constant";
import { toggleGPTSearchView } from "../redux/GPTSlice";
import { changeLanguage } from "../redux/configSlcie";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const gptSearch = useSelector((store) => store.gpt.showGPTSearch);

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };
  const handleGPTSearchClick = () => {
    dispatch(toggleGPTSearchView());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, photoURL } = user;
        dispatch(
          addUser({ uid: uid, displayName: displayName, photoURL: photoURL })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute w-screen bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44 ml-44" src={LOGO_URL} alt="logo" />
      {user ? (
        <div className="flex p-2 ">
          {gptSearch ? (
            <select
              className="py-2 px-4 m-4 bg-gray-800 text-white hover:bg-gray-500 rounded-md"
              onClick={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGE.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          ) : (
            ""
          )}
          <button
            className="py-2 px-4 m-4 bg-purple-800 text-white hover:bg-purple-500 rounded-md"
            onClick={handleGPTSearchClick}
          >
            {gptSearch ? "Home Page" : "GPT search"}
          </button>
          <img className="w-12 h-12 m-3 " alt="userIcon" src={USER_ICON_IMG} />
          <button className="m-3 font-bold text-white" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
