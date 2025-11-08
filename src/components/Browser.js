import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "./../hooks/useNowPlayingMovies";
import useTvshows from "./../hooks/useTvShows";
import usePopularMovies from "./../hooks/usePopularMovies";
import useTopRatedMovies from "./../hooks/useTopRatedMovies";
import SecondaryContainer from "./SecondaryContainer";
import MainContainer from "./MainContainer";

const Browser = () => {
  useNowPlayingMovies();
  useTvshows();
  usePopularMovies();
  useTopRatedMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browser;
