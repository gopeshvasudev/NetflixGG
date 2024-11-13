import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieDetails } from "../store/reducers/moviesSlice";

const useMovieDetails = (movieId) => {
  const dispatch = useDispatch();

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
    fetchMovieDetails();
  }, []);
};

export default useMovieDetails;
