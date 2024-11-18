import { useParams } from "react-router-dom";
import useFetchWatchMovie from "../hooks/useFetchWatchMovie";
import { useSelector } from "react-redux";

const MovieWatch = () => {
  const { movieId } = useParams();
  useFetchWatchMovie(movieId);

  const movie = useSelector((store) => store.movies.watchMovie);

  if (!movie?.key) {
    return (
      <div className="w-full h-screen bg-zinc-950 text-white flex items-center justify-center">
        <h1 className="text-2xl font-semibold">Loading...</h1>
      </div>
    );
  }

  return (
    <main className="main w-full h-screen pt-15">
      <div className="screen w-full h-full">
        <iframe
          src={`https://www.youtube.com/embed/${movie?.key}?si=YOAWQhgSNTOINWQ2`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="w-full h-full object-cover"
        ></iframe>
      </div>
    </main>
  );
};

export default MovieWatch;
