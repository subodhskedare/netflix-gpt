import React from "react";
import { useSelector } from "react-redux";
import useMoviesTrailer from "./../hooks/useMoviesTrailer";

const VideoBackground = ({ movieid }) => {
  const trailerKey = useSelector((store) => store.movies.videoTrailer);
  useMoviesTrailer(movieid);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" + trailerKey + "?&autoplay=1&mute=1"
        }
        title="AFTERBURN | Official Trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
