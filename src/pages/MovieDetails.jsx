import React from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { movieId } = useParams();
  return <main className="main w-full min-h-screen bg-zinc-950"></main>;
};

export default MovieDetails;
