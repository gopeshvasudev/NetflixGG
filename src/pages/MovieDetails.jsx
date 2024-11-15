import React from "react";
import { Link, useParams } from "react-router-dom";
import useMovieDetails from "../hooks/useMovieDetails";
import { useSelector } from "react-redux";

const MovieDetails = () => {
  document.title = "Netflix | Details";
  const { movieId } = useParams();

  useMovieDetails(movieId);

  const movieDetails = useSelector((store) => store.movies.movieDetails);

  const {
    backdrop_path = "",
    poster_path = "",
    title = "Loading...",
    tagline = "",
    overview = "No overview available.",
    genres = [],
    release_date = "N/A",
    status = "release",
  } = movieDetails || {};

  const styles = {
    backgroundImage:
      backdrop_path &&
      `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  if (!movieDetails) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-zinc-950 text-white">
        <h1 className="text-2xl font-semibold">Loading....</h1>
      </div>
    );
  }

  return (
    <main id="details-main" className="main w-full text-white" style={styles}>
      <div className="w-full min-h-screen bg-black/85 flex flex-col gap-5 md:flex-row pt-24 px-2">
        <section className="left w-full md:w-1/2 h-[70vh] md:h-[82vh] flex justify-center md:justify-end lg:pr-28">
          <div className="image w-8/12 sm:w-full md:w-10/12 xl:w-8/12 bg-red-300 h-full overflow-hidden rounded-xl">
            <img
              src={`https://image.tmdb.org/t/p/original/${poster_path}`}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        <section className="right w-full md:w-1/2 flex flex-col items-center md:items-start">
          <h1 className="font-[gg] font-bold text-4xl text-[#ED1C28] text-center md:text-start">
            {title}
          </h1>

          <h2 className="font-medium text-xl text-center md:text-start">
            {tagline}
          </h2>

          <div className="genres my-5">
            <ul className="flex gap-5">
              {genres?.map((genre) => (
                <li
                  className="font-semibold text-sm rounded-md border-2 border-[#ED1C28] p-2"
                  key={genre.id}
                >
                  {genre.name}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-zinc-300 w-[80%] text-center md:text-start">
            {overview}
          </p>

          <h6 className="text-sm text-zinc-300 font-medium mt-5 mb-7">
            Release Date: {release_date}
          </h6>

          {status == "Released" && (
            <Link
              to={`/movie/watch/${movieId}`}
              className="font-semibold text-sm bg-[#ED1C28] p-2 rounded-lg mb-5 sm:mb-0"
            >
              Watch Now
            </Link>
          )}
        </section>
      </div>
    </main>
  );
};

export default MovieDetails;
