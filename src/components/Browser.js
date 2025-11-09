import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "./../hooks/useNowPlayingMovies";
import useTvshows from "./../hooks/useTvShows";
import usePopularMovies from "./../hooks/usePopularMovies";
import useTopRatedMovies from "./../hooks/useTopRatedMovies";
import SecondaryContainer from "./SecondaryContainer";
import MainContainer from "./MainContainer";
import GPTsearch from "./GPTsearch";
import { useSelector } from "react-redux";

const Browser = () => {
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
  console.log("showGPTSearch", showGPTSearch);
  useNowPlayingMovies();
  useTvshows();
  usePopularMovies();
  useTopRatedMovies();
  return (
    <div>
      <Header />
      {showGPTSearch ? (
        <GPTsearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browser;
