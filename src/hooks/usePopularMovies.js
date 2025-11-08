import React, { useEffect } from "react";
import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "./../redux/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMoviesData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
      options
    );
    const PopularMoviesData = await data.json();
    dispatch(addPopularMovies(PopularMoviesData.results));
  };
  useEffect(() => {
    getPopularMoviesData();
    return () => {};
  }, []);
};

export default usePopularMovies;
