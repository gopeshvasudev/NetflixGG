import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addWatchMovie } from "../store/reducers/moviesSlice";

const useFetchWatchMovie = (movieId) => {
  const dispatch = useDispatch();

  const fetchMovie = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );

      const { results } = await res.json();
      const filterClip = results.filter((clip) => clip.type === "Trailer");

      dispatch(addWatchMovie(filterClip[0]));
    } catch (error) {
      console.log("Watch movie error: ", error);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, []);
};

export default useFetchWatchMovie;
