import React from "react";

const MovieCard = ({ data }) => {
  return (
    <div className="w-[180px] h-[250px] bg-zinc-800 rounded-md overflow-hidden cursor-pointer hover:scale-90 transition-all">
      <img
        src={"https://image.tmdb.org/t/p/original/" + data?.imagePath}
        alt={data?.name}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default MovieCard;
