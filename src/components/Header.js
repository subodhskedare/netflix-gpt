import React from "react";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  return (
    <div className="absolute bg-gradient-to-b from-black z-10">
      <img className="w-44 ml-44" src={LOGO_URL} alt="logo" />
    </div>
  );
};

export default Header;
