import React, { useEffect } from "react";
import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTvShows } from "../redux/tvShowsSlice";

const useTvshows = () => {
  const dispatch = useDispatch();
  const getTvshowsData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
      options
    );
    const TvshowsData = await data.json();
    dispatch(addTvShows(TvshowsData.results));
  };
  useEffect(() => {
    getTvshowsData();
    return () => {};
  }, []);
};

export default useTvshows;
