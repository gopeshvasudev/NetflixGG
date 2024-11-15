import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieDetails } from "../store/reducers/moviesSlice";

const useMovieDetails = (movieId) => {
  const dispatch = useDispatch();

  const movieDetails = useSelector((store) => store.movies.movieDetails);

  const fetchMovieDetails = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}`,
        API_OPTIONS
      );
      const data = await res.json();

      dispatch(addMovieDetails(data));
    } catch (error) {
      console.log("Movie Details error: ", error.message);
    }
  };

  useEffect(() => {
    !movieDetails && fetchMovieDetails();
  }, []);
};

export default useMovieDetails;
