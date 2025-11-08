import React, { useEffect } from "react";
import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "./../redux/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMoviesData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      options
    );
    const TopRatedMoviesData = await data.json();
    dispatch(addTopRatedMovies(TopRatedMoviesData.results));
  };
  useEffect(() => {
    getTopRatedMoviesData();
    return () => {};
  }, []);
};

export default useTopRatedMovies;
