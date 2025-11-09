import React from "react";
import lang from "../utils/languageContant";
import { useSelector } from "react-redux";
import { useRef } from "react";
import openAI from "../utils/openAI";

const GPTSearchBar = () => {
  const languageKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const handleGPTSearchClick = async () => {
    console.log(searchText.current.value);

    // const completion = await openAI.chat.completions.create({
    //   model: "gpt-4o",
    //   messages: [{ role: "user", content: searchText.current.value }],
    // });
  };
  return (
    <div className="pt-[10%] flex felx justify-center ">
      <form className="bg-black w-1/2" onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          className="p-4 m-4 ml-7 w-[50%] text-black"
          placeholder={lang[languageKey].gptSearchPlacholder}
          type="text"
        />
        <button
          className="py-4 px-4 w-[40%] bg-red-700 text-white rounded-lg"
          onClick={handleGPTSearchClick}
        >
          {lang[languageKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
