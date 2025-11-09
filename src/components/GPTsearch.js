import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggetions from "./GPTMovieSuggetions";
import { BACKGROUND_IMG } from "../utils/constant";

const GPTsearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BACKGROUND_IMG} alt="BG_ING"></img>
      </div>
      <GPTSearchBar />
      <GPTMovieSuggetions />
    </div>
  );
};

export default GPTsearch;
