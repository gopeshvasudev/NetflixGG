import React from "react";

const SearchResultCard = ({ data }) => {
  const { backdrop_path, title, poster_path } = data;

  return (
    <div className="result w-full sm:w-64 shrink-0">
      <figure className="thumbnail w-full h-64 sm:h-56 bg-zinc-300 rounded-lg overflow-hidden">
        <img
          src={`https://image.tmdb.org/t/p/w500/${
            backdrop_path ? backdrop_path : poster_path
          }`}
          className="w-full h-full object-cover"
          alt={title}
        />
      </figure>

      <h2 className="font-medium text-lg px-1">{title}</h2>
    </div>
  );
};

export default SearchResultCard;
