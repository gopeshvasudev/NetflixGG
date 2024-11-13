import { useEffect, useState } from "react";
import MovieHighlight from "../components/MovieHighlight";
import MovieInfo from "../components/MovieInfo";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { useSelector } from "react-redux";
import MovieList from "../components/MovieList";

const Browse = () => {
  const [highlightedMovieIndex, setHighlightedMovieIndex] = useState(0);

  useNowPlayingMovies();

  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

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

        <section className="w-full min-h-screen">
          <MovieList
            listData={{ title: "Now Playing", movies: nowPlayingMovies }}
          />
        </section>
      </main>
    </>
  );
};

export default Browse;
