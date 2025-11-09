import React from "react";
import lang from "../utils/languageContant";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {
  const languageKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex felx justify-center ">
      <form className="bg-black w-1/2">
        <input
          className="p-4 m-4 ml-7 w-[50%] text-black"
          placeholder={lang[languageKey].gptSearchPlacholder}
          type="text"
        />
        <button className="py-4 px-4 w-[40%] bg-red-700 text-white rounded-lg">
          {lang[languageKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
