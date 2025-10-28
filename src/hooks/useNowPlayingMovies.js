import React, { useEffect } from "react";
import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "./../redux/moviesSlice";

const useNowPlayingMovies = () => {
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
};

export default useNowPlayingMovies;
