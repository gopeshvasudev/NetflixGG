const MovieHighlight = ({ movie }) => {
  return (
    <div className="movie-highlight w-full h-full">
      <img
        src={"https://image.tmdb.org/t/p/original/" + movie?.backdrop_path}
        alt={movie?.title}
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
};

export default MovieHighlight;
