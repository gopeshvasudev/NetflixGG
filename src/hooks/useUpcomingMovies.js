import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../store/reducers/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  const fetchData = async () => {
    const url = "https://api.themoviedb.org/3/movie/upcoming?page=1";

    const res = await fetch(url, API_OPTIONS);
    const data = await res.json();

    dispatch(addUpcomingMovies(data.results));
  };

  useEffect(() => {
    !upcomingMovies && fetchData();
  }, []);
};

export default useUpcomingMovies;
