import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../store/reducers/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const fetchData = async () => {
    const url = "https://api.themoviedb.org/3/movie/popular?page=1";

    const res = await fetch(url, API_OPTIONS);
    const data = await res.json();

    dispatch(addPopularMovies(data.results));
  };

  useEffect(() => {
    !popularMovies && fetchData();
  }, []);
};

export default usePopularMovies;
