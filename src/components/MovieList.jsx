import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ listData }) => {
  return (
    <div className="w-full py-3 pl-5 sm:pl-10">
      <h1 className="font-medium text-2xl mb-3">{listData.title}</h1>

      <div className="scrollable-container flex overflow-x-auto">
        <div className="flex gap-3">
          {listData.movies?.map((movie) => (
            <Link to={`/movie/${movie.id}`} key={movie.id}>
              <MovieCard
                data={{ imagePath: movie.poster_path, name: movie.title }}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
