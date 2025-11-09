import { useEffect } from "react";
import { options } from "./../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addVideoTrailer } from "../redux/moviesSlice";

const useMoviesTrailer = (movieId) => {
  const dispatch = useDispatch();
  const videoTrailer = useSelector((store) => store.movies.videoTrailer);
  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      options
    );

    const jsonData = await data.json();
    const filterTrailer = jsonData?.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterTrailer.length
      ? filterTrailer[0]
      : jsonData.results[0];
    dispatch(addVideoTrailer(trailer.key));
  };
  useEffect(() => {
    !videoTrailer && getMovieVideo();
  }, []);
};

export default useMoviesTrailer;
