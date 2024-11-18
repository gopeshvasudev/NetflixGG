import React from "react";
import { FaInfoCircle, FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

const MovieInfo = ({ movie }) => {
  return (
    <div className="movie-info w-full h-full absolute top-0 left-0 z-10 flex flex-col justify-end items-start px-5 pb-40 sm:pl-10 gap-2 bg-gradient-to-r from-black/90">
      <h1 className="font-bold text-5xl sm:text-7xl font-[gg]">
        {movie?.title}
      </h1>

      <p className="font-medium text-md text-zinc-300 w-full md:w-6/12 lg:w-4/12 leading-[1.2]">
        {movie?.overview}
      </p>

      <div className="flex items-center gap-2">
      <Link
        to={`/movie/watch/${movie?.id}`}
        className="px-5 py-2 rounded-full bg-white border-2 border-transparent text-black font-semibold flex items-center gap-1 hover:bg-transparent hover:text-white hover:border-white transition-all mt-5"
      >
        <span>
          <FaPlay />
        </span>
        Play
      </Link>

      <Link
        to={`/movie/${movie?.id}`}
        className="px-5 py-2 rounded-full bg-black/50 border-2 border-transparent font-semibold flex items-center gap-1 hover:bg-transparent hover:border-zinc-950 hover:text-white transition-all mt-5"
      >
        <span>
          <FaInfoCircle />
        </span>
        More Info
      </Link>
      </div>
    </div>
  );
};

export default MovieInfo;
