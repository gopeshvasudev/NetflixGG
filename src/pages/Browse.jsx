import { useEffect, useState } from "react";
import MovieHighlight from "../components/MovieHighlight";
import MovieInfo from "../components/MovieInfo";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import MovieList from "../components/MovieList";

const Browse = () => {
  document.title = "Netflix | Browse";
  const [highlightedMovieIndex, setHighlightedMovieIndex] = useState(0);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const movies = useSelector((store) => store.movies);

  const { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies } =
    movies;

  useEffect(() => {
    if (nowPlayingMovies && nowPlayingMovies.length > 0) {
      const randomNumber = Math.floor(Math.random() * nowPlayingMovies?.length);
      setHighlightedMovieIndex(randomNumber);
    }
  }, [nowPlayingMovies]);

  return (
    <>
      <main className="main w-full min-h-screen bg-zinc-950 text-white overflow-hidden">
        <section className="relative hero w-full h-screen">
          <MovieHighlight movie={nowPlayingMovies?.[highlightedMovieIndex]} />

          <MovieInfo movie={nowPlayingMovies?.[highlightedMovieIndex]} />
        </section>

        <section className="w-full min-h-screen relative z-50 -mt-24">
          <MovieList
            listData={{ title: "Now Playing", movies: nowPlayingMovies }}
          />
          <MovieList listData={{ title: "Popular", movies: popularMovies }} />
          <MovieList
            listData={{ title: "Top Rated", movies: topRatedMovies }}
          />
          <MovieList listData={{ title: "Upcoming", movies: upcomingMovies }} />
        </section>
      </main>
    </>
  );
};

export default Browse;
