import React, { useEffect } from "react";
import Header from "./Header";
import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "./../redux/moviesSlice";

const Browser = () => {
  const dispatch = useDispatch();
  const getNowPlayingMoviesData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    );
    const nowPlayingMoviesData = await data.json();
    dispatch(addNowPlayingMovies(nowPlayingMoviesData.results));
  };
  useEffect(() => {
    getNowPlayingMoviesData();
    return () => {};
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browser;
