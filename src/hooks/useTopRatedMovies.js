import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../store/reducers/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    const url = "https://api.themoviedb.org/3/movie/top_rated?page=1";

    const res = await fetch(url, API_OPTIONS);
    const data = await res.json();

    dispatch(addTopRatedMovies(data.results));
  };

  useEffect(() => {
    fetchData();
  }, []);
};

export default useTopRatedMovies;
