import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ listData }) => {
  return (
    <div className="w-full py-3 pl-5 sm:pl-10">
      <h1 className="font-medium text-2xl mb-3">{listData.title}</h1>

      <div className="scrollable-container flex overflow-x-auto">
        <div className="flex gap-3">
          {listData.movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              data={{ imagePath: movie.poster_path, name: movie.title }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
